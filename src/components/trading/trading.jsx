import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Trading({TradingModal}) {
    const [modal, setModal] = useState(false);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState();
    const [tradeType, setTradeType] = useState('Sell');

    const location = useLocation();
    const pathname = location.pathname.split("/")[3];
    console.log(pathname);

    function CloseModal(){
        setModal(false)
    }
    function SubmitHandler(){
        setModal(false)
    }

    useEffect(()=>{
        const TotalTrade = amount * 600;
        setTotal(TotalTrade)
    },[amount])
  
  return (
    <div className="container pt-5 pb-5 text-white">
        <p className="mt-3 mb-1 font-4">{pathname}</p>
      <p className="font-2 mb-2">
        Got questions? Call or Whatsapp 08129418741
      </p>
      <p>
        Please note: lsexchange.com is NOT a football/lottery/Flight
        ticketing agent or an investment scheme. If anyone directed you to our
        website please be aware, we are digital currency exchanger, and we are
        not affiliated or in partnership with any entity. If you are on this
        page, please be informed that digital currency funding is an
        irreversible process. In case you find yourself on this page, and you
        don't understand what we do or you were being directed here by an
        unknown entity, please call , +2348129418741 for more clarification
        also note that we don't fund third party account.
      </p>
        <div className="row gap-1 trading-coin mt-3">
            <div className="col-6-sm col-6-md">
                <div className="card bg-white">
                        <div className="display-f head-button mb-2">
                            <button onClick={()=>setTradeType('Sell')}>Sell</button>
                            <button onClick={()=>setTradeType('Buy')}>Buy</button>
                        </div>
                    <form onSubmit={(e)=>e.preventDefault()}>
                            <label htmlFor="amount" className="text-black">Amount</label>
                        <div className="display-f justify-space-between">
                            <input type="number" name="" id="amount" onChange={(e)=> setAmount(e.target.value)} />
                            <p className="text-black p-input">&#8358;{total}</p> 
                        </div>
                        <p className="text-center mt-2 mb-1 text-green">Exchange Rate &#8358;600</p>
                        <button className="btn-green" onClick={()=>setModal(true)}>Sell Now</button>
                    </form>
                </div>    
            </div>  
            <div className="col-6-sm col-6-md text-black">
                <div className="card bg-white review">
                    <p className="p-1">The sell order will be approved after your transaction has been confirmed and approved on our server..</p>
                    <p className="text-red text-center">You will be send {pathname} that worth 0$</p>
                    <button className="display-f justify-space-between">
                        <p>YOU ARE SELLING</p>    
                        <p>${amount}</p>    
                    </button>
                    <button className="display-f justify-space-between">
                        <p>YOU WILL GET</p>    
                        <p>&#8358;{total}</p>    
                    </button>
                    <button className="display-f justify-space-between">
                        <p>RATE</p>    
                        <p>@&#8358;600/$</p>    
                    </button>
                </div>    
            </div>  
        </div>
        {modal?<TradingModal coinName={pathname} CloseModal={CloseModal} SubmitHandler={SubmitHandler} TotalTradeInNGN={total} TotalTradeInUSD={amount} TradeType={tradeType}/>:null}
    </div>
  );
}
export default Trading;
