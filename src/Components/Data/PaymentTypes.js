import credit from "../Assets/images/credit.svg";
import easypaisa from "../Assets/images/easypaisa.svg";
import jazzcash from "../Assets/images/jazzcash.svg";
import cash from "../Assets/images/cash.svg";

const paymentTypes = [
    {
        name : "card",
        url : credit
    }, {
        name : "easypaisa",
        url : easypaisa
    }, {
        name : "jazzcash",
        url : jazzcash,
    }, {
        name : "cash on delivery",
        url : cash
    }
];

export default paymentTypes;

