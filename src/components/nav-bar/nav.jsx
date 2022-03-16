import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from '../../context/authContext'

export default function NavBar({Home}){
    const { user, handleLogout } = useAuth();
    const [menus, setMenus] = useState(true);
    const [screenSize, setscreenSize] = useState(true);

    useEffect(()=>{
        const handleResize = ()=> setscreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize',handleResize);

    },[]);

    useEffect(()=>{
        if(screenSize <= 800){
            setMenus(false);
        }else{
            setMenus(true)
        }
    },[screenSize]);
    return(
        <div className="navbar navbar-black">
            <nav className="container text-white">
                <header className="site-title">SlExchange</header>
                <div className="menuList">
                    <div className="menu-toggle">
                        <button className="btn-outlined-red p-1 font-sm text-red" onClick={()=>setMenus(!menus)}>MENU</button>
                    </div>
                    {menus && (
                        <ul className={`display-f align-center font-3 ${menus?"menus":"menus notActive"}`}>
                            {Home?null:<li><Link to="/" className="m-1 text-white">Home</Link></li>}
                            <li><Link to="/rate" className="m-1 text-white">Rate</Link></li>
                            {!user?<li><Link to="/register" className="m-1 text-white">Register</Link></li>:null}
                            {user?<li><Link to="/account/settings" className="m-1 text-white">Account</Link></li>:null}
                            <li><Link to={user?`/trade`:`/login`}><button  className="btn p-1 pr-2 pl-2 btn-blue text-white mr-1">Trade</button></Link></li>
                            {user?<li><button className="btn p-1 pr-2 pl-2 btn-red text-white" onClick={handleLogout}>Logout</button></li>:null}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    )
}