import "./asset-styles.css";
import LearnMoreTag from "./LearnMoreTag";

export default function ServiceCard({ imageLink, name, details, url }) {
  return (
    <div className="service-card">
      <div className="main">
        <img src={imageLink} alt="" />
        <div className="text">
          <h3 className="name">{name}</h3>
          <p className="details">{details}</p>
        </div>
      </div>
      <LearnMoreTag url={url} />
    </div>
  );
}