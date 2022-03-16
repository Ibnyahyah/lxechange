import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import axios from "axios";

function Profiles() {
  const { user } = useAuth();

  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(user.email);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [datas, setDatas] = useState([]);
  const [text, setText] = useState("");

  const data = {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    email: email,
    dateOfBirth: dateOfBirth,
  };

  const userEmail = user.email.split(".")[0];

  const hanldeProfileUpdate = async (e) => {
    e.preventDefault();
    await axios.post(
      `https://lsexchange-25610-default-rtdb.firebaseio.com/${userEmail}-profile.json`,
      data
    );
    setText("Profile Updated");
  };
  useEffect(() => {
    fetch(
      `https://lsexchange-25610-default-rtdb.firebaseio.com/${userEmail}-profile.json`
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
          setDatas(docData);
          console.log(docData);
        }
      });
  }, [userEmail]);

  return (
    <>
      {!edit && (
        <>
          {datas.map((data, index) => {
            return (
              <>
                <div className="row gap-1">
                  <div className="col-12-sm col-4-md col-4-lg">
                    <div className="input-container">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" value={data.firstName} readOnly />
                    </div>
                  </div>
                  <div className="col-12-sm col-4-md col-4-lg">
                    <div className="input-container">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" value={data.lastName} readOnly />
                    </div>
                  </div>
                  <div className="col-12-sm col-4-md col-4-lg">
                    <div className="input-container">
                      <label htmlFor="phoneNumber">Phone number</label>
                      <input type="number" value={data.phone} readOnly />
                    </div>
                  </div>
                </div>
                <div className="row gap-1">
                  <div className="col-12-sm col-4-md col-4-lg">
                    <div className="input-container">
                      <label htmlFor="Email">Email</label>
                      <input
                        type="email"
                        value={user.email || data.email}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-12-sm col-4-md col-4-lg">
                    <div className="input-container">
                      <label htmlFor="dateOfBirth">Date Of Birth</label>
                      <input type="date" value={data.dateOfBirth} readOnly />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <button
            className="btn-red delete-btn text-white"
            onClick={() => setEdit(true)}
            disabled={datas.length > 0 ? true : false}
          >
            {datas.length > 0 ? "Updated" : "Edit Profile"}
          </button>
          {datas.length > 0 ? (
            <p className="mt-1 text-red font-sm">
              PLEASE CONTACT US IF YOU WANT TO UPDATE YOUR DETAILS.
            </p>
          ) : null}
        </>
      )}
      {edit && (
        <form onSubmit={hanldeProfileUpdate}>
          <div className="row gap-1">
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </div>
            </div>
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  value={lastName}
                />
              </div>
            </div>
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="phoneNumber">Phone number</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={phone}
                />
              </div>
            </div>
          </div>
          <div className="row gap-1">
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={user.email}
                />
              </div>
            </div>
            <div className="col-12-sm col-4-md col-4-lg">
              <div className="input-container">
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <input
                  type="date"
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                  }}
                  value={dateOfBirth}
                />
              </div>
            </div>
          </div>
          <p className="text-center text-green m-1">{text}</p>
          <button
            className="btn-red delete-btn text-white"
            onClick={() => {
              setTimeout(() => setEdit(false), 2000);
            }}
          >
            Save
          </button>
        </form>
      )}
    </>
  );
}
export default Profiles;
