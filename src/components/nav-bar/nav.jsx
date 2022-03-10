import { Link } from "react-router-dom";

import { useAuth } from '../../context/authContext'

export default function NavBar(){
    const { user, handleLogout } = useAuth();
    return(
        <div className="navbar navbar-black">
            <nav className="container text-white">
                <header className="site-title">SlExchange</header>
                <ul className="display-f align-center font-3">
                    <li><Link to="/" className="m-1 text-white">Home</Link></li>
                    <li><Link to="/rate" className="m-1 text-white">Rate</Link></li>
                    <li><Link to="/" className="m-1 text-white">Faqs</Link></li>
                    {!user?<li><Link to="/register" className="m-1 text-white">Register</Link></li>:null}
                    <li><Link to={user?`/trade`:`/login`}><button  className="btn p-1 pr-2 pl-2 btn-blue text-white mr-1">Trade</button></Link></li>
                    {user?<li><button className="btn p-1 pr-2 pl-2 btn-red text-white" onClick={handleLogout}>Logout</button></li>:null}
                </ul>
            </nav>
        </div>
    )
}