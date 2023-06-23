import Navbar from "../Navbar";
import Header from "./CdonBanner";
import "../../styles/cdon.css"
import Solution from "../../images/solution.png";
import Feature1 from "../../images/app.png";
import Footer from "../Footer";
function Cdon(){

    return(
        <div className="container_cdon">
            <Navbar />
            <Header />

            <div className="shopify_sol">
                <h1>All Shopify Solutions With One Partner</h1>
                    <div className="flex_sol">
                        <div className="first_sol">
                            <img src={Solution}></img>
                            <h2>Add products to Nordic countries</h2>
                            <p>Our app has ready to use templates to create feeds for shopping platforms. Create a feed in a few clicks.</p>
                        </div>
                        <div className="first_sol">
                            <img src={Solution}></img>
                            <h2>Import orders to Shopify</h2>
                        <p>Import orders from marketplaces to Shopify and manage all orders in one place.</p>
                        </div>
                        <div className="first_sol">
                            <img src={Solution}></img>
                            <h2>No limits for your business. .</h2>
                        <p>Increase your sales on nordic countries by installing this app in shopify</p>
                        </div>
                    </div>
            </div>

            <div className="features">
                <h1>Features</h1>
                <div className="feature_one">
                    <div className="feature_flex">
                        <div className="feature_para">
                            <h2>Sync Product to CDON</h2>
                            <ul>
                                <li>Ultimate sales boost</li>
                                <li>Inventory management</li>
                                <li>Modify Product Variants</li>
                                <li>Easy syncup to/from shopify</li>
                                <li>Order Management</li>
                                <li>Order fulfilment/cancellation</li>
                            </ul>
                        </div>
                        <div className="feature_img">
                            <img src={Feature1} />
                        </div>
                       
                    </div>
                </div>
                <div className="feature_one">
                    <div className="feature_flex2" >

                 
                        <div className="feature_para" style={{flex:1}}>
                            <h2>Easy to set up:</h2>
                            <ul>
                                <li>Launch your add-ons in 2 minutes without coding</li>
                                <li>Nodevelopers are needed!</li>
                                <li>The app works right away</li>
                            </ul>
                        </div>
                        <div className="feature_img" style={{flex:1.5}}>
                            <img src={Feature1} style={{width:"70%"}} />
                        </div>
                       
                       
                    </div>
                </div>
            </div>

            <div className="appeal">
                <div className="appeal_flex">
                    <div className="white_space"></div>
                    <div className="appeal_para">
                        <h2>Appeal For Product CDON connector</h2>
                        <p>We are here to help you every step of the way, so feel free to get in touch with us if you need any assistance.</p>
                        <button>Send a request</button>
                    </div>
                    <div className="appeal_img">
                        <img src={Feature1} />
                    </div>
                </div>
            </div>

        <footer>
            <Footer/>
        </footer>

        </div>
    )
}

export default Cdon;