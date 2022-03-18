import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";

function Transaction() {
  const { user } = useAuth();

  const [transactions, setTransactions] = useState([])
   // Fecthing transacation from firebase
  useEffect(()=>{
      fetch(`https://lsexchange-25610-default-rtdb.firebaseio.com/${user.email.split('.')[0]}.json`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        const docs = [];
        for (const key in data){
            const doc = {
                id :key,
                ...data[key]
            };
            docs.push(doc);

        }
        let sort = docs.sort((p1,p2)=>{
            return new Date(p2.Date) - new Date(p1.Date)
        })
        setTransactions(sort)
    });
},[user]);

  return (
    <div className="trade-transaction">
      {transactions <= 0 ? (
        <p className="font-3 text-center text-black">
          Oopps No Transaction Record Found!!! Kindly Trade
        </p>
      ) : (
        <table style={{ width: "100%" }}>
          <>
            <thead className="bg-black text-white">
              <tr>
                <th>S/N</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Data</th>
              </tr>
            </thead>
            {transactions.map((data, index) => (
              <tbody key={index}>
                <tr>
                  <td>NAN</td>
                  <td>{data.TradeType}</td>
                  <td>&#8358;{data.TotalAmountInNaira}</td>
                  <td>{new Date(data.Date).toTimeString()}</td>
                </tr>
              </tbody>
            ))}
          </>
        </table>
      )}
    </div>
  );
}
export default Transaction;
