import NavDesktop from "./Assets/NavDesktop";
import BreadCrumbs from "./Assets/BreadCrumbs";
import BookCard from "./Assets/BookCard";
import Footer from "./Assets/Footer";
import AuthorSubscribeSection from "./Assets/AuthorSubscribeSection";
import AuthorInfo from "./Assets/AuthorInfo";

import "./Author.scss";

import navLinks from "./Data/NavLinks";

import authorImg from "./Assets/images/author-img.png";




export default function Author({authorname}){

    // author info required from database includes name,social media handle, description, instagram, linkedin, facebook, email, array of books published by them

    let authorInfo = {
        imgSrc : authorImg,
        name : authorname,
        handle : "@DaniaShah1623",
        description: "Donec finibus libero eu metus tempor feugiat. Integer ultricies congue orci. Curabitur sit amet justo quis ante gravida facilisis in a nisi. Praesent feugiat tempus ligula, a bibendum lectus. Nulla facilisi. Aliquam gravida suscipit condimentum. Fusce orci eros, dapibus eu tellus ac, tempor luctus neque. Aliquam erat volutpat. Sed at interdum nisl.",
        instagram : "",
        linkedin : "",
        facebook : "",
        email : "",
        byAuthorBooks : [

            {
                bookname:"Book Name",
                authorname: "Author Name",
                genre: "thriller",
                ebook: false
            },{
                bookname:"Book Name",
                authorname: "Author Name",
                genre: "thriller",
                ebook: false
            },{
                bookname:"Book Name",
                authorname: "Author Name",
                genre: "thriller",
                ebook: true
            },{
                bookname:"Book Name",
                authorname: "Author Name",
                genre: "thriller",
                ebook: false
            },{
                bookname:"Book Name",
                authorname: "Author Name",
                genre: "thriller",
                ebook: true
            },{
                bookname:"Book Name",
                authorname: "Author Name",
                genre: "thriller",
                ebook: false
            },{
                bookname:"Book Name",
                authorname: "Author Name",
                genre: "thriller",
                ebook: true
            },
        
        ]
    }

    let pathItems = ["Bookstore"];

    let byAuthorBooksItems = authorInfo.byAuthorBooks.map(bab=>{
        return(
            <BookCard bookname={bab.bookname} authorname={bab.authorname} genre={bab.genre} ebook={bab.ebook}/>
        );
    })

    byAuthorBooksItems = byAuthorBooksItems.filter((bab,index)=>{
        return index<5;
    })

    return(
        <div className="author">
            
            <NavDesktop navLinks={navLinks}/>
            <div className="ml200">
                <BreadCrumbs  pathItems={pathItems}/>
            </div>
            <main>
                <section className="authorInfo">
                    <AuthorInfo author = {authorInfo}/>
                </section>
                <section className="by-author">
                    <div className="heading">
                        <div style={{width:"5em"}}></div>
                        <div className="display-sm semibold capitalize">Books By {authorname}</div>
                        <div style={{width:"5em"}}></div>
                    </div>
                    <div className="cards">
                        {byAuthorBooksItems}
                    </div>
                </section>
                <section className="subscribe">
                    <AuthorSubscribeSection/>
                </section>
                <Footer/>
            </main>
        </div>
    )
}