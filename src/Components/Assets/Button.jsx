import "./asset-styles.css";

export default function Button(props) {


  return (
    <div
      onClick={`window.location=${props.url};`}
      className={`button text-medium-sm ${props.size} ${props.type}`}
      style={props.width?{width:props.width}:null || props.radius?{borderRadius:props.radius}:null}
    >
      {props.text}
    </div>
  );
}
