import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
            <div className="bg-black">
                <footer className=" text-white container pb-3 pt-3">
                    <div className="row mb-2 justify-space-between">
                        <div className="col-6-sm col-6-sm">
                            <ul>
                            <li className="font-4 font-lg">Learn</li>
                                <li>Blog</li>
                                <li>How To Buy and Sell</li>
                                <li>About us</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className="col-6-sm col-6-sm">
                            <ul>
                                <li className="font-4 font-lg">User</li>
                                <li><Link to="/user/dashboard">User Dashboard</Link></li>
                                <li><Link to="/rate">Rates</Link></li>
                            </ul>
                        </div>
                    </div>
                    <p>&copy; {(new Date().getFullYear())} lx Exchange -- All Right Reserved</p>
                </footer>
            </div>
        </>
    )
}

export default Footer;