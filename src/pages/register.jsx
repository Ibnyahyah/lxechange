import { Link } from "react-router-dom";
import "firebase/app";
import firebase from "firebase";
import {auth} from "../firebase";

function Register(){
    return(
        <>
             <div className="container-fluid auth display-f align-center">
                <div className="container">
                    <div className="row">
                        <div className="col-6-sm">
                            <div className="form-container">
                                <div className="display-f text-white mr-2">
                                    <img src="./images/logo.png" width="100" height="100" alt="exchanges" />
                                    <p className="font-4 font-xl mt-3">Exchanges</p>
                                </div>
                                <div className="header text-white mb-2">
                                    <p className="font-4 font-lg mb-1">Login</p>
                                    <p>Login into your account</p>
                                </div>
                                <form>
                                    <label htmlFor="fullName" className="font-3 text-white">Full Name
                                    <input type="text" name="firstName" id="fullName" placeholder="Enter Your Full Name"/>
                                    </label>
                                    <label htmlFor="username" className="font-3 text-white">Username
                                    <input type="text" name="username" id="username" placeholder="Enter Your Username"/>
                                    </label>
                                    <label htmlFor="email" className="font-3 text-white">E-mail
                                    <input type="email" name="email" id="email" placeholder="Enter Your Valid E-mail" />
                                    </label>
                                    <label htmlFor="phone" className="font-3 text-white">Phone
                                    <input type="phone" name="phone" id="phone" placeholder="Enter Your Valid Phone number" />
                                    </label>
                                    <label htmlFor="password" className="font-3 text-white">Password
                                    <input type="password" name="password" id="password" placeholder="Enter Your Valid Password"/>
                                    </label>
                                    <label htmlFor="confirmPassword" className="font-3 text-white">Comfirm Password
                                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Comfirm Your Valid Password"/>
                                    </label>
                                    <button>Register</button>
                                </form>
                                <div className="text-center">
                                <Link to="/login"><button className="btn">Login to your account</button></Link>
                                </div>
                                <div className="button">
                                    <button className="btn-oulined-red" 
                                    onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>Login With Google</button>
                                    <button className="btn-outlined-blue" 
                                    onClick={()=> auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>Login With Facebook</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6-sm">
                            <div className="display-f justify-center text-center mt-5">
                                <img src="./images/logo.png" style={{width:'70%', margin:'auto'}} alt="exchanges" />
                                {/* <p className="font-4 font-xl">Exchanges</p> */}
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    )
}
export default Register;