
import instagram from "./images/instagram-outlined.svg";
import twitter from "./images/twitter-clr.svg";
import linkedin from "./images/linkedin-clr.svg";
import gmail from "./images/gmail-clr.svg";

export default function AuthorInfo({author}){

    // console.log(author);

    return(
        <div className="author-info">
            <img src={author.imgSrc} alt="author" />
            <div className="text">

                <div className="brief">
                    <h2 className="display-md semibold">{author.name}</h2>
                    <h3 className="text-md medium text-gray">{author.handle}</h3>
                </div>

                <div className="details">
                    <div className="about">
                        <h2 className="display-sm semibold">About the Author</h2>
                        <p className="text-md medium text-gray">
                            {author.description}
                        </p>
                    </div>
                    <div className="links">
                        <a href={author.instagram}>
                            <img src={instagram} alt="instagram-icon" />
                        </a>
                        <a href={author.twitter}>
                            <img src={twitter} alt="twitter-icon" />
                        </a>
                        <a href={author.linkedin}>
                            <img src={linkedin} alt="linkedin-icon" />
                        </a>
                        <a href={author.gmail}>
                            <img src={gmail} alt="gmail-icon" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}