import React, {useContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, signInWithPopup,  GoogleAuthProvider } from "firebase/auth";


const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    
    const provider = new GoogleAuthProvider();
    
    const handleGoogleSignIn = ()=>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user)
            localStorage.setItem('lsUser',JSON.stringify(user))
            if(user)navigate('/user/dashboard');
        })

    }
    const userlx = JSON.parse(localStorage.getItem("lsUser"))

    const handleLogout = async () =>{
        // const auth = getAuth();
        // await signOut(auth);
        
        localStorage.removeItem("lsUser")

        navigate('/');
    }

    useEffect(()=>{
        const result =()=>{
            setUser(user);
            setLoading(false);
        }
        result();
    }, [ user, setLoading, navigate]);

    const value = {
        user:userlx,
        handleGoogleSignIn: handleGoogleSignIn,
        handleLogout:handleLogout,
        loading:loading
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}