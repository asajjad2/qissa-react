import { useState } from "react";

import google from "./Assets/images/google.svg";
import logo from "./Assets/images/logo.svg";

import Button from "./Assets/Button";

import "./LoginSignup.scss";

export default function LoginSignUp(){
 
    const [isLoginActive,setIsLoginActive] = useState(true);

    const emptyUserObject= {
        name : "",
        email : "",
        password : ""
    }
    const [userInfoObject,setUserInfoObject] = useState(emptyUserObject);

    // const checkNotEmpty = (obj) => {
    //     let arr = [null,undefined,""];
    //     for (var key in obj) {
    //         if (arr.includes(obj[key]))
    //             return false;
    //     }
    //     return true;
    // }

    function handleLoginSignup(){

        {
            setIsLoginActive(!isLoginActive);
            setUserInfoObject(()=>{
                return {
                    ...emptyUserObject
                }
            });
        }
        
    }

    function handleInputChange({name,value}){


        setUserInfoObject((previousValue)=>{

            if(name==="username"){
                return {
                    ...previousValue,
                    name : value
                };
            } else if(name==="email"){
                return {
                    ...previousValue,
                    email : value
                };
            } else if(name==="password"){
                return {
                    ...previousValue,
                    password : value
                };
            }
        })

        
    }




    return (
        <div className="login-signup">

            <div>

                <header>
                    <img src={logo} alt="daastan icon" width={"45px"} height={"45px"}/>
                    <div className="text">
                        <h2 className="capitalize">
                            {
                                isLoginActive?("Welcome back"):("Join Today")
                            }
                        </h2>
                        <p>
                            {
                                isLoginActive?(`Please enter your details.`):(`Sign up in less than 2 minutes.`)
                            }
                        </p>
                    </div>
                </header>

                <form>
                    {
                        isLoginActive?(null):(
                            <div>
                                <input
                                    onChange={e=>handleInputChange(e.target)}
                                    type="text"
                                    placeholder="Enter your name"
                                    value={userInfoObject.name}
                                    className={"text-md normal"}
                                    name="username"
                                    required
                                />
                            </div>
                        )
                    }
                    <div>
                        <input
                            onChange={e=>handleInputChange(e.target)}
                            type="text"
                            placeholder="Enter your email"
                            value={userInfoObject.email}
                            className={"text-md normal"}
                            name="email"
                            required
                        />
                    </div>
                    <div>
                        <input
                            onChange={e=>handleInputChange(e.target)}
                            type="password"
                            placeholder="Enter your password"
                            value={userInfoObject.password}
                            className={"text-md normal"}
                            name="password"
                            required
                        />
                        {
                            isLoginActive?(null):(
                                <h4 className="text-sm medium text-gray">Must be at least 8 characters.</h4>
                            )
                        }
                    </div>
                </form> 

                <main>
        
                    <Button size={"lg"} width={"20rem"} type={"default"} text={isLoginActive?("Sign In"):("Get Started")}/>
                    <Button size={"lg"} width={"20rem"} type={"outlined"} text={isLoginActive?("Sign in with Google"):("Sign up with Google")} leading={google}/> 

                </main>

                {
                    isLoginActive?(
                        <div className="backup text-sm normal text-gray">
                            Don't have an account?
                            <Button size={"md"} type={"borderless"} text={"Sign up"} display={"inline"} color={"#30517D"} width={"auto"} onClick={handleLoginSignup}/> 
                        </div>
                    ) : (
                        <div className="backup text-sm normal text-gray">
                            Already have an account?
                            <Button size={"md"} type={"borderless"} text={"Log in"} display={"inline"} color={"#30517D"} width={"auto"} onClick={handleLoginSignup}/> 
                        </div>
                    )
                }

            
            </div>

        </div>
    );

}