import "./asset-styles.css";
import Button from "./Button";

export default function PricingTemplate({ name, details, price, features }) {

  const featuresListItems = features.map((feature)=>{
    return(
      <li>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#EBEFFF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#779EED"/>
        </svg>
        <div>{feature}</div>
      </li>
    );
  })

  return (
    <div className="pricing-template">
      <div className="info">
          <div className="name text-xl semibold text-primary-blue">{name}</div>
          <div className="price display-md semibold">Rs {price}/m</div>
          <div className="details text-md normal text-gray">{details}</div>
      </div>
      <ul className="features">
        <li>
          <div>{featuresListItems}</div>
        </li>
      </ul>
      <div className="footer">
        <Button type="default" size="wide" text={`Get Started`} width="282px" height="48px"/>
      </div>
    </div>
  );
}
