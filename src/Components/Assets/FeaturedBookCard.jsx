import Button from "./Button";

export default function FeatureBookCard({cardTitle,cardDetails,bookname,imgSrc}){
    
    return(
        <div className="feature-book-card">
            <img src={imgSrc} alt="" />
            <div className="main">
                <div className="text">
                    <h3 className="display-xs semibold">{cardTitle}</h3>
                    <p className="text-md normal">{cardDetails}</p>
                    <h4 className="text-md medium italic">{bookname}</h4>
                </div>
                <Button type="secondary" size="medium" text="View Book"/>
            </div>
        </div>
    );
 
}