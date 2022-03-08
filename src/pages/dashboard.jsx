import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/nav-bar/nav";
import Transaction from "../components/transactions/transaction";
import { auth } from '../firebase';

import { useAuth } from '../context/authContext'

function Dashboard(){

    const navigate = useNavigate();
    const { user } = useAuth();
    console.log(user)
    const handleLogout = async () =>{
        await auth.signOut();

        navigate("/");
    }
    return(
        <>
            <NavBar handleLogout={handleLogout}/>
            <div className="container-fluid pt-5 pb-3">
                <div className="container">
                   <div className="display-f">
                    <div className="header">
                            <h1 className="font-4 font-xl">Hello, {user.displayName ||"Kolade"}</h1>
                            <p>Welcome to your dasboard</p>
                            <p className="mt-2 mb-1 font-3">Got questions? Call or Whatsapp 08129418741</p>
                        </div>
                        <Link to="/trade" className="text-blue">Trade now</Link>
                    </div>
                    <div className="row gap-2 mt-3">
                        <div className="col-6-sm col-8-md">
                            <div className="card" style={{width:'100%'}}>
                                <Transaction/>
                            </div>    
                        </div>
                            <div className="col-6-sm col-4-md">
                                <div className="card">
                                    <p className="font-1 font-lg">Complete Your <br/>Verification</p>
                                    <div className="doc mt-2">
                                        <h3>Comfirm Your e-mail</h3>
                                        <p className="mb-1">Add basic account security</p>    
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
export default Dashboard;