import "./asset-styles.css";
import Button from "./Button";

export default function AuthorSubscribeSection() {
  return (
    <div className="author-subscribe-section">
      <div>
          <div className="text">
              <h3 className="text-xl semibold text-dark-blue">Sign Up for Authors Newsletter</h3>
              <p className="text-md medium text-gray">Praesent euismod sollicitudin pellentesque. Cras at ex convallis, suscipit metus.</p>
          </div>
          <form className="input">
              <input type="text" placeholder="Enter your email to subscribe"/>
              <Button type="default" size="x-lg" width="382px" text="Subscribe"/>
          </form>
      </div>
    </div>
  );
}
