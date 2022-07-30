import "./styles.css";

import HomePage from "./Components/HomePage";
import BookStore from "./Components/BookStore";
import Author from "./Components/Author";
import Careers from "./Components/Careers";
import Team from "./Components/Team";
import SpecialBook from "./Components/SpecialBook";
import Events from "./Components/Events";
import EmailVerification from "./Components/EmailVerification";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import LoginSignup from "./Components/LoginSignup";

export default function App() {
  
  return (

    <div className="App">
      {/* <Button size="x-lg" type="default" text="Button" />
      <Button size="medium" type="outlined" text="medium" />
      <Button size="medium" type="" text="medium" />
      <Button size="wide" type="default" text="Add to Cart" />
      <Button size="wide" type="outlined" text="Add to Cart" />
      <PageSelector totalPages="4" type="numbering" />
      <PageSelector totalPages="2" type="slider" />
      <TagBtn type="default" text="Category" />
      <TagBtn type="active" text="Category" />
      <TeamMemberCard
        name="Syed Ommer Amer"
        title="CEO"
        about="Direct descendent of a literary figure disrupting book publishing space in Pakistan for over a decade. He is a globally acclaimed award winning social entrepreneur who loves discovering new cultures, featuring local stories and spending time with cause-based visionaries."
      />
      <TestimonialCard
        name="Leo Geidt"
        email="leogeidt@gmail.com"
        review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorem unde in id nobis."
      />
      <BlogPost
        imageLink="https://via.placeholder.com/300x220"
        heading="Praesent euismod consequat fringilla"
        details="Sed at semper lorem. Vivamus consequat, nulla eu finibus venenatis, purus nisi pellentesque sapien, sed molestie justo eros eget odio. Aliquam erat volutpat."
      />
      <ServiceCard
        name="Service Name"
        details="Proin eu ornare mauris. Vestibulum eleifend sodales nisl nec sodales."
      />
      <FAQ
        question="This is a sample question to be used in the FAQ"
        answer="Nunc fermentum venenatis sem at tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean pretium, mauris scelerisque sollicitudin congue, dolor nunc ultricies ex, nec congue magna dolor ut sem. Pellentesque nulla ligula, viverra consequat metus a, pharetra bibendum tortor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil iusto enim rem debitis temporibus hic ad voluptatibus in sapiente.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil iusto enim rem debitis temporibus hic ad voluptatibus in sapiente.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil iusto enim rem debitis temporibus hic ad voluptatibus in sapiente.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil iusto enim rem debitis temporibus hic ad voluptatibus in sapiente."
      />
      <EventTemplate
        name="Nam bibendum ex lacinia elit consequat"
        date={new Date()}
        details="Nam bibendum ex lacinia elit consequat Nam bibendum ex lacinia elit consequat"
      />
      <SubscribeSection heading="Subscribe to Daastan's Publish-o-Pedia" subheading="Get the latest and hottest publishing buzz in your buzz every month. Free of cost."/>
      
      <PricingTemplate name="Enterprise plan" details="Our most popular plan." price="500,000" features={["Access to all basic features","Basic reporting and analytics","Up to 10 individual users","20GB individual data each user","Basic chat and email support"]}
      /> */}
      
      {/* <TopStrip text="Check out our most recent publications"/> */}



      <HomePage/>
      <BookStore/>
      <Author authorname={"Dania Khan"}/>
      <Careers />
      <Team />
      <SpecialBook category={"wishlist"}/>
      <SpecialBook category={"Bestselling"}/>
      <Events />
      <EmailVerification email={"olivia@untitledui.com"}/>
      <ForgotPassword/>
      <ResetPassword />
      <LoginSignup />

    </div>
  );
}
