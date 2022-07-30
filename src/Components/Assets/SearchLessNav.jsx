import "./asset-styles.css";
import cart from "./images/cart.svg";
import favourites from "./images/favourites.svg";
import profile from "./images/profile.svg";
import logo from "./images/logo.svg"

export default function SearchLessNav() {

  

  return (
    <div className="nav-desktop searchless">
        <section className="upper">
          <div className="logo-sec">
            <img src={logo} alt="logo" />
            <span className="text-md semibold text-dark-blue">Daastan</span>
          </div>
          <div className="icon-menu">
            <img src={cart} alt="cart-icon" />
            <div className="vr"></div>
            <img src={favourites} alt="favourites-icon" />
            <div className="vr"></div>
            <img src={profile} alt="profile-icon" />
          </div>
        </section>
        <div className="hr" style={{width:"100%"}}></div>
    </div>
  );
}
