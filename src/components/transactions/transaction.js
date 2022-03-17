import { useAuth } from "../../context/authContext";

function Transaction() {
  const { transactions } = useAuth();

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
