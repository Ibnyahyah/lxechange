import NavBar from "../components/nav-bar/nav"
import Rates from "../components/Rate/rate";

function TopCarosel(){
    return(
        <div className="bg-blue" style={{minHeight:'55vh'}}>
            <div className="row">
                <div className="col-6-md">
                    <div className="display-f justify-center text-center mt-5">
                        <img src="./images/logo.png" style={{width:'70%', margin:'auto'}} alt="exchanges" />
                        {/* <p className="font-4 font-xl">Exchanges</p> */}
                    </div>    
                </div>
                <div className="col-6-md display-f align-center" style={{height:'500px'}}>
                    <div>
                        <h1 className="font-xxl text-white">
                            Buy and Sell At Sweet Rate
                        </h1>
                        <h2 className="font-xxl text-white mt-1 ml-2">Contact Us? If You Have A Question</h2>
                        <h2 className="btn p-1 pr-2 pl-2 br-sm ml-5 mt-1">08129418741</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HomePage = ()=>{
    return(
        <>
            <NavBar/>
            <TopCarosel/>
            <Rates/>
        </>
    )
}
export default HomePage;