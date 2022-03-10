import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Register(){
    const { handleGoogleSignIn } = useAuth()
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
                                <form>
                                    <label htmlFor="email" className="font-3 text-white">E-mail
                                        <input type="email" name="email" id="email" placeholder="Enter Your Valid E-mail" />
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