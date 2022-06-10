
import Button from "./Button"

export default function({imgSrc,text,buttonText}){

    let bg = imgSrc? `url(${imgSrc})` : "black";

    return(
        <div className="CTA" style={{background:bg}}>
            <div className="info">
                <h2 className="text-xl semibold">{text}</h2>
                <Button type="default" size="medium" text={buttonText}/>
            </div>
        </div>
    )

}