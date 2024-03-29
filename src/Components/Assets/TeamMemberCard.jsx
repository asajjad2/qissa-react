import "./asset-styles.css";

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
    <div className="team-main-card">
      <img src={imageLink} alt={"team-member's identification"} />
      <div className="info gap-16">
        <div className="member-info">
          <h2 className="title">{title}</h2>
          <h1 className="name">{name}</h1>
          <p className="about">{about}</p>
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
        <div className="book-meeting gap-16">
          <h3>Book a meeting with me</h3>
          <div className="icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 10C5 9.83424 5.06585 9.67527 5.18306 9.55806C5.30027 9.44085 5.45924 9.375 5.625 9.375H12.8663L10.1825 6.6925C10.1244 6.63439 10.0783 6.56541 10.0468 6.48948C10.0154 6.41356 9.99921 6.33218 9.99921 6.25C9.99921 6.16782 10.0154 6.08645 10.0468 6.01052C10.0783 5.9346 10.1244 5.86561 10.1825 5.8075C10.2406 5.74939 10.3096 5.7033 10.3855 5.67185C10.4614 5.6404 10.5428 5.62421 10.625 5.62421C10.7072 5.62421 10.7886 5.6404 10.8645 5.67185C10.9404 5.7033 11.0094 5.74939 11.0675 5.8075L14.8175 9.5575C14.8757 9.61556 14.9219 9.68453 14.9534 9.76046C14.9849 9.83639 15.0011 9.91779 15.0011 10C15.0011 10.0822 14.9849 10.1636 14.9534 10.2395C14.9219 10.3155 14.8757 10.3844 14.8175 10.4425L11.0675 14.1925C11.0094 14.2506 10.9404 14.2967 10.8645 14.3282C10.7886 14.3596 10.7072 14.3758 10.625 14.3758C10.5428 14.3758 10.4614 14.3596 10.3855 14.3282C10.3096 14.2967 10.2406 14.2506 10.1825 14.1925C10.0651 14.0751 9.99921 13.916 9.99921 13.75C9.99921 13.6678 10.0154 13.5864 10.0468 13.5105C10.0783 13.4346 10.1244 13.3656 10.1825 13.3075L12.8663 10.625H5.625C5.45924 10.625 5.30027 10.5592 5.18306 10.4419C5.06585 10.3247 5 10.1658 5 10Z"
                fill="#FEFEFE"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
