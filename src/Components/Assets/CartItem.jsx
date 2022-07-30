import bin from "./images/bin.svg";

export default function CartItem({name,price,imgUrl,qty,deleteItem,width}){

    let customStyle= {
        width: width?(width):null
    }

    return (
        <div className="cart-item" style={customStyle}>
            <div className="item-info">
                <img src={imgUrl} alt={"item"} />
                <div className="text">
                    <h3 className="text-sm semibold capitalize">{name}</h3>
                    <div className="num">
                        <h5 className="price text-xs medium">Rs. {price}</h5>
                        <h5 className="text-xs normal text-gray">Quantity: {qty}</h5>
                    </div>
                </div>
            </div>
            <img src={bin} alt="bin icon" onClick={deleteItem} />
        </div>
    );
}