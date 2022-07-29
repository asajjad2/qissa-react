import { useState} from "react";

import ReactInputVerificationCode from 'react-input-verification-code';

import mailVerification from "./Assets/images/mail-verification.svg";
import mailVerified from "./Assets/images/mail-verified.svg";
import prev from "./Assets/images/prev.svg";

import Button from "./Assets/Button";

import "./EmailVerification.scss";

export default function EmailVerification({email}){
 
    const [code, setCode] = useState("");

    const [codeEntered,setCodeEntered] = useState(false);
    const [isVerified,setIsVerified] = useState(false); 

    function handleEmailVerification(){
        if(!isVerified){
            if(!codeEntered){
                setCodeEntered(true);
            } else if(codeEntered){
                setIsVerified(true);
            }
        }
    }



    return (
        <div className="email-verification">

            <div>

                <header>
                    <img src={
                        isVerified?(mailVerified):(mailVerification)
                    } alt="verification icon" />
                    <div className="text">
                        <h2 className="capitalize">
                            {
                                isVerified?("Email verified"):("Check your email")
                            }
                        </h2>
                        <p>
                            {
                                !isVerified?(`We sent a verification link to ${email}`):("Your password has been successfully reset. Click below to log in magically.")
                            }
                        </p>
                    </div>
                </header>

                <main>

                    {!codeEntered?(null):(isVerified?(null):(
                        <div className="verification-code">
                            <ReactInputVerificationCode
                                placeholder={null}
                                length={4}
                                value={code}
                                className={"display-lg medium input"}
                                onChange={(newValue) => {
                                    setCode(newValue);
                                    console.log(newValue);
                                }}
                            />
                                
                        </div>
                    ))}
                    <Button size={"lg"} width={"20em"} type={"default"} text={!codeEntered?("Enter code manually"):(!isVerified?("Verify email"):("Continue"))} onClick={handleEmailVerification}/>

                </main>


                {
                    codeEntered?(
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