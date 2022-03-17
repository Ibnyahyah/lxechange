import React, {useContext, useState, useEffect} from 'react';
import { getAuth, signInWithPopup,  GoogleAuthProvider,signOut } from "firebase/auth";

import { useNavigate } from 'react-router-dom';

import initializeAuthentication from '../firebase';



initializeAuthentication();
const AuthContext = React.createContext();


export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [userDetailsDatas, setUserDetailsDatas] = useState([]);
    const [userAccountAddressDatas, setUserAccountAddressDatas] = useState([]);
    const [transactions, setTransactions] = useState([])

    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    
    const handleGoogleSignIn = ()=>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            localStorage.setItem('lsUser',JSON.stringify(user));

            console.log(token)
            
            if(user)navigate("/user/dashboard");
        }).catch((error) => {
            setError(error.message);
        })

    }

    const handleLogout = async () =>{
        const auth = getAuth();
        await signOut(auth);
        
        localStorage.removeItem("lsUser")
        sessionStorage.removeItem("userDetails")
        sessionStorage.removeItem("userAccountAndAddress")

        navigate('/');
        window.location.reload();
    }

    const userlx = JSON.parse(localStorage.getItem("lsUser"))

    useEffect(()=>{
        var result = ()=>{
            setUser(user);
            setLoading(false);
        };
        result()
    }, [ user, setLoading, navigate]);

    // Fecthing user detail from firebase database

    useEffect(() => {
        if(userlx){
          fetch(
            `https://lsexchange-25610-default-rtdb.firebaseio.com/${userlx.email.split('.')[0]}-profile.json`
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const docs = [];
              for (const key in data) {
                const doc = {
                  id: key,
                  ...data[key],
                };
                docs.push(doc);
                let docData = docs;
                sessionStorage.setItem('userDetails',JSON.stringify(docData));
                setUserDetailsDatas(docData);
                setLoading(false);
              }
            });
        }else{
          return;
        }
      }, [userlx]);

    //   Fecthing user account and address details
    
  useEffect(() => {
    if(userlx){
      fetch(
        `https://lsexchange-25610-default-rtdb.firebaseio.com/${userlx.email.split('.')[0]}-account-address.json`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const docs = [];
          for (const key in data) {
            const doc = {
              id: key,
              ...data[key],
            };
            docs.push(doc);
            let docData = docs;
            sessionStorage.setItem('userAccountAndAddress',JSON.stringify(docData))
            setUserAccountAddressDatas(docData);
            setLoading(false)
          }
        });
    }else{
      return;
    }
  }, [userlx]);


  // Fecthing transacation from firebase
  useEffect(()=>{
    if(userlx){
      fetch(`https://lsexchange-25610-default-rtdb.firebaseio.com/${userlx.email.split('.')[0]}.json`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        const docs = [];
        for (const key in data){
            const doc = {
                id :key,
                ...data[key]
            };
            docs.push(doc);

        }
        let sort = docs.sort((p1,p2)=>{
            return new Date(p2.Date) - new Date(p1.Date)
        })
        setTransactions(sort)
    })
    }else{
      return;
    }
},[userlx]);


    const value = {
        user:userlx,
        handleGoogleSignIn: handleGoogleSignIn,
        handleLogout:handleLogout,
        loading:loading,
        error:error,
        userDetailsDatas:userDetailsDatas,
        userAccountAddressDatas:userAccountAddressDatas,
        transactions:transactions
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}