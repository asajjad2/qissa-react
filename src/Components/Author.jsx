import "./Author.scss";

import navLinks from "./Data/NavLinks";


export default function Author(){

    pathItems = ["Bookstore"];

    return(
        <div className="author">
            <header>
                <NavDesktop navLinks={navLinks}/>
                <div className="ml200">
                    <BreadCrumbs  pathItems={pathItems}/>
                </div>
            </header>
        </div>
    )
}