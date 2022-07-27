import logoGroup from "./images/logo-group.svg";
import logo2 from "./images/logo2.svg";
import logo3 from "./images/logo3.svg";

export default function FooterLogos(){
  return (
    <div className="footer-logos">
        <div className="logos">
            <img src={logoGroup} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
        </div>
    </div>
  )
}
