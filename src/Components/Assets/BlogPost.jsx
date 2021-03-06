import "./asset-styles.css";

export default function BlogPost({ imageLink, heading, details }) {
  return (
    <div className="blog-post gap-16">
      <img src={imageLink} alt="" />
      <div className="content">
        <h3 className="text-xl semibold">{heading}</h3>
        <p className="text-xs medium">{details}</p>
      </div>
    </div>
  );
}
