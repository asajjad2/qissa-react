import NavDesktop from "./Assets/NavDesktop";
import BreadCrumbs from "./Assets/BreadCrumbs";
import Button from "./Assets/Button";
import Footer from "./Assets/Footer";

import navLinks from "./Data/NavLinks";

import next from "./Assets/images/next.svg";

import "./Contact.scss";

let pathItems = ["Contact"];


export default function Contact(){



    return (
        <div className="contact">

            <header>

                <NavDesktop navLinks={navLinks}/>
                
                <div className="ml200">
                    <BreadCrumbs  pathItems={pathItems}/>
                </div>

            </header>

            <main>   

                <h1 className="display-sm semibold">Have a Query?</h1>             
                <section>
                    <form action="">

                        <div className="inputs">
                            <div>
                                <h4 className="text-sm medium text-gray">Name *</h4>
                                <input
                                    // onChange={e=>handleInputChange(e.target)}
                                    type="text"
                                    placeholder="Enter your name"
                                    // value={userInfoObject.password}
                                    className={"text-md normal"}
                                    name="name"
                                    required
                                />
                            </div>

                            <div>
                                <h4 className="text-sm medium text-gray">Email *</h4>
                                <input
                                    // onChange={e=>handleInputChange(e.target)}
                                    type="text"
                                    placeholder="Enter your email"
                                    // value={userInfoObject.password}
                                    className={"text-md normal"}
                                    name="email"
                                    required
                                />
                            </div>

                            <div>
                                <h4 className="text-sm medium text-gray">Phone Number</h4>
                                <input
                                    // onChange={e=>handleInputChange(e.target)}
                                    type="text"
                                    placeholder="Enter your phone number"
                                    // value={userInfoObject.password}
                                    className={"text-md normal"}
                                    name="phone"
                                    required
                                />
                            </div>

                            <div>
                                <h4 className="text-sm medium text-gray">Message</h4>
                                <textarea
                                    // onChange={e=>handleInputChange(e.target)}
                                    type="text"
                                    placeholder="Enter your message..."
                                    // value={userInfoObject.password}
                                    className={"text-md normal message"}
                                    name="name"
                                    required
                                />
                            </div>
                        </div>
                        

                        <Button size={"x-lg"} type={"default"} text={"Submit"}/>

                    </form>
                    <div className="get-in-touch">
                        <div className="text">

                            <h2 className="display-xs semibold">
                                Get in Touch
                            </h2>

                            <p className="text-md medium text-gray">
                            Sed egestas vestibulum felis, eu facilisis mi malesuada lacinia. Proin fermentum massa lorem, sit amet pharetra orci scelerisque id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>

                        </div>
                        <Button size={"md"} type={"outlined"} text={"View Frequently Asked Questions"} trailing={next} width={"286px"}/>
                    </div>
                </section>

            </main>

            <footer>
                <Footer/>
            </footer>

        </div>
    );

}