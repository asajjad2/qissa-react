export default function PaymentTypeButton({imgUrl,text,onClick,type,dataType}){
    return (
        <div className={`paymentTypeButton ${type}`} onClick={onClick} data-type={dataType}>
            <img src={imgUrl} alt={text} data-type={dataType}/>
            <h5 className="text-xs normal text-gray" data-type={dataType}>{text}</h5>
        </div>
    );
}