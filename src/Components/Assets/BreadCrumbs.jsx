import home from "./images/home.svg";
import rightArr from "./images/right.svg"

export default function BreadCrumbs({pathItems}){ //array of all directories and files in path

    let pathItemsHTML = pathItems.map(pathItem=>{
        return (
            <div className="path-item">
                <img src={rightArr} alt="right-arrow" />
                <h5 className="text-sm medium">{pathItem}</h5>
            </div>
        );
    })

    return(
        <div className="bread-crumbs">
            <img src={home} alt="home" />
            {pathItemsHTML}
        </div>
    );
}