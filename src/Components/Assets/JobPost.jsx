import map from "./images/location.svg";
import clock from "./images/clock.svg"

export default function JobPost({title,type,desc,location,time}){

    let typeForColour = type.toLowerCase();
    if(typeForColour==="customer success"){
        typeForColour = "cs";
    }

    return(
        <div className="job-post">
            <div className="text">
                <div>
                    <div className="title text-lg medium">{title}</div>
                    <div className={`type ${typeForColour}`}> <div className="dot"></div> <p className="text-sm medium">{type}</p> </div>
                </div>
                <div className="desc text-md normal text-gray">{desc}</div>
            </div>
            <div className="badges">
                <div className="bdg">
                    <img src={map} alt="location icon" />
                    <p className="text-md medium text-gray">{location}</p>
                </div>
                <div className="bdg">
                    <img src={clock} alt="time icon" />
                    <p className="text-md medium text-gray">{time}</p>
                </div>
            </div>
        </div>
    );
}