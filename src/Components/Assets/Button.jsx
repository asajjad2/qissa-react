import "./asset-styles.css";

export default function Button(props) {

  let localStyle = {
    width: props.width?props.width:null,
    height: props.height?props.height:null,
    borderRadius: props.radius?props.radius:null,
    color : props.color?props.color:null,
    display : props.display?props.display:null
  }


  return (
    <div
      className={`button text-sm medium ${props.size} ${props.type}`}
      style={localStyle}
      onClick = {props.onClick}
    >
      {props.leading?(<img src={props.leading} alt={"leading icon"} width={props.imgWidth} height={props.imageHeight}/>):null}
      {props.text}
      {props.trailing?(<img src={props.trailing} alt={"trailing icon"}/>):null}
    </div>
  );
}
