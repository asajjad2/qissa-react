import "./asset-styles.css";

export default function WideButton(props) {
  return (
    <div
      onClick={`window.location=${props.url};`}
      className={`wide-button ${props.type}`}
    >
      {props.text}
    </div>
  );
}
