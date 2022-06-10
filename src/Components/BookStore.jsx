import TopStrip from "./Assets/TopStrip";
import NavDesktop from "./Assets/NavDesktop";
import BreadCrumbs from "./Assets/BreadCrumbs";
import Slideshow from "./Assets/Slideshow";
import SubscribeSection from "./Assets/SubscribeSection";
import LearnMoreTag from "./Assets/LearnMoreTag";
import BookCard from "./Assets/BookCard";
import PageSelector from "./Assets/PageSelector";
import TagBtn from "./Assets/TagBtn";
import BlogPost from "./Assets/BlogPost";
import FeatureSign from "./Assets/FeatureSign";
import FeatureBookCard from "./Assets/FeaturedBookCard";
import CTA from "./Assets/CTA";

import "./BookStore.scss";

import navLinks from "./Data/NavLinks";
import { bestSellingBooks, ebooks, urduBooks } from "./Data/Books";
import features from "./Data/Features";
import genreImages from "./Data/genreImages";

import leftArr from "./Assets/images/left-arr.svg";
import rightArr from "./Assets/images/right-arr.svg";
import CTABG01 from "./Assets/images/bgCTA-01.png";
import CTABG02 from "./Assets/images/bgCTA-02.png";


let pathItems,bestSellingBookItems,urduBookItems,ebookItems,featureItems,genreImageItems;

function initializeData(){

    pathItems = ["Bookstore"];

    bestSellingBookItems = bestSellingBooks.map(bsb=>{
        return(
            <BookCard bookname={bsb.bookname} authorname={bsb.authorname} genre={bsb.genre} ebook={bsb.ebook}/>
        );
    })

    bestSellingBookItems = bestSellingBookItems.filter((bsb,index)=>{
        return index<5;
    })

    urduBookItems =  urduBooks.map(ub=>{
        return(
            <BookCard bookname={ub.bookname} authorname={ub.authorname} genre={ub.genre} ebook={ub.ebook}/>        
        );
    })

    urduBookItems = urduBookItems.filter((ub,index)=>{
        return index<5;
    })

    ebookItems = ebooks.map(eb=>{
        return(
            <BookCard bookname={eb.bookname} authorname={eb.authorname} genre={eb.genre} ebook={eb.ebook}/>        
        );
    });

    ebookItems = ebookItems.filter((eb,index)=>{
        return index<5;
    });

    featureItems = features.map((feature,index)=>{
        return(
            <div className="ft" key={index}>
                <FeatureSign imgSrc = {feature.imgSrc} heading = {feature.heading} desc = {feature.desc}/>
                {(index!==features.length-1)?(<div className="vr"></div>):""}
            </div>
        );
    });

    genreImageItems = genreImages.map((genre,index)=>{
        return (
            <a href={genre.url}  key={index}>
                <img src={genre.img} alt="" className="genreImg"/>
            </a>
        );
    })

    genreImageItems = genreImageItems.filter((g,index)=>{
        return index<7;
    })
}

export default function BookStore() {

    initializeData();

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
                
                <section className="features">
                    {featureItems}
                </section>

                <section className="explore-genre">
                    <div className="heading">
                        <div style={{width:"5em"}}></div>
                        <div className="display-sm semibold">Explore Genres</div>
                        <LearnMoreTag text="See All"/>
                    </div>
                    <div className="genres">
                        <img src={leftArr} alt="left-arrow" height="46px" width="46px" />
                        {genreImageItems}
                        <img src={rightArr} alt="right-arrow" height="46px" width="46px"/>
                    </div>
                </section>

                <section className="deals"></section>

                <section className="blog">
                    <h2 className="display-sm semibold capitalize">Celebrating this day</h2>
                    <div className="blog-posts">
                        <BlogPost 
                        imageLink="https://via.placeholder.com/300x220"
                        heading="Youngest Published Fantasy Author" details="Ms. Zenia Umair, aged 12 wrote a 40,000 word novel and created a fantasy world of her own."/>
                        <BlogPost               
                        imageLink="https://via.placeholder.com/300x220"
                        heading="Best Selling Author in Adventure Genre" details="Mr. Niddal Bin Tahir, aged 30 is an eminent media professional who has produced plays, documentaries and commercials."/>
                        <BlogPost               
                        imageLink="https://via.placeholder.com/300x220"
                        heading="A Century’s Legacy Preserved" details="Ms. Muneera Qureshi, aged 71 founded Margalla Grammar School – an institute that has trained ~0.5 Million students to date."/>
                    </div>
                </section>

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

                <section className="featured-books">
                    
                    <div className="display-sm semibold capitalize">featured books</div>
                                
                    <div className="featured">
                        <FeatureBookCard cardTitle="This is the title" cardDetails = "“Etiam aliquam ac libero malesuada malesuada. Nunc id mollis sapien. Donec sed lobortis elit, ut ornare tortor. Etiam sed mauris nisl.” " bookname="Name here"/>
                        <FeatureBookCard cardTitle="This is the title" cardDetails = "“Etiam aliquam ac libero malesuada malesuada. Nunc id mollis sapien. Donec sed lobortis elit, ut ornare tortor. Etiam sed mauris nisl.” " bookname="Name here"/>
                    </div>

                </section>
                
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

                <section className="CTAs">
                    <CTA imgSrc={CTABG02} text="Want to get published?" buttonText="Get Published"/>
                    <CTA imgSrc={CTABG01} text="Join us in our Events!" buttonText="Explore Events"/>
                </section>

                <section className="subscribe">
                    <SubscribeSection heading="Subscribe to Daastan's Publish-o-Pedia" subheading="Get the latest and hottest publishing buzz in your buzz every month. Free of cost."/>
                </section>
            </main>

        </div>
    );


}  