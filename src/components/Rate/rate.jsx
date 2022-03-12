import { RateData } from "./dummy";

export default function Rates({Rate}){
    return(
        <div className={Rate?"mt-3 mb-3 text-white rates":"container mt-3 mb-3 text-white rates"}>
            {Rate?<h1 className="mb-1 text-white">Exchange Rate</h1>:
                <>
                    <p className="font-lg font-2 text-white">Best Rate You Can Get</p>
                    <h1 className="font-3 font-xl mt-1 mb-2 text-white">Rates</h1>
                </>
            }
            <div className="row gap-1">
                {RateData.map((data, index)=>{
                    return(
                        <div className="col-6-xs col-6-sm col-3-md text-black" key={index}>
                            <div className="card bg-gray-light-9 text-center">
                                <img className="br-full" src={data.image} style={{width:'100px', height:'100px'}} alt=""/>
                                <h2>{data.coin}</h2>
                                <p>Naira (NGN)</p>
                                <hr className="mt-1 mb-1"/>
                                <p>Buy: {data.buy} | Sell: {data.sell}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}