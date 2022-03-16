function Securities() {
  return (
    <>
      <div className="card bg-white mt-3 mb-1">
        <p className="font-3 font-md mb-1">Change Password</p>
        <p className="font-2 font-md mb-2">
          To Sign in Your Password is require
        </p>
        <button className="btn-yellow text-white">CHANGE PASSWORD</button>
      </div>
      <div className="card bg-white mt-3 mb-1">
        <p className="font-3 font-md mb-1">2 Factor Authentication</p>
        <p className="font-2 font-md mb-2">
          2 Factor Authentication is a multi-layer security measure to ensure
          the safety of your account.
        </p>
        <button className="btn-yellow text-white">ENABLE</button>
      </div>
    </>
  );
}
export default Securities;
