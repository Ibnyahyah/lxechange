export function Sell({ setModal, setAmount, total }) {

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="exchange">
        <label htmlFor="amount" className="text-black">
          Amount
        </label>
        <div className="display-f justify-space-between">
          <input
            type="number"
            name=""
            id="amount"
            placeholder="Enter amount in USD"
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <p className="text-black p-input">&#8358;{total}</p>
        </div>
        <p className="text-center mt-2 mb-1 text-green">
          Exchange Rate &#8358;585
        </p>
          <button className="btn-red" onClick={() => setModal(true)}>
            Sell Now
          </button>
      </form>
    </>
  );
}
export function Buy({ setModal, setAmount, total }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="amount" className="text-black">
          Amount
        </label>
        <div className="display-f justify-space-between">
          <input
            type="number"
            name=""
            id="amount"
            placeholder="Enter amount in USD"
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <p className="text-black p-input">&#8358;{total}</p>
        </div>
        <p className="text-center mt-2 mb-1 text-green">
          Exchange Rate &#8358;600
        </p>
        
          <button className="btn-green" onClick={() => setModal(true)}>
            Buy Now
          </button>
      </form>
    </>
  );
}
