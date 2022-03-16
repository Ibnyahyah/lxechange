import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer/footer";
import NavBar from "../components/nav-bar/nav";
import Transaction from "../components/transactions/transaction";

import { useAuth } from '../context/authContext'

function Dashboard(){
    const { user } = useAuth();
    const userDetails = user.email.split(".")[0];
    const userEmail = userDetails.split("@")[0];

    
    const location = useLocation()
    const pathname = location.pathname.split("/")[0];

    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname])

    return(
        <>
            <NavBar/>
            <div className="container-fluid pt-5 pb-5 mt-3 text-white">
                <div className="container">
                    <div className="display-f">
                    <div className="header">
                            <h1 className="font-4 font-xl">Hello, {user.displayName?user.displayName:!user.displayName?userEmail:null}</h1>
                            <p>Welcome to your dasboard</p>
                            <p className="mt-2 mb-1 font-3">Got questions? Call or Whatsapp 08129418741</p>
                        </div>
                    </div>
                    <div className="row gap-2 mt-3">
                        <div className="col-6-sm col-8-md">
                            <div className="card bg-white text-black">
                                <h1 className="mb-1 font-3 font-lg text-gray">Recent Transaction</h1>
                                <Transaction/>
                            </div>    
                        </div>
                            <div className="col-6-sm col-4-md text-black">
                                <div className="card bg-white">
                                    <div className="display-f justify-space-between">
                                        <p className="font-1 font-lg">COMPLETE YOUR <br/>VERIFICATION</p>
                                        {user.photoURL?
                                            <img src={user.photoURL} style={{width:'60px', height:'60px', border:'1px solid blue', borderRadius:'50%'}} alt={`${user.displayName} on lxExchange`} />
                                            :!user.photoURL?
                                            <img src="../logo192.png" style={{width:'60px', height:'60px', border:'1px solid blue', borderRadius:'50%'}} alt={`${user.displayName} on lxExchange`} />
                                        :null}
                                    </div>
                                    <hr className="mt-1 mb-1"/>
                                    <div className="doc">
                                        <h3 style={{textAlign:'right'}}>{user.email?<p className="text-green font-md">E-MAIL COMFIRM</p> :<p className="text-red font-md">E-MAIL NOT CONFIRM</p>}</h3>
                                        <p className="mb-1 font-md text-gray"><span className="text-black">YOUR EMAIL:</span> {user.email} Basic account security</p>    
                                        <h3>CONFIRM YOUR IDENTITY</h3>
                                        <p>Upload your document and get verify</p>    
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
            </div>
            <Footer/>
        </>
    )
}
export default Dashboard;