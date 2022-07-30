import { useState } from "react";

import SearchLessNav from "./Assets/SearchLessNav";
import PaymentTypeButton from "./Assets/PaymentTypeButton";
import Input from "./Assets/Input";
import Button from "./Assets/Button";
import CartItem from "./Assets/CartItem";


import "./Payment.scss";
import paymentTypes from "./Data/PaymentTypes";

const paymentMethods = {
    card : "card",
    easypaisa : "easypaisa",
    jazzcash : "jazzcash",
    cash : "cash on delivery",
}




export default function Payment(){


    

    const emptyUserObject= {
        address : "",
        country : "",
        city : "",
        paymentType : paymentMethods.card,
        cardHolderName : "",
        cardNumber : "",
        cvv : "",
        expiry : null,
    }
    
    const [userInfoObject,setUserInfoObject] = useState(emptyUserObject);

    

    function paymentTypeInputChange({target}){
        setUserInfoObject((previousValue)=>{
            return {
                ...previousValue,
                paymentType : target.attributes[1].value
            }
        })
    }

    function handleInputChange({name,value}){

        setUserInfoObject((previousValue)=>{

            if(name==="address"){
                return {
                    ...previousValue,
                    address : value
                };
            } else if(name==="country"){
                return {
                    ...previousValue,
                    country : value
                };
            } else if(name==="city"){
                return {
                    ...previousValue,
                    city : value
                };
            } else if(name==="ch-name"){
                return {
                    ...previousValue,
                    cardHolderName : value
                };
            } else if(name==="c-number"){
                return {
                    ...previousValue,
                    cardNumber : value
                };
            } else if(name==="cvv"){
                return {
                    ...previousValue,
                    cvv : value
                };
            } else if(name==="expiry"){
                return {
                    ...previousValue,
                    expiry : value
                };
            }
        })
    }

    const paymentTypeItems = paymentTypes.map((type)=>{
        return (
            <PaymentTypeButton imgUrl={type.url} text={type.name} type={userInfoObject.paymentType === type.name?"active":"inactive"} dataType = {type.name} onClick={(e)=>paymentTypeInputChange(e)}/>
        );
    })

    return (
        <div className="payment">
            <SearchLessNav />
            <main>
                <div className="payment-details">
                    <div className="shipping">
                        <h4 className="text-md semibold text-gray">Shipping</h4>
                        <form action="">

                            <Input onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your address"
                                    value={userInfoObject.address}
                                    className={"grid-span-2"}
                                    name="address"
                                    isRequired={true}
                                    label="Address"
                            />

                            <Input onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your country"
                                    value={userInfoObject.country}
                                    className={"text-md normal"}
                                    name="country"
                                    isRequired={true}
                                    label="Country"
                            />

                            <Input onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your city"
                                    value={userInfoObject.city}
                                    className={"text-md normal"}
                                    name="city"
                                    isRequired={true}
                                    label="City"
                            />

                        </form>
                    </div>

                    <div className="method">
                        <h4 className="text-md semibold text-gray">Payment</h4>
                        <section>
                            {paymentTypeItems}
                        </section>
                        <form>
                            <Input onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter Cardholder Name"
                                    value={userInfoObject.cardHolderName}
                                    className={"grid-span-2"}
                                    name="ch-name"
                                    isRequired={true}
                                    label="Cardholder Name"
                            />
                            <Input onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter Card Number"
                                    value={userInfoObject.cardNumber}
                                    className={"grid-span-2"}
                                    name="c-number"
                                    isRequired={true}
                                    label="Card Number"
                            />
                            <Input onChange={handleInputChange}
                                    type="text"
                                    placeholder="_ _ _"
                                    value={userInfoObject.cvv}
                                    className={""}
                                    name="cvv"
                                    isRequired={true}
                                    label="CVV Number"
                            />
                            <Input onChange={handleInputChange}
                                    type="date"
                                    placeholder="Select date"
                                    value={userInfoObject.expiry}
                                    className={""}
                                    name="expiry"
                                    isRequired={true}
                                    label="Expiry Date"
                            />
                        </form>
                    </div>

                    <div className="btns">
                        <Button size="x-lg" type="borderless" text="Back"/>
                        <Button size="x-lg" type="default" text="Confirm Order"/>
                    </div>
                </div>
                <div className="order-summary">
                    <h4 className="text-md semibold text-gray">Order Summary</h4>
                    <hr />
                    <div className="items">
                        <CartItem name={"Item name"} qty={1} price={850.00}/>
                        <CartItem name={"Item name"} qty={1} price={850.00}/>
                        <CartItem name={"Item name"} qty={1} price={850.00}/>
                    </div>
                    <hr />
                    <div className="pricing">
                        <div className="charges">
                            <div>
                                <h4 className="text-xs medium">Delivery</h4>
                                <h4 className="text-xs medium">Rs. 250</h4>
                            </div>
                            <div>
                                <h4 className="text-xs medium">Discount</h4>
                                <h4 className="text-xs medium">Rs. 0</h4>
                            </div>
                        </div>
                        <hr />
                        <div className="charges">
                            <div>
                                <h4 className="text-xs medium">Total (exc tax)</h4>
                                <h4 className="text-xs medium">Rs. 1650</h4>
                            </div>
                            <div>
                                <h4 className="text-xs medium">Tax</h4>
                                <h4 className="text-xs medium">Rs. 185</h4>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="total">
                        <h4 className="text-md semibold">Order Total</h4>
                        <h4 className="text-md semibold">Rs. 1835</h4>
                    </div>
                </div>
            </main>
        </div>
    );
}