import { useState } from "react";

import NavDesktop from "./Assets/NavDesktop";
import BreadCrumbs from "./Assets/BreadCrumbs";
import Footer from "./Assets/Footer";
import FooterLogos from "./Assets/FooterLogos";
import EventTemplate from "./Assets/EventTemplate";
import SubscribeSection from "./Assets/SubscribeSection";
import TagBtn from "./Assets/TagBtn";

import "./Events.scss";
import navLinks from "./Data/NavLinks";
import EventsData from "./Data/Events";

let competetionEventsData = EventsData.filter((event)=>{
    return event.type==="competetion";
})
let bookLaunchEventsData = EventsData.filter((event)=>{
    return event.type==="book-launch";
})

export default function Events(){

    let pathItems = ["Events"];
   

    const [filter,setFilter] = useState("none");

    function handleCompetetionFilter(){
        setFilter("competetion");
    }

    function handleBookLaunchFilter(){
        setFilter("book-launch");
    }

    function handleAllFilter(){
        setFilter("none");
    }

    return (
        <div className="events">
            <NavDesktop navLinks={navLinks}/>

            <div className="ml200">
            <BreadCrumbs  pathItems={pathItems}/>
            </div>

            <main>
                <div className="info">
                    <h2 className="display-md semibold">Upcoming Events</h2>
                    <p className="text-md medium text-gray">Nullam at feugiat lectus. Nunc tempus nulla non eros iaculis, varius sollicitudin turpis ultrices. Pellentesque faucibus nec ex non consequat.</p>
                </div>
                <div className="btns">
                    <TagBtn type={filter==="none"?("active"):"default"} text={"All"} onClick={handleAllFilter}/>
                    <TagBtn type={filter==="competetion"?("active"):"default"} text={"Competitions"} onClick={handleCompetetionFilter}/>
                    <TagBtn type={filter==="book-launch"?("active"):"default"} text={"Book Launches"} onClick={handleBookLaunchFilter}/>
                </div>
                <div className="event-details">
                    {
                        filter==="none"?(
                            EventsData.map((event)=>{
                                return (                            
                                    <EventTemplate name={event.name} date={event.date} details={event.details}/>                            );
                                })
                        ):(
                            filter==="competetion"?(
                                competetionEventsData.map((event)=>{
                                    return (                            
                                        <EventTemplate name={event.name} date={event.date} details={event.details}/>                            );
                                    })
                            ):(
                                bookLaunchEventsData.map((event)=>{
                                    return (                            
                                        <EventTemplate name={event.name} date={event.date} details={event.details}/>                            );
                                    })
                            )
                        )
                        
                    }
                </div>
            </main>

            <footer>
                <SubscribeSection heading="Subscribe to Daastan's Publish-o-Pedia" subheading="Get the latest and hottest publishing buzz in your buzz every month. Free of cost."/>
                <FooterLogos />
                <Footer />
            </footer>


            
        </div>
    );

}