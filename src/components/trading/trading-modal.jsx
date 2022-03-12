import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function TradingModal({ coinName, CloseModal,TotalTradeInNGN, TotalTradeInUSD, TradeType }) {
  const {user} = useAuth();

  const navigate = useNavigate();

  const [continueB, setContinueB] = useState(false);
  const [continueC, setContinueC] = useState(false);
  const [loading, setLoading] = useState(false);




  const data = {
      email:user.email,
      coin:coinName,
      TotalAmountInNaira:TotalTradeInNGN,
      TotalAmountInUsd:TotalTradeInUSD,
      Date:new Date().getTime(),
      Year:new Date().getFullYear(),
      PaymentProof:"",
      TradeType:TradeType,
  }

  const userEmail = user.email.split('.')[0];


  const SubmitHandler = async()=>{
    if(user){
        await axios.post(`https://lsexchange-25610-default-rtdb.firebaseio.com/${userEmail}.json`,data);

        setLoading(true);
        navigate("/user/dashboard");

    }
  }


  return (
    <div className="backdrop">
      <div className="container trading-modal">
        <div className="col-7-sm">
          <div className="card bg-white text-black">
            {continueB ? (
              <div className="p-2">
                <p className="font-2 font-md mb-1">
                  Please transfer <b>${TotalTradeInUSD}</b> worth of{" "}
                  <b>{coinName}</b> to the Wallet
                  Address below. Please note, do not send below{" "}
                  <b>${TotalTradeInUSD}</b> worth of{" "}
                  <b>{coinName}</b>. We only credit what
                  you send
                </p>
                <p className="mb-1">
                    Wallet Address
                    <br/>
                    <span className="p-1 font-3 text-gray font-lg pl-0">Dudjusjsn293nAISJD</span>
                </p>
                <p className="mb-1 font-3 text-green">Summary</p>
                <div className="display-f justify-space-between">
                    <p>Amount In USD: <br/><b>${TotalTradeInUSD}</b></p>
                    <p>Amount In NGN: <br/><b>&#8358;{TotalTradeInNGN}</b></p>
                    <p>AMOUNT <b>$1.00 = &#8358;600</b></p>
                </div>

                <p className="text-center mt-2 text-green">{coinName} WALLET ADDRESS Dudjusjsn293nAISJD</p>

                <div className="display-f text-white mt-3">
                  <button
                    className="btn-green m-1 ml-0"
                    onClick={() => {
                      setContinueB(false)
                      setContinueC(true);
                    }}
                  >
                    Continue
                  </button>
                  <button className="btn-red m-1 mr-0" onClick={CloseModal}>
                    Close
                  </button>
                </div>
              </div>
            ) : continueB === false && continueC ? (
              <div className="p-1">
                <p className="font-2 font-md mb-1">
                    If you have paid to our <b className="text-yellow">{coinName}</b> Wallet Address, upload a screenshot of your successful payment as proof.
                </p>
                    <div className="file">
                        <input type="file" placeholder="Upload Your Payment Screenshot" />
                    </div>
                <p className="mt-1 mb-1 font-3 text-blue">Do not proceed with this process if you have not made your payment</p>
                <p className="text-red mt-1">In case you sent a different amount, send us a message, ls-eXchange will update accordingly.</p>

                <div className="display-f text-white mt-3">
                  <button className="btn-green m-1 ml-0" onClick={SubmitHandler}>{loading?'Loading...':'Submit'}</button>
                  <button className="btn-red m-1 mr-0" onClick={CloseModal}>
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="font-2 font-md mb-1">
                  READ BEFORE YOU PROCEED WITH{" "}
                  <b className="text-yellow">{coinName}</b> SALE
                </p>
                <p className="mb-1">
                  Amount Receivable <b>&#8358;{TotalTradeInNGN}</b>
                </p>
                <p className="mb-1">
                  Do not send below the required amount of <b>${TotalTradeInUSD}</b>
                </p>
                <p>
                  <Link to="/">
                    By proceeding to sell on our website, you agree our terms
                    and condition
                  </Link>
                </p>

                <div className="display-f text-white mt-3">
                  <button
                    className="btn-green m-1 ml-0"
                    onClick={() => {
                      setContinueB(true);
                    }}
                  >
                    Continue
                  </button>
                  <button className="btn-red m-1 mr-0" onClick={CloseModal}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TradingModal;
