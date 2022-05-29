import "./asset-styles.css";

export default function Button(props) {

  let localStyle = {
    width: props.width?props.width:null,
    height: props.height?props.height:null,
    borderRadius: props.radius?props.radius:null
  }


  return (
    <div
      onClick={`window.location=${props.url};`}
      className={`button text-medium-sm ${props.size} ${props.type}`}
      style={localStyle}
    >
      {props.text}
    </div>
  );
}
