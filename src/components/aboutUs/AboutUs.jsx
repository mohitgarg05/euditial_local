import Navbar from "../Navbar";
import React from "react";
import '../../styles/about.css'
import Customer from "../CustomerReview";
import Supoort from "../../images/Our dedicated customer support team.png";

import FooterLinks from "../Footer";
function AboutUs(){
    return(
        <div className="about_container">
            <Navbar/>

            <div className="about_wrapper">
                <h1 id="aboutUs">About Us</h1>

                <div className="control_div flex">
                    <div className="heading_control">
                        <h1>Control Every Aspect Of Your Business</h1>
                    </div>
                    <div className="para_control">
                    With our customer support help, you can be sure that your Shopify site will be an asset to your business. We offer a wide range of shopify app services that can help you get the most out of your Shopify investment.                    </div>
                </div>

                <div className="support_div  ">

                            <img src={Supoort} />

                </div>
                <div className="customer" style={{marginTop:"60px"}}>
                    <h1 style={{textAlign:"center"}}>Customers Recommend Us</h1>
                    <Customer />
                </div>

                <div className="workflow" >
                    <h1 style={{textAlign:"center"}}>Easy Workflow. Sales Boost. Save Time.</h1>
                </div>


                    <FooterLinks/>

            </div>
        </div>
    )
}

export default AboutUs;