import react from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import ImageEtsy from "../images/image.png";
import ImageCdon from "../images/5.jpg";

import Solution from "./SolutionSection";
import Service from "./ServiceSection";
import Customer from "./CustomerReview";
import New from "./New";
import Footer from "./Footer";
import FeaturedApp from "./FeaturedAppCard";
function Home(){
    return(
        <div className='container'>
            <Navbar />

            <section className='banner'>
                <Header />
            </section>

            <section className='shopify_solution'>
                <h1>All Shopify Solutions With One Partner</h1>
                <Solution />
            </section>

            <section className='featured_app'>
                <h1>Take Your Business To The Next Level With Our Apps</h1>
                <div className='app_div'>
                    <FeaturedApp img={ImageCdon} heading = "CDON Connector app"  title = "The app allows you to sync your Shopify products with the CDON marketplace effortlessly. It eliminates the need for manual data entry and ensures that your product information, including titles, descriptions, images, and prices, remains consistent across both platforms." />
                    <FeaturedApp img = {ImageEtsy} heading = "Etsy Connector app"   title = "The app enables you to easily sync your Shopify products with your Etsy shop. It eliminates the need for manual data entry and ensures that your product information, including titles, descriptions, images, and prices, remains consistent across both platforms." />
                    <FeaturedApp img = {ImageEtsy} heading = "Product Review app"  title="Product review apps allow merchants to automatically or manually request reviews from customers who have purchased their products. These apps typically send follow-up emails to customers after their purchase, prompting them to leave a review." />
                </div>
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