import { useState } from "react";

import resetPass from "./Assets/images/reset-pass.svg";
import mailVerified from "./Assets/images/mail-verified.svg";
import prev from "./Assets/images/prev.svg";

import Button from "./Assets/Button";

import "./ResetPassword.scss";

export default function ResetPassword(){
 
    let pass = {
        password : "",
        confirmPassword : ""
    }
    const [resetComplete,setResetComplete] = useState(false);
    const [passwordObject,setPasswordObject] = useState(pass);

    function handleResetPassword(){
        setResetComplete(true);
    }

    function handlePasswordChange({name,value}){

        setPasswordObject((previousValue)=>{
            if(name==="password"){
                return {
                    password: value,
                    confirmPassword: previousValue.confirmPassword,
                };
            } else if(name==="confirm-password"){
                return {
                    password: previousValue.password,
                    confirmPassword: value,
                };
            }
        })

        
    }




    return (
        <div className="reset-password">

            <div>

                <header>
                    <img src={
                        !resetComplete?(resetPass):(mailVerified)
                    } alt="reset icon" />
                    <div className="text">
                        <h2 className="capitalize">
                            {
                                !resetComplete?("Set new password"):("Password reset")
                            }
                        </h2>
                        <p>
                            {
                                !resetComplete?(`Your new password must be different to previously used passwords.`):(`Your password has been successfully reset. Click below to log in magically.`)
                            }
                        </p>
                    </div>
                </header>

                <main>

                {!resetComplete?(
                        <form>
                            <div>
                                <h4 className="text-sm medium text-gray">Password</h4>
                                <input
                                    onChange={handlePasswordChange}
                                    type="password"
                                    placeholder="Password"
                                    value={pass.password}
                                    className={"text-md normal"}
                                    name={"password"}
                                />
                            </div>
                            <div>
                                <h4 className="text-sm medium text-gray">Confirm Password</h4>
                                <input
                                    onChange={handlePasswordChange}
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={pass.confirmPassword}
                                    className={"text-md normal"}
                                    name={"confirm-password"}
                                />
                            </div>
                        </form>
                    ):null
                }
                    
                    <Button size={"lg"} width={"20rem"} type={"default"} text={!resetComplete?("Reset password"):("Continue")} onClick={handleResetPassword}/>

                </main>

                <Button size={"lg"} type={"borderless"} text={"Back to login"} color={"#668585"} leading={prev} imgWidth={"11.67px"}/> 


            
            </div>

        </div>
    );

}