import NavDesktop from "./Assets/NavDesktop";
import TopStrip from "./Assets/TopStrip";
import navLinks from "./Data/NavLinks";
import BreadCrumbs from "./Assets/BreadCrumbs";
import BookCard from "./Assets/BookCard";
import SubscribeSection from "./Assets/SubscribeSection";
import FooterLogos from "./Assets/FooterLogos";
import Footer from "./Assets/Footer";

import "./WishList.scss"

import WishListData from "./Data/WishListData";

export default function WishList(){

    let pathItems = ["Wishlist"]

    return(
        <div className="wish-list">

            <header>
                <div>
                    <TopStrip text="Check out our most recent publications"/>
                    <NavDesktop navLinks={navLinks}/>
                </div>
                <div className="ml200">
                    <BreadCrumbs  pathItems={pathItems}/>
                </div>
            </header>

            <main className="ml200">
                <h2 className="display-md semibold">Wishlist</h2>
                <div className="books">
                    {
                        WishListData.map((book)=>{
                        return  <BookCard bookname={book.bookname} authorname={book.authorname} genre={book.genre} ebook={book.ebook}/>
                        })
                    }
                </div>
                
            </main>

            <footer>
                <SubscribeSection heading="Subscribe to Daastan's Publish-o-Pedia" subheading="Get the latest and hottest publishing buzz in your buzz every month. Free of cost."/>
                <FooterLogos />
                <Footer />
            </footer>

           
        </div>
    );
}