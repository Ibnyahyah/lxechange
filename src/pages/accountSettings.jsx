import Footer from "../components/footer/footer"
import NavBar from "../components/nav-bar/nav"
import AccountDetails from "../components/account_details/accountDetails";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AccountSettings = ()=>{

    const location = useLocation();
    const pathname = location.pathname.split("/")[0]

    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname])
    return(
        <>
            <NavBar/>
            <AccountDetails/>
            <Footer/>
        </>
    )
}
export default AccountSettings;