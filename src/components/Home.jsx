import react from 'react';
import Navbar from "./Navbar";
import Banner from "../images/banner.png";
import Solution from "./SolutionSection";
import Service from "./ServiceSection";
import Customer from "./CustomerReview";
import New from "./New";
import Footer from "./Footer";
function Home(){
    return(
        <div className='container'>
            <Navbar />

            <section className='banner'>
                <img src={Banner}></img>
            </section>

            <section className='shopify_solution'>
                <h1>All Shopify Solutions With One Partner</h1>
                <Solution />
            </section>

            <section className='services'>
                <h1>Wide Range Of Development Services Get The Most Out Of Your Store</h1>
                    <Service />
            </section>  

            <section className='customer_review'>
                <h1>Customers Recommend Us</h1>
                    <Customer />
            </section>  

            <section className='news'>
                <h1>Our News</h1>
                <div className='para_div'>
                <p>From tips on how to get started to advice on pricing and marketing your products, we aim to make the journey as smooth as
                    possible for our readers. We hope you find our blog  helpful!
                    </p></div>
                    <New />
            </section>  



            <footer>
                <Footer />
            </footer>
        </div>
    )
}


export default Home;