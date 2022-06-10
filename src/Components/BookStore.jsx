import TopStrip from "./Assets/TopStrip";
import NavDesktop from "./Assets/NavDesktop";
import BreadCrumbs from "./Assets/BreadCrumbs";
import Slideshow from "./Assets/Slideshow";
import SubscribeSection from "./Assets/SubscribeSection";
import LearnMoreTag from "./Assets/LearnMoreTag";
import BookCard from "./Assets/BookCard";
import PageSelector from "./Assets/PageSelector";
import TagBtn from "./Assets/TagBtn";
import "./BookStore.scss";

import navLinks from "./Data/NavLinks";
import { bestSellingBooks, ebooks, urduBooks } from "./Data/Books";

export default function BookStore() {

    let pathItems = ["Bookstore"];

    let bestSellingBookItems = bestSellingBooks.map(bsb=>{
        return(
            <BookCard bookname={bsb.bookname} authorname={bsb.authorname} genre={bsb.genre} ebook={bsb.ebook}/>
        );
    })

    bestSellingBookItems = bestSellingBookItems.filter((bsb,index)=>{
        return index<5;
    })

    let urduBookItems =  urduBooks.map(ub=>{
        return(
            <BookCard bookname={ub.bookname} authorname={ub.authorname} genre={ub.genre} ebook={ub.ebook}/>        
        );
    })

    urduBookItems = urduBookItems.filter((ub,index)=>{
        return index<5;
    })

    let ebookItems = ebooks.map(eb=>{
        return(
            <BookCard bookname={eb.bookname} authorname={eb.authorname} genre={eb.genre} ebook={eb.ebook}/>        
        );
    })

    ebookItems = ebookItems.filter((eb,index)=>{
        return index<5;
    })
    // console.log(bestSellingBookItems);

    return(
        <div className="book-store">
            <header>
                <div>
                    <TopStrip text="Check out our most recent publications"/>
                    <NavDesktop navLinks={navLinks}/>
                </div>
                <div className="ml200">
                    <BreadCrumbs  pathItems={pathItems}/>
                </div>
                <Slideshow width="65em"/>
            </header>

            <main>

                <section className="best-selling">
                    <div className="heading">
                        <div style={{width:"5em"}}></div>
                        <div className="display-sm semibold">Best Selling</div>
                        <LearnMoreTag text="See All"/>
                    </div>
                    <div className="cards">
                        {bestSellingBookItems}
                    </div>
                </section>
                
                <section className="explore-genre"></section>
                <section className="deals"></section>
                <section className="blog"></section>

                <section className="shop-next-book">
                    <div>
                        <div className="heading">

                            <div>
                                <div style={{width:"5em"}}></div>
                                <div className="display-sm semibold capitalize">shop your next book</div>
                                <div style={{width:"5em"}}></div>
                            </div>
                        
                            <div className="btn-group">
                                <TagBtn type="active" text="New Releases"/>
                                <TagBtn type="default" text="Coming Soon"/>
                                <TagBtn type="default" text="Award Winning"/>
                            </div>

                        </div>
                        <div className="cards">
                            {ebookItems}
                        </div> 
                    </div>

                    <div className="center-h">
                        <PageSelector type="slider" totalPages = {3}/>
                    </div>
                 
                </section>

                <section className="featured-author"></section>

                <section className="ebooks">
                    <div className="heading">
                        <div style={{width:"5em"}}></div>
                        <div className="display-sm semibold">E-Books</div>
                        <LearnMoreTag text="See All"/>
                    </div>
                    <div className="cards">
                        {ebookItems}
                    </div>
                </section>

                <section className="featured-books"></section>
                
                <section className="urdu-books">
                    <div className="heading">
                        <div style={{width:"5em"}}></div>
                        <div className="display-sm semibold">Urdu Books</div>
                        <LearnMoreTag text="See All"/>
                    </div>
                    <div className="cards">
                        {urduBookItems}
                    </div>
                </section>

                <section className="CTA"></section>
                <section className="subscribe">
                    <SubscribeSection heading="Subscribe to Daastan's Publish-o-Pedia" subheading="Get the latest and hottest publishing buzz in your buzz every month. Free of cost."/>
                </section>
            </main>
        </div>
    );


}  