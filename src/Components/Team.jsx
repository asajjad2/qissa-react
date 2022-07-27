import NavDesktop from "./Assets/NavDesktop";
import BreadCrumbs from "./Assets/BreadCrumbs";
import Button from "./Assets/Button";
import TeamMemberCard from "./Assets/TeamMemberCard";
import TeamMemberCard2 from "./Assets/TeamMemberCard2";
import Footer from "./Assets/Footer";

import "./Team.scss";
import navLinks from "./Data/NavLinks";


export default function Careers(){

  let pathItems = ["Team"];


  return (
    <div className="team">

        <NavDesktop navLinks={navLinks}/>

        <div className="ml200">
          <BreadCrumbs  pathItems={pathItems}/>
        </div>

        <div className="info">
          <h2 className="display-md semibold">Meet Our Team</h2>
          <p className="text-md medium text-gray">Nullam at feugiat lectus. Nunc tempus nulla non eros iaculis, varius sollicitudin turpis ultrices. Pellentesque faucibus nec ex non consequat.</p>
          <div className="btns">
            <Button size={"medium"} type={"default"} text={"About us"} />
            <Button size={"medium"} type={"secondary"} text={"careers"} />
          </div>
        </div>

        <main className="main-team">

          <TeamMemberCard
            name="Syed Ommer Amer"
            title="CEO"
            about="Direct descendent of a literary figure disrupting book publishing space in Pakistan for over a decade. He is a globally acclaimed award winning social entrepreneur who loves discovering new cultures, featuring local stories and spending time with cause-based visionaries."
          />
          <TeamMemberCard
            name="Syed Ommer Amer"
            title="CEO"
            about="Direct descendent of a literary figure disrupting book publishing space in Pakistan for over a decade. He is a globally acclaimed award winning social entrepreneur who loves discovering new cultures, featuring local stories and spending time with cause-based visionaries."
          />
          <TeamMemberCard
            name="Syed Ommer Amer"
            title="CEO"
            about="Direct descendent of a literary figure disrupting book publishing space in Pakistan for over a decade. He is a globally acclaimed award winning social entrepreneur who loves discovering new cultures, featuring local stories and spending time with cause-based visionaries."
          />

        </main>

        <main className="others-team">

          <TeamMemberCard2 name="Syed Ommer Amer"
            title="CEO"
            about="Aenean aliquam odio sed quam commodo"
          />
          <TeamMemberCard2 name="Syed Ommer Amer"
            title="CEO"
            about="Aenean aliquam odio sed quam commodo"
          />
          <TeamMemberCard2 name="Syed Ommer Amer"
            title="CEO"
            about="Aenean aliquam odio sed quam commodo"
          />

        </main>

         
        <Footer />

    </div>
  )
}
