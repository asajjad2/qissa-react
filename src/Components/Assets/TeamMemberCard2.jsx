import facebookIcon from "./images/facebook2.svg";
import linkedinIcon from "./images/linkedin-clr.svg";
import instagramIcon from "./images/instagram.svg";

export default function TeamMemberCard({
  title,
  name,
  about,
  imageLink,
  linkedin,
  instagram,
  facebook,
}) {
  return (
    <div className="team-others-card">
      <img src={imageLink} alt={"team-member's identification"} />
      <div className="info gap-16">

        <div className="text">
            <div>
                <h2 className="text-lg medium text-white">{name}</h2>
                <h1 className="text-md medium text-gray">{title}</h1>
            </div>
            <p className="about text-md normal text-gray">{about}</p>
        </div>

        <div className="socials gap-16">
          <a href={linkedin}>
            <img src={linkedinIcon} alt="linkedin Icon" />
          </a>
          <a href={instagram}>
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>
          <a href={facebook}>
            <img src={facebookIcon} alt="Facebook Icon" />
          </a>
        </div>

      </div>
    </div>
  );
}
