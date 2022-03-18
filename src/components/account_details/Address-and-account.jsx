import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/authContext";

function AccountAddress() {
  const { user } = useAuth();

  const [text, setText] = useState("");
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [btcAddress, setBtcAddress] = useState("");
  const [ethAddress, setEthAddress] = useState("");
  const [bnbAddress, setBnbAddress] = useState("");
  const [trxAddress, setTrxAddress] = useState("");
  const [busdAddress, setBusdAddress] = useState("");
  const [PmAddress, setPmAddress] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [userAccountAddressDatas, setUserAccountAddressDatas] = useState([]);

  const userEmail = user.email.split(".")[0];

  const data = {
    btcAddress: btcAddress,
    ethAddress: ethAddress,
    bnbAddress: bnbAddress,
    trxAddress: trxAddress,
    busdAddress: busdAddress,
    PmAddress: PmAddress,
    bankName: bankName,
    accountNumber: accountNumber,
    accountName: accountName,
  };
  const hanldeAccountUpdate = async (e) => {
    e.preventDefault();
    await axios.post(
      `https://lsexchange-25610-default-rtdb.firebaseio.com/${userEmail}-account-address.json`,
      data
    );
    setText("Account and Address Updated");
    window.location.reload();
  };
  //   Fecthing user account and address details
  useEffect(() => {
      fetch(
        `https://lsexchange-25610-default-rtdb.firebaseio.com/${user.email.split('.')[0]}-account-address.json`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const docs = [];
          for (const key in data) {
            const doc = {
              id: key,
              ...data[key],
            };
            docs.push(doc);
            let docData = docs;
            sessionStorage.setItem('userAccountAndAddress',JSON.stringify(docData))
            setUserAccountAddressDatas(docData);
            setLoading(false)
          }
        });
  }, [user]);

  return (
    <>
      {!edit && (
        <>
          {userAccountAddressDatas.map((data, index) => {
            return (
              <div key={index}>
                {loading || userAccountAddressDatas.length < 1 ? (
                  <p className="text-center text-black pt-5 pb-5 font-3 font-lg">
                    No Data or Loading Datas...
                  </p>
                ) : (
                  <>
                    <div className="row gap-1 mt-3">
                      <div className="col-12-sm col-4-md col-4-lg">
                        <div className="input-container">
                          <label htmlFor="BTCAddress">BTC Address</label>
                          <input type="text" value={data.btcAddress} readOnly />
                        </div>
                      </div>
                      <div className="col-12-sm col-4-md col-4-lg">
                        <div className="input-container">
                          <label htmlFor="ETHAddress">ETH Address</label>
                          <input type="text" value={data.ethAddress} readOnly />
                        </div>
                      </div>
                      <div className="col-12-sm col-4-md col-4-lg">
                        <div className="input-container">
                          <label htmlFor="BNBAddress">BNB Address</label>
                          <input type="text" value={data.bnbAddress} readOnly />
                        </div>
                      </div>
                    </div>
                    <div className="row gap-1">
                      <div className="col-12-sm col-4-md col-4-lg">
                        <div className="input-container">
                          <label htmlFor="TRXAddress">TRX Address</label>
                          <input type="text" value={data.trxAddress} readOnly />
                        </div>
                      </div>
                      <div className="col-12-sm col-4-md col-4-lg">
                        <div className="input-container">
                          <label htmlFor="BUSDAddress">BUSD Address</label>
                          <input
                            type="text"
                            value={data.busdAddress}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-12-sm col-4-md col-4-lg">
                        <div className="input-container">
                          <label htmlFor="PMAddresss">PM Address</label>
                          <input type="text" value={data.PmAddress} readOnly />
                        </div>
                      </div>
                    </div>
                    <div className="row gap-1">
                      <div className="col-12-sm col-4-md col-4-lg">
                        <div className="input-container">
                          <label htmlFor="bankName">Bank Name</label>
                          <input type="text" value={data.bankName} readOnly />
                        </div>
                      </div>
                      <div className="col-12-sm col-4-md col-4-lg">
                        <div className="input-container">
                          <label htmlFor="AccountNumber">Account Number</label>
                          <input
                            type="number"
                            value={data.accountNumber}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-12-sm col-4-md col-4-lg">
                        <div className="input-container">
                          <label htmlFor="AccountNumber">Account Name</label>
                          <input
                            type="text"
                            value={data.accountName}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
          <button
            className="btn-red delete-btn text-white p-1"
            onClick={() => setEdit(true)}
            disabled={userAccountAddressDatas.length > 0 ? true : false}
          >
            {userAccountAddressDatas.length > 0
              ? "Updated"
              : "Edit Address and Banks"}
          </button>
          {userAccountAddressDatas.length > 0 ? (
            <p className="mt-1 text-red font-sm">
              PLEASE CONTACT US IF YOU WANT TO UPDATE YOUR DETAILS.
            </p>
          ) : null}
        </>
      )}
      {edit && (
        <form onSubmit={hanldeAccountUpdate}>
          <div className="row gap-1 mt-3">
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="BTCAddress">BTC Address</label>
                <input
                  type="text"
                  id="BTCAddress"
                  onChange={(e) => setBtcAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="ETHAddress">ETH Address</label>
                <input
                  type="text"
                  id="ETHAddress"
                  onChange={(e) => setEthAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="BNBAddress">BNB Address</label>
                <input
                  type="text"
                  id="BNBAddress"
                  onChange={(e) => setBnbAddress(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row gap-1">
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="TRXAddress">TRX Address</label>
                <input
                  type="text"
                  id="TRXAddress"
                  onChange={(e) => setTrxAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="BUSDAddress">BUSD Address</label>
                <input
                  type="text"
                  id="BUSDAddress"
                  onChange={(e) => setBusdAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="PMAddresss">PM Address</label>
                <input
                  type="text"
                  id="PMAddress"
                  onChange={(e) => setPmAddress(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row gap-1">
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="bankName">Bank Name</label>
                <input
                  type="text"
                  id="bankName"
                  onChange={(e) => setBankName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="AccountNumber">Account Number</label>
                <input
                  type="number"
                  id="AccountNumber"
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="AccountName">Account Name</label>
                <input
                  type="text"
                  id="AccountName"
                  onChange={(e) => setAccountName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <p className="text-center text-green m-1">{text}</p>
          <button
            className="btn-red delete-btn text-white p-1"
            onClick={() =>
              setTimeout(() => {
                setEdit(false);
              }, 2000)
            }
          >
            Save
          </button>
        </form>
      )}
    </>
  );
}
export default AccountAddress;
