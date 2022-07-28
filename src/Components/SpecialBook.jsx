import React, {useState, useEffect} from 'react';

import NavDesktop from "./Assets/NavDesktop";
import TopStrip from "./Assets/TopStrip";
import navLinks from "./Data/NavLinks";
import BreadCrumbs from "./Assets/BreadCrumbs";
import BookCard from "./Assets/BookCard";
import PageSelector from "./Assets/PageSelector";
import SubscribeSection from "./Assets/SubscribeSection";
import FooterLogos from "./Assets/FooterLogos";
import Footer from "./Assets/Footer";

import "./SpecialBook.scss"

import listData from "./Data/WishListData";

export default function WishList({category}){

    let pathItems = [category]
    let categoryLower = category.toLowerCase();

    let totalPages = listData.length/25;

    // console.log("total books - ");
    // console.log(listData.length);
    totalPages = Math.ceil(totalPages);

    const [currentBooks,setCurrentBooks] = useState(listData.slice(0,25));
    const [activePageNum, setActivePageNum] = useState(1);

    // console.log("total pages - ");
    // console.log(totalPages);

    for(let i=1;i<4;i++){

        let lastBooksRemaining = listData.length % 25;

        if(i!==totalPages){
            let Books = listData.filter(function(currentValue, index, arr){
                return (index>=((i-1)*25)&&index<(((i-1)*25)+25))
            });
            console.log(Books);
            // setCurrentBooks(listData.slice(Books,25));
        } else {
            let Books = listData.filter(function(currentValue, index, arr){
                return (index>=((i-1)*25)&&index<(((i-1)*25)+lastBooksRemaining))
            });
            console.log(Books);
            // setCurrentBooks(lastBooks);
        }
    }

    useEffect(() => {

        function handleClick(activePage){  
            
            
            let lastBooksRemaining = listData.length % 25;

            if(activePage!==totalPages){
                let Books = listData.filter(function(currentValue, index, arr){
                    return (index>=((activePage-1)*25)&&index<(((activePage-1)*25)+25))
                });
                setCurrentBooks(Books);
            } else {
                let Books = listData.filter(function(currentValue, index, arr){
                    return (index>=((activePage-1)*25)&&index<(((activePage-1)*25)+lastBooksRemaining))
                });
                setCurrentBooks(Books);
            }
                
        }

        handleClick(activePageNum);
    
    }, [activePageNum]);

    

    

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
                <h2 className="display-md semibold">{category}</h2>
                <div className="books">
                    {   
                        categoryLower!=='wishlist'?
                        (
                            currentBooks.map((book)=>{
                            return  <BookCard bookname={book.bookname} authorname={book.authorname} genre={book.genre} ebook={book.ebook}/>
                        })):
                        (
                            listData.map((book)=>{
                            return  <BookCard bookname={book.bookname} authorname={book.authorname} genre={book.genre} ebook={book.ebook}/>
    
                        }))
                        
                    }
                </div>

                {categoryLower!=='wishlist'&&(
                    <div className="pagination">
                        <hr />
                        <PageSelector type={"numbering"} totalPages={Number(totalPages)} activePageNum={activePageNum} setActivePageNum={setActivePageNum}/>
                    </div>
                )}
                
            </main>

            <footer>
                <SubscribeSection heading="Subscribe to Daastan's Publish-o-Pedia" subheading="Get the latest and hottest publishing buzz in your buzz every month. Free of cost."/>
                <FooterLogos />
                <Footer />
            </footer>

           
        </div>
    );
}