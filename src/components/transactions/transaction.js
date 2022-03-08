function Transaction(){
    return(
        <>
        <h1 classname="mb-1 font-3 font-lg text-gray">Recent Transaction</h1>
            <table style={{width:'100%'}}>
                <thead className="bg-black text-white">
                    <tr>
                        <th>S/N</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Sell</td>
                        <td>&#8358;100000.00k</td>
                        <td>28/02/2022</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Buy</td>
                        <td>&#8358;20000.00k</td>
                        <td>28/02/2022</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Buy</td>
                        <td>&#8358;2000.00k</td>
                        <td>28/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Transaction;