
import NavDesktop from "./Assets/NavDesktop";
import Button from "./Assets/Button";
import ServiceCard from "./Assets/ServiceCard";
import BlogPost from "./Assets/BlogPost";
import FAQ from "./Assets/FAQ";
import Column from "./Assets/Column";
import EventTemplate from "./Assets/EventTemplate";
import LearnMoreTag from "./Assets/LearnMoreTag";
import PricingTemplate from "./Assets/PricingTemplate";
import SubscribeSection from "./Assets/SubscribeSection";
import StatsCard from "./Assets/StatsCard";
import FooterLogos from "./Assets/FooterLogos";
import Footer from "./Assets/Footer";

import "./HomePage.scss";

import printer from "./Assets/images/printer.svg";
import pen from "./Assets/images/pen.svg";
import graphicdesign from "./Assets/images/graphic-design.svg";
import translate from "./Assets/images/translate.svg";
import navLinks from "./Data/NavLinks";
import stats from "./Data/Stats";

export default function HomePage() {  


  return (
    <div className="home-page">

      <div className="statistics-card">
        <StatsCard stats={stats}/>  
      </div>


      <header>

        <NavDesktop navLinks={navLinks}/>
        <div className="get-published">
          <div className="text">
            <div className="heading display-lg semibold text-dark-blue">Publish Locally, Sell Globally!</div>
            <div className="sub-heading text-xl medium">Experience the hassle-free book publishing from the comfort of <br /> your home or explore fresh local literature.</div>
          </div>
          <div className="buttons">
            <Button text="Get Published" size="x-lg" type="default"/>
            <Button text="Buy Books" size="x-lg" type="secondary"/>
          </div>
        </div>

      </header>


      <main>

        <section className="about">
          <div className="display-md semibold text-dark-blue">Daastan is a one stop shop for all publishing needs</div>
          <div className="display-xs medium text-gray">Experience hassle-free customized book publishing solutions from the comfort of your home.</div>
        </section>

        <section className="service-cards">
          <div className="cards">
            <ServiceCard
              name="Printing"
              details="Multiple options and print runs which fit your budget."
              imageLink={printer}
            />
            <ServiceCard
              name="Designing"
              details="Book covers, illustrations or posters. We do it all."
              imageLink={graphicdesign}
            />
            <ServiceCard
              name="Editing"
              details="We find and fix errors in manuscripts, you can't see."
              imageLink={pen}
            />
            <ServiceCard
              name="Translation"
              details="Consider it done. We deal in local languages of Pakistan."
              imageLink={translate}
            />
          </div>
          <Button size="medium" type="outlined" text="view all services" radius="2px"/>
        </section>

        <section className="blog">
          <div className="headings">
            <h2 className="display-md semibold">Our Stories</h2>
            <p className="text-md medium text-gray">Read how Daastan has turned dreams to reality for authors of all ages.</p>
          </div>

          <div className="blog-posts">
            <BlogPost 
              imageLink="https://via.placeholder.com/300x220"
              heading="Youngest Published Fantasy Author" details="Ms. Zenia Umair, aged 12 wrote a 40,000 word novel and created a fantasy world of her own."/>
            <BlogPost               
              imageLink="https://via.placeholder.com/300x220"
              heading="Best Selling Author in Adventure Genre" details="Mr. Niddal Bin Tahir, aged 30 is an eminent media professional who has produced plays, documentaries and commercials."/>
            <BlogPost               
              imageLink="https://via.placeholder.com/300x220"
              heading="A Century’s Legacy Preserved" details="Ms. Muneera Qureshi, aged 71 founded Margalla Grammar School – an institute that has trained ~0.5 Million students to date."/>
          </div>
        </section>


        <section className="FAQs">
          <div className="headings">
            <h2 className="display-md semibold">Frequently Asked Questions</h2>
            <p className="text-md medium text-gray">Questions which every author asks</p>
          </div>

          <div className="FAQ-posts">
            <FAQ
              question="What kind of books do you publish?"
            />
            <FAQ
              question="Do you publish books on Amazon?"
              answer="No, we do not publish books on Amazon. However, upon author request, we can publish their books on Amazon, against a nominal fee."
            />
            <FAQ
              question="How much does it cost to publish a book?"
            />
            <FAQ
              question="What do I need to publish a book in Pakistan?"
            />
            <FAQ
              question="What book publishing services do you offer?"
            />
          </div>
        </section>

        <section className="yt">
          <div className="text text-md medium text gray">Didn’t find what you were looking for? Check out 500 most frequently asked <br /> questions related to book publishing in this playlist on our <span className="text-dark-blue" onClick={`window.location=#;`}>Youtube channel</span>.</div>
          <div className="cols">
            <Column width="232px" height="390px"/>
            <Column width="232px" height="390px"/>
            <Column width="232px" height="390px"/>
            <Column width="232px" height="390px"/>
          </div>
        </section>

        <section className="events">
          <div className="headings">
            <h2 className="display-md semibold">Upcoming Events</h2>
            <p className="text-md medium text-gray">Nullam at feugiat lectus. Nunc tempus nulla non eros iaculis, varius sollicitudin  <br /> turpis ultrices. Pellentesque faucibus nec ex non consequat.</p>
          </div>
          <div className="event-posts">
            <EventTemplate
              name="Nam bibendum ex lacinia elit consequat"
              date={new Date()}
              details="Nam bibendum ex lacinia elit consequat Nam bibendum ex lacinia elit consequat"
            />
            <hr />
            <EventTemplate
              name="Nam bibendum ex lacinia elit consequat"
              date={new Date()}
              details="Nam bibendum ex lacinia elit consequat Nam bibendum ex lacinia elit consequat"
            />
            <hr />
            <EventTemplate
              name="Nam bibendum ex lacinia elit consequat"
              date={new Date()}
              details="Nam bibendum ex lacinia elit consequat Nam bibendum ex lacinia elit consequat"
            />
          </div>
          <div className="centered">
            <LearnMoreTag text="View All Events" />
          </div>
        </section>

        <section className="pricing">
          <div className="headings">
            <h2 className="display-md semibold">Your story deserves to be published</h2>
            <p className="text-md medium text-gray">This is one book publishing package that you need. Trust Daastan with your <br /> work because we care.</p>
          </div>
          <div className="pricing-plans">
            <PricingTemplate name="Basic plan" details="Our most popular plan." price="500,000" features={["Feature 1","Feature 2","Feature 3","Feature 4","Feature 5"]}/>
            <PricingTemplate name="Business plan" details="Our most popular plan." price="500,000" features={["Feature 1","Feature 2","Feature 3","Feature 4","Feature 5"]}/>
            <PricingTemplate name="Enterprise plan" details="Our most popular plan." price="500,000" features={["Feature 1","Feature 2","Feature 3","Feature 4","Feature 5"]}/>
          </div>
        </section>

        <section className="subscribe">
          <SubscribeSection heading="Subscribe to Daastan's Publish-o-Pedia" subheading="Get the latest and hottest publishing buzz in your buzz every month. Free of cost."/>
        </section>

        <footer>
          <FooterLogos />
          <Footer/>
        </footer>

      </main>

    </div>
  );
}
