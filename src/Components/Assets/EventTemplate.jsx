import "./asset-styles.css";

import Button from "./Button";

export default function EventTemplate({
  name,
  date,
  details,
  imageLink,
  btnLink,
}) {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="event-template">
      <div className="vr"></div>
      <section>
        <div className="content">
          <div className="date">
            {months[date.getMonth()]} <br />
            <span className="date-num">
              {date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}{" "}
            </span>
            <br />
            {days[date.getDay()]}
          </div>
          <img src={imageLink} alt="" />
          <div className="text">
            <h3 className="text-xl semibold">{name}</h3>
            <p className="text-md normal">{details}</p>
          </div>
        </div>
      </section>
      <Button size="medium" type="outlined" text="Learn More"></Button>
    </div>
  );
}
