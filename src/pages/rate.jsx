import { useEffect, useState } from "react";
import NavBar from "../components/nav-bar/nav";
import Rates from "../components/Rate/rate";

import { useNavigate } from "react-router-dom";

import axios from 'axios'; 
import { useAuth } from "../context/authContext";

function Rate(){

    const { user } = useAuth()

    const [exchangeCoin, setExchangeCoin] = useState('');
    const [amountRef, setAmountRef] = useState(0);
    const Rate = 585;
    const [transcationvalue, setTransactionvalue] = useState(0);
    const [transcationType, setTransactionType] = useState('');
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');

    const navigate = useNavigate();
    
    console.log(exchangeCoin, transcationType, transcationvalue, amountRef);
    const data = {
        coin: exchangeCoin,
        transcationType: transcationType,
        Total: transcationvalue,
        amountUsdt:  amountRef,
    }
    JSON.stringify(data)
    useEffect(()=>{
        const totalvalue = Rate * amountRef;
        setTransactionvalue(totalvalue);
    },[amountRef]);


    const handlerSubmit = async (e) =>{
        e.preventDefault()
        if(user){
            await axios.post("https://lsexchange-25610-default-rtdb.firebaseio.com/data.json", data);
            setText("Successful")
            setLoading(true)

        }else{
            setText("Please Login");

            navigate("/login")
        }
    }
    
    return(
        <>
            <NavBar/>
            <section className="rate-container display-f align-center pt-5 pb-3">
            <div className="container">
                <div className="text-center mb-2 text-white">
                    <p>Best Rate You can Get</p>
                    <div className="font-4 font-xxl">Rate</div>
                </div>
                <div className="row gap-1">
                    <div className="col-6-sm col-8-md">
                        <div className="card bg-white">
                            <div className="header">
                                <h1 className="font-3">Cryptocurrency Rate Caluculator</h1>
                                <p>Know the current value of your Transaction</p>
                            </div>
                            <button className="btn font-3 font-lg mt-1 mb-1">Cryptocurrency</button>
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
                                {loading?<button className="btn font-3" disable="true">loading...</button>:<button className="btn font-3">Trade Now</button>}
                            </form>
                        </div>
                    </div>
                    <div className="col-6-sm col-4-md mt-3">
                        <div className="m-1">
                            <h1 className="font-4 font-xl">Total Payout</h1>
                            <p className="font-xl text-green">NGN {transcationvalue? transcationvalue :'00.00'}</p>
                            <p className="text-gray">Rate : #{Rate}</p>
                            <p className="text-green">{text}</p>
                        </div>
                    </div>
                </div>
                <Rates Rate/>
            </div>
            </section>
        </>
    )
}
export default Rate;