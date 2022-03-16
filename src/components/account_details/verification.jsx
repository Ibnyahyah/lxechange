import { useAuth } from "../../context/authContext";

function Verifications(){

    const { user } = useAuth();

    return(
        <><div className="mt-3">
        <h3 style={{ marginBottom: "5px" }}>
          E-MAIL VERIFICATION:
          <br />
          {user.email ? (
            <p className="text-gray font-2 font-md">
              Your Email has been verified
            </p>
          ) : (
            <p className="text-red font-sm">E-mail not verified</p>
          )}
        </h3>
        <h3>START YOUR KYC VERIFICATION</h3>
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
    )
}
export default Verifications;