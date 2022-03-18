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

    
    const value = {
        user:userlx,
        handleGoogleSignIn: handleGoogleSignIn,
        handleLogout:handleLogout,
        loading:loading,
        error:error,
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}