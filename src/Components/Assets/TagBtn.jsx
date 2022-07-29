import "./asset-styles.css";

export default function TagBtn(props) {
  return <div className={`tag-btn ${props.type}`} onClick={props.onClick}>{props.text}</div>;
}
