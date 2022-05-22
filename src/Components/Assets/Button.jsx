import "./asset-styles.css";

export default function Button(props) {
  return (
    <div
      onClick={`window.location=${props.url};`}
      className={`button ${props.size} ${props.type}`}
    >
      {props.text}
    </div>
  );
}
