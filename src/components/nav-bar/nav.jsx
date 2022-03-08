import { Link } from "react-router-dom";

import { useAuth } from '../../context/authContext'

export default function NavBar({handleLogout}){
    const {user} = useAuth();
    return(
        <div className="navbar navbar-white">
            <nav className="container bg-white text-black">
                <header className="site-title">SlExchange</header>
                <ul className="display-f align-center font-2">
                    <li><Link to="/" className="m-1">Home</Link></li>
                    <li><Link to="/rate" className="m-1">Rate</Link></li>
                    <li><Link to="/" className="m-1">Faqs</Link></li>
                    {!user?<li><Link to="/register" className="m-1">Register</Link></li>:null}
                    <li><Link to={user?`/trade`:`/login`} className="btn p-1 pr-2 pl-2 btn-blue text-white mr-1">Trade Now</Link></li>
                    {user?<li><button className="btn p-1 pr-2 pl-2 btn-red text-white" onClick={handleLogout}>Logout</button></li>:null}
                </ul>
            </nav>
        </div>
    )
}