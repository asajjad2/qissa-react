import logoGroup from "./images/logo-group.svg";
import logo2 from "./images/logo2.svg";
import logo3 from "./images/logo3.svg";
import logo from "./images/logo.svg";
import twitter from "./images/twitter.svg";
import linkedin from "./images/linkedin.svg";
import facebook from "./images/facebook.svg";

import LinksColumn from "./LinksColumn";
import FooterLinks from "../Data/FooterLinks";

export default function Footer(){


    let LinksColumnItems = FooterLinks.map((FooterLink)=>{
       return <LinksColumn data={FooterLink}/>
    })  

    return(
        <div className="footer">

            <div className="logos">
                <img src={logoGroup} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
            </div>

            <div className="main">

                <div className="info">
                    <div className="logos">
                        <div className="logo-sec">
                            <img src={logo} alt="logo" />
                            <span className="text-md semibold text-white">Daastan</span>
                        </div>
                        <div className="info text-md normal"> Daastan is a one stop shop for all publishing needs</div>
                    </div>
                    <div className="links">
                        {LinksColumnItems}
                    </div>
                </div>

                <hr />

                <div className="copyright">
                    <div className="container">
                        <div className="text-md normal">© 2022 Daastan. All rights reserved.</div>
                        <div className="socials">
                            <a href="">
                                <img src={twitter} alt="twitter-icon" />
                            </a>
                            <a href="">
                                <img src={linkedin} alt="linkedin-icon" />
                            </a> 
                            <a href="">
                                <img src={facebook} alt="facebook icon" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}