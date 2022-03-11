import React, {useContext, useState, useEffect} from 'react';
import { getAuth, signInWithPopup,  GoogleAuthProvider,signOut } from "firebase/auth";

import { useNavigate } from 'react-router-dom';

import initializeAuthentication from '../firebase';



const AuthContext = React.createContext();


export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    initializeAuthentication();
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
            // Handle Errors here.
            // const errorCode = error.code;
            setError(error.message);
            // The email of the user's account used.
            // const email = error.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
        })

    }
    const userlx = JSON.parse(localStorage.getItem("lsUser"))

    const handleLogout = async () =>{
        const auth = getAuth();
        await signOut(auth);
        
        localStorage.removeItem("lsUser")

        navigate('/');
    }

    useEffect(()=>{
        var result = ()=>{
            setUser(user);
            setLoading(false);
        };
        result()
    }, [ user, setLoading, navigate]);

    const value = {
        user:userlx,
        handleGoogleSignIn: handleGoogleSignIn,
        handleLogout:handleLogout,
        loading:loading,
        error:error
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}