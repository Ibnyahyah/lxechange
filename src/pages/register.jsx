import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../firebase";


initializeAuthentication();
function Register(){
    const { handleGoogleSignIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [user, setUser] = useState(null);
    const [text, setText] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate()
    
    const submitHandler = (e)=>{
        e.preventDefault();
        const auth = getAuth();
        if(password === confirmPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            
            setUser(userCredential.user);
            localStorage.setItem("lsUser",JSON.stringify(user));
            setText("Successfull")
            if(user)navigate('/user/dashboard');

            })
            .catch((error) => {
                setText(error.code);
                setMessage(error.message);
                // ..
            });
        }else{
            setMessage("password not correct")
        }
    }

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
                                    <p className="font-4 font-lg mb-1">Resgister</p>
                                    <p>Register your account</p>
                                </div>
                                <form onSubmit={submitHandler}>
                                    {text?<p className="text-white text-center m-1 font-3 p-1 pl-3 pr-3 bg-red">{text}</p>:
                                    message?<p className="text-white text-center m-1 font-3 p-1 pl-3 pr-3 bg-red">{message}</p>:null}
                                    <label htmlFor="email" className="font-3 text-white">E-mail
                                        <input className="text-black" type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Your Valid E-mail" />
                                    </label>
                                    <label htmlFor="password" className="font-3 text-white">Password
                                        <input type="password" className="text-black" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Your Valid Password"/>
                                    </label>
                                    <label htmlFor="confirmPassword" className="font-3 text-white">Comfirm Password
                                        <input type="password" className="text-black" name="confirmPassword" id="confirmPassword" onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder="Comfirm Your Valid Password"/>
                                    </label>
                                    <button>Register</button>
                                </form>
                                <div className="text-center">
                                <Link to="/login"><button className="btn">Login to your account</button></Link>
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
export default Register;