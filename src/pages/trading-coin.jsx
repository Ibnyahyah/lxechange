import Footer from "../components/footer/footer";
import NavBar from "../components/nav-bar/nav"
import Trading from "../components/trading/trading";
import TradingModal from "../components/trading/trading-modal";

const TradingCoin = ()=> {

    return(
        <>
            <NavBar/>
            <Trading TradingModal={TradingModal} />
            <Footer/>
        </>
    )
}
export default TradingCoin; 