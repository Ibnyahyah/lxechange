import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RateData } from "../Rate/dummy";

const SearchFilter =()=>{
    const [data,setData] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');


    function handleSearch(e){
        e.preventDefault()
    }

    useEffect(()=>{
        const filteredData = RateData?.filter(({coin})=> coin.toLowerCase().includes(searchTerm.toLowerCase()));
        setData(filteredData)
    },[searchTerm]);
    return(
        <>
            <form className="col-3-md text-black search-form" onSubmit={handleSearch}>
                <input type="text" style={{border:'none', borderBottom:'1px solid black', padding:'10px', width:'90%'}} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search Your favorite"/>
                {searchTerm.length > 0?
                    <div>
                        {data.map((data, index)=>{
                    return(
                        <div className="bg-white p-1 text-black searched-details">
                            <Link to={`/trade/coin/${data.symbol}`}>
                                {data.coin}
                            </Link>
                        </div>
                    )
                })}
                    </div>:null
                }
            </form>
        </>
    )
}
export default SearchFilter;