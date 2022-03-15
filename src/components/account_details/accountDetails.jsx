import { useState } from "react";
import { useAuth } from "../../context/authContext";

const AccountDetails = () => {
  const { user } = useAuth();

  const [profile, setProfile] = useState(true);
  const [accountAndAddress, setAccountAndAddress] = useState(false);
  const [security, setSecurity] = useState(false);
  const [verification, setVerification] = useState(false);

  function Profile() {
    setProfile(true);
    setAccountAndAddress(false);
    setSecurity(false);
    setAccountAndAddress(false);
  }
  function AccountAndAddress() {
    setAccountAndAddress(true);
    setProfile(false);
    setSecurity(false);
    setVerification(false);
  }
  function Security() {
    setSecurity(true);
    setProfile(false);
    setAccountAndAddress(false);
    setVerification(false);
  }
  function Verification() {
    setVerification(true);
    setProfile(false);
    setAccountAndAddress(false);
    setSecurity(false);
  }

  return (
    <>
      <div className="container pb-5 pt-5">
        <div className="header mt-3 mb-4 text-white">
          <p className="font-4 font-lg mb-2">Settings</p>
          <p>Got questions? Call or Whatsapp 08129418741</p>
        </div>
        <div className="card bg-white" style={{ borderRadius: "none" }}>
          <div className="button-container display-f justify-space-between">
            <button className="btn" onClick={Profile}>
              PROFILE
            </button>
            <button className="btn" onClick={AccountAndAddress}>
              ACCOUNT AND ADDRESS
            </button>
            <button className="btn" onClick={Security}>
              SECURITY
            </button>
            <button className="btn" onClick={Verification}>
              VERIFICATION
            </button>
            <button className="btn-red delete-btn text-white">
              Delete Account
            </button>
          </div>
          {profile ? (
            <>
              <div className="row gap-1 mt-3">
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="number" />
                  </div>
                </div>
              </div>
              <div className="row gap-1">
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="Email">Email</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="dateOfBirth">Date Of Birth</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <button className="btn-red delete-btn text-white">
                Edit Profile
              </button>
            </>
          ) : accountAndAddress ? (
            <>
              <div className="row gap-1 mt-3">
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="BTCAddress">BTC Address</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="ETHAddress">ETH Address</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="BNBAddress">BNB Address</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="row gap-1">
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="TRXAddress">TRX Address</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="BUSDAddress">BUSD Address</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="PMAddresss">PM Address</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="row gap-1">
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="bankName">Bank Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="AccountNumber">Account Number</label>
                    <input type="number" />
                  </div>
                </div>
                <div className="col-12-sm col-4-md col-4-lg">
                  <div className="input-container">
                    <label htmlFor="AccountNumber">Account Name</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <button className="btn-red delete-btn text-white p-1">
                Edit Address and Banks
              </button>
            </>
          ) : security ? (
            <>
              <div className="card bg-white mt-3 mb-1">
                <p className="font-3 font-md mb-1">Change Password</p>
                <p className="font-2 font-md mb-2">
                  To Sign in Your Password is require
                </p>
                <button className="btn-yellow text-white">
                  CHANGE PASSWORD
                </button>
              </div>
              <div className="card bg-white mt-3 mb-1">
                <p className="font-3 font-md mb-1">2 Factor Authentication</p>
                <p className="font-2 font-md mb-2">
                  2 Factor Authentication is a multi-layer security measure to
                  ensure the safety of your account.
                </p>
                <button className="btn-yellow text-white">ENABLE</button>
              </div>
            </>
          ) : verification ? (
            <>
              <div className="mt-3">
                <h3 style={{ marginBottom: "5px" }}>
                  E-mail Verification:
                  <br />
                  {user.email ? (
                    <p className="text-gray font-2 font-md">
                      Your Email has been verified
                    </p>
                  ) : (
                    <p className="text-red font-sm">E-mail not verified</p>
                  )}
                </h3>
                <h3>Start Your KYC Verification</h3>
                <p className="text-gray" style={{fontSize:'10px'}}>
                  In a Bid to curb and prevent the activities of fraudsters from
                  using the ls-eXchange platform for any illegal/fraudulent
                  activities, it has now become imperative we know our website
                  users. We would be capturing your personal photo and your ID
                  card. Kindly click on the proceed button to verify your
                  account.
                </p>
                <button className="btn-blue text-white mt-1">START</button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default AccountDetails;
