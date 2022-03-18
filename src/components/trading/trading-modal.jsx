import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function TradingModal({
  coinName,
  CloseModal,
  TotalTradeInNGN,
  TotalTradeInUSD,
  TradeType,
}) {
  const { user } = useAuth();

  const navigate = useNavigate();

  const [continueB, setContinueB] = useState(false);
  const [continueC, setContinueC] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userPro, setUserPro] = useState([]);
  const [userAccAdd, setUserAccAdd] = useState([]);
  const [text, setText] = useState("");

  const userAccountAddressDatas = JSON.parse(
    sessionStorage.getItem("userAccountAndAddress")
  );
  const userDetailsDatas = JSON.parse(sessionStorage.getItem("userDetails"));

  const data = {
    email: user.email,
    coin: coinName,
    TotalAmountInNaira: TotalTradeInNGN,
    TotalAmountInUsd: TotalTradeInUSD,
    Date: new Date().getTime(),
    Year: new Date().getFullYear(),
    PaymentProof: "",
    TradeType: TradeType,
    userPro: userPro,
    userAccAdd: userAccAdd,
  };

  const userEmail = user.email.split(".")[0];

  const SubmitHandler = async () => {
    if (
      user &&
      userAccountAddressDatas.length > -1 &&
      userDetailsDatas.length > -1
    ) {
      await axios.post(
        `https://lsexchange-25610-default-rtdb.firebaseio.com/${userEmail}.json`,
        data
      );
      setLoading(true);
      navigate("/user/dashboard");
    } else {
      setText(
        <p className="text-red text-center">
            Kindly Update Your{" "}
            <Link to="/account/settings" className="text-blue font-2">
              Profile and Account Page
            </Link>{" "}
            Before Trading
          </p>
      );
      setTimeout(() => {
        navigate("/account/settings");
      }, 1500);
    }
  };

  const userAccAdds = userAccountAddressDatas[0];
  const userPros = userDetailsDatas[0];

  useEffect(() => {
      setUserAccAdd(userAccAdds);
      setUserPro(userPros);
  }, [userPros, userAccAdds, user]);

  return (
    <div className="backdrop">
      <div className="container trading-modal">
        <div className="col-7-sm">
          <div className="card bg-white text-black">
            {continueB ? (
              <div className="p-2">
                {TradeType === "Sell" ? (
                  <>
                    <p className="font-2 font-md mb-1">
                      Please transfer <b>${TotalTradeInUSD}</b> worth of{" "}
                      <b>{coinName}</b> to the Wallet Address below. Please
                      note, do not send below <b>${TotalTradeInUSD}</b> worth of{" "}
                      <b>{coinName}</b>. We only credit what you send
                    </p>
                    <p className="mb-1">
                      Wallet Address
                      <br />
                      <span className="p-1 font-3 text-gray font-lg pl-0">
                        Dudjusjsn293nAISJD
                      </span>
                    </p>
                    <p className="mb-1 font-3 text-green">Summary</p>
                    <div className="display-f justify-space-between">
                      <p>
                        Amount In USD: <br />
                        <b>${TotalTradeInUSD}</b>
                      </p>
                      <p>
                        Amount In NGN: <br />
                        <b>&#8358;{TotalTradeInNGN}</b>
                      </p>
                      <p>
                        AMOUNT <b>$1.00 = &#8358;585</b>
                      </p>
                    </div>

                    <p className="text-center mt-2 text-green">
                      {coinName} WALLET ADDRESS Dudjusjsn293nAISJD
                    </p>
                  </>
                ) : TradeType === "Buy" ? (
                  <>
                    <p className="font-2 font-md mb-1">
                      Please transfer <b>&#8358;{TotalTradeInNGN}</b> to the
                      Account Number below. Please note, do not send below{" "}
                      <b>&#8358;{TotalTradeInNGN}</b> worth of{" "}
                      <b>${TotalTradeInUSD}</b>. We only credit what you send
                    </p>
                    <div className="display-f justify-space-between">
                      <p className="mb-1">
                        Account Number
                        <br />
                        <span className="p-1 font-3 text-gray font-lg pl-0">
                          0000000001
                        </span>
                      </p>
                      <p className="mb-1">
                        Bank Name
                        <br />
                        <span className="p-1 font-3 text-gray pl-0">
                          Ramla(RML)
                        </span>
                      </p>
                    </div>
                    <p className="mb-1 font-3 text-green">Summary</p>
                    <div className="display-f justify-space-between">
                      <p>
                        Amount In NGN: <br />
                        <b>&#8358;{TotalTradeInNGN}</b>
                      </p>
                      <p>
                        Amount In USD: <br />
                        <b>${TotalTradeInUSD}</b>
                      </p>
                      <p>
                        AMOUNT <b>$1.00 = &#8358;600</b>
                      </p>
                    </div>

                    <p className="text-center mt-2 text-green">
                      You are Buying {coinName.toUpperCase()} worth of{" "}
                      {TotalTradeInNGN}, You Paid to this Account Number
                      0000000001
                    </p>
                  </>
                ) : null}

                <div className="display-f text-white mt-3">
                  <button
                    className="btn-green m-1 ml-0"
                    onClick={() => {
                      setContinueB(false);
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
                {TradeType === "Sell" ? (
                  <>
                    <p className="font-2 font-md mb-1">
                      If you have paid to our{" "}
                      <b className="text-yellow">
                        {coinName}
                        {" $"}
                        {TotalTradeInUSD}
                      </b>{" "}
                      Wallet Address, upload a screenshot of your successful
                      payment as proof.
                    </p>
                    <div className="file">
                      <input
                        type="file"
                        placeholder="Upload Your Payment Screenshot"
                      />
                    </div>
                    <p className="mt-1 mb-1 font-3 text-blue">
                      Do not proceed with this process if you have not made your
                      payment
                    </p>
                    <p className="text-red mt-1">
                      In case you sent a different amount, send us a message,
                      ls-eXchange will update accordingly.
                    </p>
                  </>
                ) : TradeType === "Buy" ? (
                  <>
                    <p className="font-2 font-md mb-1">
                      If you have paid to our{" "}
                      <b className="text-yellow">NGN {TotalTradeInNGN}</b>{" "}
                      Account Number, upload a screenshot of your successful
                      payment as proof.
                    </p>
                    <div className="file">
                      <input
                        type="file"
                        placeholder="Upload Your Payment Screenshot"
                      />
                    </div>
                    <p className="mt-1 mb-1 font-3 text-blue">
                      Do not proceed with this process if you have not made your
                      payment
                    </p>
                    <p className="text-red mt-1">
                      In case you sent a different amount, send us a message,
                      ls-eXchange will update accordingly.
                    </p>
                  </>
                ) : null}
                <p className="text-center text-red font-3">{text}</p>
                <div className="display-f text-white mt-3">
                  <button
                    className="btn-green m-1 ml-0"
                    onClick={SubmitHandler}
                  >
                    {loading ? "Loading..." : "Submit"}
                  </button>
                  <button className="btn-red m-1 mr-0" onClick={CloseModal}>
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="font-2 font-md mb-1">
                  READ BEFORE YOU PROCEED WITH{" "}
                  <b className="text-yellow">{coinName.toUpperCase()}</b>{" "}
                  TRANSACTION
                </p>
                <p className="mb-1">
                  Amount Receivable <b>&#8358;{TotalTradeInNGN}</b>
                </p>
                <p className="mb-1">
                  Do not send below the required amount of{" "}
                  <b>${TotalTradeInUSD}</b>
                </p>
                <p>
                  <Link to="/">
                    By proceeding to {TradeType.toLowerCase()} on our website,
                    you agree our terms and condition
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
