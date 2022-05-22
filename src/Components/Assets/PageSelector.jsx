import { useState } from "react";

export default function PageSelector(props) {
  let numArray = [];
  for (let i = 0; i < props.totalPages; i++) {
    numArray.push(i);
  }

  const [activePageNum, setActivePageNum] = useState(1);

  function handleNumClick(event) {
    setActivePageNum(Number(event.target.innerHTML));
  }

  function handleSliderBtnClick(event) {
    setActivePageNum(Number(event.target.id));
  }

  function handlePrevClick() {
    setActivePageNum((currentPgNum) => {
      if (currentPgNum === 1) return currentPgNum;
      else return currentPgNum - 1;
    });
  }
  function handleNextClick() {
    setActivePageNum((currentPgNum) => {
      console.log(props.totalPages);
      if (currentPgNum === Number(props.totalPages)) return currentPgNum;
      else return currentPgNum + 1;
    });
  }

  const PgNumButtons = numArray.map((index) => {
    console.log(activePageNum === index + 1);
    return (
      <div
        className={`pg-num ${activePageNum === index + 1 ? "active" : "m"}`}
        style={{
          left: index * 50,
        }}
        onClick={handleNumClick}
      >
        {index + 1}
      </div>
    );
  });

  const SliderButtons = numArray.map((index) => {
    console.log(activePageNum === index + 1);
    return (
      <div
        className={` ${
          activePageNum === index + 1 ? "slider-btn-active" : "slider-btn"
        }`}
        id={index + 1}
        onClick={handleSliderBtnClick}
      ></div>
    );
  });

  //builds a page selector based on the "type" prop

  return (
    <div className="page-selector">
      {props.type === "slider" ? (
        <div className="slider">
          <div className="prev" onClick={handlePrevClick}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 29.6667C23.1 29.6667 29.6667 23.1 29.6667 15C29.6667 6.89999 23.1 0.333324 15 0.333324C6.90002 0.333324 0.333355 6.89999 0.333355 15C0.333355 23.1 6.90002 29.6667 15 29.6667ZM17.9427 19.3907C18.1856 19.6421 18.32 19.9789 18.3169 20.3285C18.3139 20.6781 18.1737 21.0125 17.9264 21.2597C17.6792 21.507 17.3448 21.6472 16.9952 21.6502C16.6456 21.6533 16.3088 21.5189 16.0574 21.276L10.724 15.9427C10.4741 15.6926 10.3336 15.3535 10.3336 15C10.3336 14.6464 10.4741 14.3074 10.724 14.0573L16.0574 8.72399C16.3088 8.48111 16.6456 8.34672 16.9952 8.34976C17.3448 8.3528 17.6792 8.49302 17.9264 8.74023C18.1737 8.98744 18.3139 9.32186 18.3169 9.67146C18.32 10.0211 18.1856 10.3579 17.9427 10.6093L13.552 15L17.9427 19.3907Z"
              />
            </svg>
          </div>
          <div className="slider-btns">{SliderButtons}</div>
          <div className="next" onClick={handleNextClick}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 0.333344C6.89998 0.333344 0.333313 6.90001 0.333313 15C0.333313 23.1 6.89998 29.6667 15 29.6667C23.1 29.6667 29.6666 23.1 29.6666 15C29.6666 6.90001 23.1 0.333344 15 0.333344ZM12.0573 10.6093C11.8144 10.3579 11.68 10.0211 11.6831 9.67148C11.6861 9.32188 11.8263 8.98746 12.0736 8.74025C12.3208 8.49304 12.6552 8.35282 13.0048 8.34978C13.3544 8.34674 13.6912 8.48113 13.9426 8.72401L19.276 14.0573C19.5259 14.3074 19.6664 14.6465 19.6664 15C19.6664 15.3536 19.5259 15.6926 19.276 15.9427L13.9426 21.276C13.6912 21.5189 13.3544 21.6533 13.0048 21.6502C12.6552 21.6472 12.3208 21.507 12.0736 21.2598C11.8263 21.0126 11.6861 20.6781 11.6831 20.3285C11.68 19.9789 11.8144 19.6421 12.0573 19.3907L16.448 15L12.0573 10.6093Z"
              />
            </svg>
          </div>
        </div>
      ) : props.type === "numbering" ? (
        <div className="page-numbering">
          <div className="prev" onClick={handlePrevClick}>
            Previous
          </div>
          {PgNumButtons}
          <div className="next" onClick={handleNextClick}>
            Next
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
