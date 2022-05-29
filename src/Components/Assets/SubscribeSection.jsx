import "./asset-styles.css";
import Button from "./Button";

export default function SubscribeSection({ heading, subheading}) {
  return (
    <div className="subscribe-section">
      <div>
          <div className="text">
              <h3>{heading}</h3>
              <p>{subheading}</p>
          </div>
          <div className="input">
              <input type="text" placeholder="Enter your email to subscribe"/>
              <Button type="default" size="medium" text="Subscribe"/>
          </div>
      </div>
    </div>
  );
}
