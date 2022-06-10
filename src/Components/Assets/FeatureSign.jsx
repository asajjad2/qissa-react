export default function FeatureSign({imgSrc,heading,desc}){
    return(
        <div className="feature-sign">
            <img src={imgSrc} alt="icon" />
            <div className="text">
                <h4 className="text-sm semibold text-dark-blue">{heading}</h4>
                <h5 className="text-xs normal">{desc}</h5>
            </div>
        </div>
    );
}