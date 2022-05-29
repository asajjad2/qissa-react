
import NavDesktop from "./Assets/NavDesktop";
import Button from "./Assets/Button";
import "./HomePage.css";

export default function HomePage() {  
  let navLinks = [{itemName:"Home",itemlink:""},{itemName:"Bookstore",itemlink:""},{itemName:"Best Selling",itemlink:""},{itemName:"New Arrivals",itemlink:""},{itemName:"Features Books",itemlink:""},{itemName:"Talent",itemlink:""},{itemName:"Pages",itemlink:"",dropdown:true},{itemName:"Contact",itemlink:""}];

  return (
    <div className="home-page">
      <header>
        <NavDesktop navLinks={navLinks}/>
        <div className="get-published">
          <div className="text">
            <div className="heading">Publish Locally, Sell Globally!</div>
            <div className="sub-heading">Experience the hassle-free book publishing from the comfort of your home or explore fresh local literature.</div>
          </div>
          <div className="buttons">
            <Button text="Get Published" size="x-lg" type="default"/>
            <Button text="Buy Books" size="x-lg" type="secondary"/>

          </div>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
