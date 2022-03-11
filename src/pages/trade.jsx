import { Link } from "react-router-dom";
import Footer from "../components/footer/footer";
import NavBar from "../components/nav-bar/nav";
import { RateData } from "../components/Rate/dummy";
import SearchFilter from "../components/search/search";
import Transaction from "../components/transactions/transaction";

function Trade(){


    

    return(
        <>
            <NavBar/>
            <div className="container pt-5 pb-5 text-white">
                <div className="display-f justify-space-between trade-container">
                    <div className="header">
                        <h1 className="font-4 font-xl">Trade Your Crypto(coins)</h1>
                        <p className="mt-2 mb-1 font-3">Got questions? Call or Whatsapp 08129418741</p>
                    </div>
                        <SearchFilter/>
                </div>
                <div className="row gap-1 mt-3 text-black">
                {RateData.map((data, index)=>{
                    return(
                        <div className="col-6-sm col-3-md" key={index}>
                            <Link to={`/trade/coin/${data.symbol}`}>
                                <div className="card bg-gray-light-9 display-f text-center">
                                    <img className="br-full" src={data.image} style={{width:'50px', height:'50px'}} alt=""/>
                                    <h2 className="font-md">{data.coin}</h2>
                                    <p>Naira (NGN)</p>
                                    <hr className="mt-1 mb-1"/>
                                    <p>Buy:{data.buy} | Sell: {data.sell}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
                <Transaction/>
            </div>
            <Footer/>
        </>
    )
}
export default Trade;