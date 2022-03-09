import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/nav-bar/nav";
import Transaction from "../components/transactions/transaction";
import { auth } from '../firebase';

import { useAuth } from '../context/authContext'
import { useEffect } from "react";

function Dashboard(){
    const navigate = useNavigate();
    const { user } = useAuth();
    console.log(user)
    const handleLogout = async () =>{
        await auth.signOut();

        navigate('/')

        window.location.reload("/");

    }

    if(user === null && !user){
        
        navigate('/');

        return navigate("/");
    }else{
        return(
            <>
                <NavBar handleLogout={handleLogout}/>
                <div className="container-fluid pt-5 pb-3 text-white">
                    <div className="container">
                       <div className="display-f">
                        <div className="header">
                                <h1 className="font-4 font-xl">Hello, {user?user.displayName:user === null?"no user":null}</h1>
                                <p>Welcome to your dasboard</p>
                                <p className="mt-2 mb-1 font-3">Got questions? Call or Whatsapp 08129418741</p>
                            </div>
                            <Link to="/trade" className="text-blue">Trade now</Link>
                        </div>
                        <div className="row gap-2 mt-3">
                            <div className="col-6-sm col-8-md">
                                <div className="card bg-white text-black" style={{width:'100%'}}>
                                    <Transaction/>
                                </div>    
                            </div>
                                <div className="col-6-sm col-4-md text-black">
                                    <div className="card bg-white">
                                        <div className="display-f justify-space-between">
                                            <p className="font-1 font-lg">Complete Your <br/>Verification</p>
                                            <img src={user?user.photoURL:!user.photoURL?"./images/logo.png":user === null?"no user":null} style={{width:'60px', height:'60px', border:'1px solid blue', borderRadius:'50%'}} alt={`${user.displayName} on lxExchange`} />
                                        </div>
                                        <hr className="mt-1 mb-1"/>
                                        <div className="doc">
                                            <h3 style={{textAlign:'right'}}>{user.email?<p className="text-green font-md">E-mail Comfirmed</p> :<p className="text-red font-md">E-mail not comfirmed</p>}</h3>
                                            <p className="mb-1 font-md text-gray"><span className="text-black">Your email:</span> {user.email} Basic account security</p>    
                                            <h3>Comfirm Your e-mail</h3>
                                            <p>Upload your Document and get verify</p>    
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                </div>
            </>
        )
    }
}
export default Dashboard;