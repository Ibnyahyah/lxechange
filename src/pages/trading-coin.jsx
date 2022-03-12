import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer/footer";
import NavBar from "../components/nav-bar/nav"
import Trading from "../components/trading/trading";
import TradingModal from "../components/trading/trading-modal";

const TradingCoin = ()=> {
    
    const location = useLocation()
    const pathname = location.pathname.split("/")[0];

    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname])
    return(
        <>
            <NavBar/>
            <Trading TradingModal={TradingModal} />
            <Footer/>
        </>
    )
}
export default TradingCoin; 