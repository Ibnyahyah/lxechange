import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../firebase";


initializeAuthentication();
function Login(){
const { handleGoogleSignIn } = useAuth();

const [email, setEmail] = useState('')
const [password, setPassword] = useState('');
const [user, setUser] = useState(null);
const [text, setText] = useState('');
const [message, setMessage] = useState('');

const navigate = useNavigate();


const submitHandler = (e)=>{
    e.preventDefault();
    initializeAuthentication()
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        // Signed in 
        setUser(userCredential.user);
        localStorage.setItem("lsUser",JSON.stringify(user));
        setText("Successfull")
    })
    .catch((error) => {
        setText(error.code);
        setMessage(error.message);
        // ..
    });
}

useEffect(()=>{
    if(user)navigate('/user/dashboard');
},[user,navigate]);

    return(
        <>
            <div className="container-fluid auth display-f align-center">
                <div className="container">
                    <div className="row">
                        <div className="col-6-sm">
                            <div className="form-container">
                                <div className="display-f text-white mr-2">
                                    {/* <img src="./images/logo.png" width="100" height="100" alt="exchanges" /> */}
                                    <p className="font-4 font-xl mt-3">ls Exchanges</p>
                                </div>
                                <div className="header text-white mb-2">
                                    <p className="font-4 font-lg mb-1">Login</p>
                                    <p>Login into your account</p>
                                </div>
                                <form onSubmit={submitHandler}>
                                    {text?<p className="text-white text-center m-1 font-3 p-1 pl-3 pr-3 bg-red">{text}</p>:
                                    message?<p className="text-white text-center m-1 font-3 p-1 pl-3 pr-3 bg-red">{message}</p>:null}
                                    <label htmlFor="email" className="font-3 text-white">Email
                                        <input className="text-black" type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Enter Your Valid E-mail" />    
                                    </label>
                                    <label htmlFor="password" className="font-3 text-white">Password
                                        <input className="text-black" type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} id="password" placeholder="Enter Your Valid Password"/>
                                    </label>
                                    <button className="btn">Login</button>
                                </form>
                                <div className="text-center">
                                <Link to="/register"><button className="btn-outlined-blue">Create an account</button></Link>
                                    <p  className="text-white">Forgetten Password? <Link to="/"  className="text-white mt-1 mb-1">Click here</Link></p>
                                </div>
                                <div className="button">
                                    <button className="btn-outlined-red" 
                                    onClick={handleGoogleSignIn}>Login With Google</button>
                                    {/* <button className="btn-outlined-blue"
                                    onClick={()=> auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>Login With Facebook</button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-6-sm auth-logo">
                            <div className="display-f justify-center align-center text-center mt-5" style={{minHeight:'100%'}}>
                                <p className="font-4 font-xxl text-white">lsExchanges</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    )
}
export default Login;