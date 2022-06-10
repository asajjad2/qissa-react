import TopStrip from "./Assets/TopStrip";
import NavDesktop from "./Assets/NavDesktop";
import BreadCrumbs from "./Assets/BreadCrumbs";
import Slideshow from "./Assets/Slideshow";
import SubscribeSection from "./Assets/SubscribeSection";
import LearnMoreTag from "./Assets/LearnMoreTag";

import "./BookStore.scss";

import navLinks from "./Data/NavLinks";

export default function BookStore() {

    let pathItems = ["Bookstore"];

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
                </section>
                <section className="explore-genre"></section>
                <section className="deals"></section>
                <section className="blog"></section>
                <section className="shop-next-book"></section>
                <section className="featured-author"></section>
                <section className="ebooks"></section>
                <section className="featured-books"></section>
                <section className="urdu-books"></section>
                <section className="CTA"></section>
                <section className="subscribe">
                    <SubscribeSection heading="Subscribe to Daastan's Publish-o-Pedia" subheading="Get the latest and hottest publishing buzz in your buzz every month. Free of cost."/>
                </section>
            </main>
        </div>
    );


}  