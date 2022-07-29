import { useState } from "react";

import resetPass from "./Assets/images/reset-pass.svg";
import mailVerification from "./Assets/images/mail-verification.svg";
import prev from "./Assets/images/prev.svg";

import Button from "./Assets/Button";

import "./ForgotPassword.scss";

export default function ForgotPassword(){
 
    const [linkSent,setLinkSent] = useState(false);
    const [email,setEmail] = useState("");

    function handleSendEmailLink(e){

        e.preventDefault();
        // console.log(email);

        if(!linkSent&&email){
            setLinkSent(true);
        }
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
      }


    return (
        <div className="forgot-password">

            <div>

                <header>
                    <img src={
                        !linkSent?(resetPass):(mailVerification)
                    } alt="verification icon" />
                    <div className="text">
                        <h2 className="capitalize">
                            {
                                !linkSent?("Forgot password?"):("Check your email")
                            }
                        </h2>
                        <p>
                            {
                                !linkSent?(`No worries, we'll send you reset instructions.`):(`We sent a password reset link to ${email}`)
                            }
                        </p>
                    </div>
                </header>

                <main>

                    {!linkSent?(
                        <form>
                            <h4 className="text-sm medium text-gray">Email</h4>
                            <input
                                onChange={handleEmailChange}
                                type="text"
                                placeholder="Enter your email"
                                value={email}
                                className={"text-md normal"}
                            />
                        </form>
                    ):null}
                    <Button size={"lg"} width={"20rem"} type={"default"} text={!linkSent?("Reset password"):("Open email app")} onClick={handleSendEmailLink}/>

                </main>


                {
                    linkSent?(
                        <div className="resend text-sm normal text-gray">
                            Didn't receive the email? 
                            <Button size={"md"} type={"borderless"} text={"Click to resend"} display={"inline"} color={"#30517D"} width={"110px"}/> </div>
                    ) : null
                }

                <Button size={"lg"} type={"borderless"} text={"Back to login"} color={"#668585"} leading={prev} imgWidth={"11.67px"}/> 


            
            </div>

        </div>
    );

}