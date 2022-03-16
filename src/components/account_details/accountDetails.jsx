import { useState } from "react";
import AccountAddress from "./Address-and-account";
import Profiles from "./profile";
import Securities from "./security";
import Verifications from "./verification";

const AccountDetails = () => {

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
            <p className="mt-2 text-red font-sm">PLEASE USE YOUR WHATSAPP NUMBER, IN YOUR PROFILE.</p>
              <Profiles/>
            </>
          ) : accountAndAddress ? (
            <>
              <AccountAddress/>
            </>
          ) : security ? (
            <>
              <Securities/>
            </>
          ) : verification ? (
            <>
              <Verifications/>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default AccountDetails;
