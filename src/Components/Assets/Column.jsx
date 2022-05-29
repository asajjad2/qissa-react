import "./asset-styles.css";

export default function Button(props) {

    let localStyle = {
        width:props.width?props.width:null,
        height:props.height?props.height:null
    }
  return (

    

    <div
      onClick={`window.location=${props.url};`}
      className={`rect-column`}
      style={localStyle}
    >
    </div>
  );
}
