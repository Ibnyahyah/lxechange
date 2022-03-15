import { useEffect, useState } from "react";
import NavBar from "../components/nav-bar/nav";
import Rates from "../components/Rate/rate";
import Footer from "../components/footer/footer";

import { Link, useLocation } from "react-router-dom";

// import axios from 'axios'; 
// import { useAuth } from "../context/authContext";

function Rate(){

    // const { user } = useAuth()

    const [exchangeCoin, setExchangeCoin] = useState('');
    const [amountRef, setAmountRef] = useState(0);
    const Rate = 585;
    const [transcationvalue, setTransactionvalue] = useState(0);
    const [transcationType, setTransactionType] = useState('');

    const location = useLocation();
    const pathname = location.pathname.split("/")[0];
    // const data = {
    //     coin: exchangeCoin,
    //     transcationType: transcationType,
    //     Total: transcationvalue,
    //     amountUsdt:  amountRef,
    //     username:user.displayName,
    //     email: user.email
    // }
    // console.log(data);

    useEffect(()=>{
        const totalvalue = Rate * amountRef;
        setTransactionvalue(totalvalue);
    },[amountRef]);


    const handlerSubmit = async (e) =>{
        e.preventDefault()
        // if(user){
        //     await axios.post("https://lsexchange-25610-default-rtdb.firebaseio.com/data.json", data);
        //     setText("Successful")
        //     setLoading(true)

        // }else{
        //     setText("Please Login");

        //     navigate("/login")
        // }
    }
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname])
    
    return(
        <>
            <NavBar/>
            <section className="rate-container pt-5 pb-5 mt-3">
                <div className="container mt-2">

                    <div className="text-center mb-2 text-white">
                        <p>Best Rate You can Get</p>
                        <div className="font-4 font-xxl">Rate</div>
                    </div>
                    <div className="row gap-1">
                        <div className="col-6-sm col-8-md">
                            <div className="card bg-white">
                                <div className="header">
                                    <p className="font-3">Cryptocurrency Rate Caluculator</p>
                                    <p>Know the current value of your Transaction</p>
                                </div>
                                <button className="btn mt-1 mb-1">
                                    <div className="m-1">
                                        <h1 className="font-4 font-xl">Total Payout</h1>
                                        <p className="font-xl text-green">NGN {transcationvalue? transcationvalue :'00.00'}</p>
                                        <p className={transcationType === 'sell'?"text-red":"text-green"}>Transaction Type: {transcationType.toUpperCase()}</p>
                                        <p className="text-gray">Rate : #{Rate}</p>
                                    </div>
                                </button>
                                <form onSubmit={handlerSubmit}>
                                    <label htmlFor="transactionType">Select Transaction Type
                                        <select name="" id="transactionType" onChange={(e)=> setTransactionType(e.target.value)}>
                                            <option value="null">Selcet Transaction Type</option>
                                            <option value="buy">Buy</option>
                                            <option value="sell">Sell</option>
                                        </select>
                                    </label>    
                                    <label htmlFor="coins">Select Your Currency
                                        <select name="" id="coins" onChange={(e)=> setExchangeCoin(e.target.value)}>
                                            <option value="null" >Select Your Coin</option>
                                            <option value="Bnb" >Binance Coin</option>
                                            <option value="Btc">Bitcoin</option>
                                            <option value="Eth">Ethereum</option>
                                            <option value="Trx">Tron</option>
                                            <option value="Doge">DogeCoin</option>
                                            <option value="Pm">Perfect Money</option>
                                            <option value="Usdt">Usdt</option>
                                        </select>
                                    </label>
                                    <label htmlFor="amount">Amount
                                        <input type="number" name="" id="amount" onChange={(e)=>setAmountRef(e.target.value)} placeholder="Enter Your Amount in USDT" />
                                    </label>
                                    <Link to={`/trade/coin/${exchangeCoin}`}><button className="btn font-3">Trade Now</button></Link>
                                </form>
                            </div>
                        </div>
                        <div className="col-6-sm col-4-md mt-3">
                            
                        </div>
                    </div>
                    <Rates Rate/>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Rate;