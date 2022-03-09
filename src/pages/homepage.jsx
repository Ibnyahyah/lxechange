import Footer from "../components/footer/footer";
import NavBar from "../components/nav-bar/nav"
import Rates from "../components/Rate/rate";

function TopCarosel(){
    return(
        <div style={{minHeight:'55vh'}}>
            <div className="text-center text-white">
                <div className="display-f justify-center align-center" style={{height:'500px'}}>
                    <div>
                        <h1 className="font-xxl">Welcome to lxExchange</h1>
                        <h1 className="font-lg font-3 text-white">Buy and Sell Crypto At Sweet Rate</h1>
                        <p className="mb-3">Buy Bitcoin, Ethereum, Tron, Doge, Usdt from Us.</p>
                        <marquee behavior="alternate" direction="left">Contact Us? If You Have A Question 08129418741</marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

function WhyUs(){
    return(
        <>
            <div className="container pt-3 pb-3 text-white">
                <div>
                    <h1 className="font-3 font-xl mb-2">Why lxExchange Is Your Most Trusted Cryptocurrency Merchant.</h1>
                    <p className="font-lg">We will never be a part of a scam because 
                    We have our integrity to protect, lxExchange can be trust and always fund instantly"
                     - Dealer in Almost all e-currencies And Gift cards. Perfectmoney.
                     Bitcoin. Ethereum. Tron E.t.c</p>
                    <ul className="font-lg" style={{listStyle:'decimal'}}>
                        <li className="mb-1 mt-1">Duly registered with CAC with head office at 11 unity Road Ikeja Lagos</li>
                        <li className="mb-1">Trade with peace of mind. (no scam zone)</li>
                        <li className="mb-1">24/7 support Either on Website or Whatsapp.
                             We have a well trained customer service who are ready to make you smile everytime you deal with us.
                              -Grand Masters Of Instant Funding.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const HomePage = ()=>{
    return(
        <>
            <NavBar/>
            <TopCarosel/>
            <Rates/>
            <WhyUs/>
            <Footer/>
        </>
    )
}
export default HomePage;