
export default function BookCard({imgSrc,bookname,authorname,genre,ebook}){
    return(
        <div className="book-card">

            {ebook?
                (<div className="ebook-tag">
                    <h6 className="text-xs medium">Ebook</h6>
                </div>
                ):""
            }
            
            <img src={imgSrc} alt="" />
            <div className="text">
                <div className="names">
                    <h5 className="text-md semibold">{bookname}</h5>
                    <h6 className="text-xs normal">{authorname}</h6>
                </div>
                <div className="genre">
                    <h6 className="text-xs medium">{genre}</h6>
                </div>
            </div>
        </div>
    );
}