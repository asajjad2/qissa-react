import "./styles.css";
import Button from "./Components/Assets/Button";
import PageSelector from "./Components/Assets/PageSelector";
import TagBtn from "./Components/Assets/TagBtn";
import TeamMemberCard from "./Components/Assets/TeamMemberCard";
import TestimonialCard from "./Components/Assets/TestimonialCard";
import BlogPost from "./Components/Assets/BlogPost";
import ServiceCard from "./Components/Assets/ServiceCard";
import FAQ from "./Components/Assets/FAQ";
import EventTemplate from "./Components/Assets/EventTemplate";
export default function App() {
  return (
    <div className="App">
      <Button size="x-lg" type="default" text="Button" />
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
    </div>
  );
}
