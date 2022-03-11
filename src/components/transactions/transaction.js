import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';

function Transaction(){

    const {user} = useAuth();

    const [transactions, setTransactions] = useState([])

    const userEmail = user.email.split('.')[0];

    useEffect(()=>{
        fetch(`https://lsexchange-25610-default-rtdb.firebaseio.com/${userEmail}.json`)
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
        })
    },[userEmail])

    return(
        <>
        <h1 className="mb-1 font-3 font-lg text-gray">Recent Transaction</h1>
            <table style={{width:'100%'}}>
                <thead className="bg-black text-white">
                    <tr>
                        <th>S/N</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Data</th>
                    </tr>
                </thead>
                {transactions.map((data, index)=>(
                        <tbody>
                            <tr key={data.TotalAmountInNaira}>
                                <td>NAN</td>
                                <td>{data.TradeType}</td>
                                <td>&#8358;{data.TotalAmountInNaira}</td>
                                <td>{(new Date(data.Date).toTimeString())}</td>
                            </tr>
                        </tbody>
                    ))}
            </table>
        </>
    )
}
export default Transaction;