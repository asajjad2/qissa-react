import React, { useState } from "react";

export default function FAQ({ question, answer }) {
  const [collapsed, setCollapsed] = useState(true);

  function handleExpand() {
    setCollapsed(false);
  }

  function handleCollapsed() {
    setCollapsed(true);
  }

  return (
    <div className="FAQ">
      <div
        className="question gap-16 text-xl semibold"
        onClick={collapsed ? handleExpand : handleCollapsed}
      >
        {collapsed ? (
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="9" width="20" height="2" fill="#094977" />
            <rect
              x="9"
              y="20"
              width="20"
              height="2"
              transform="rotate(-90 9 20)"
              fill="#094977"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="2"
            viewBox="0 0 20 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="2" fill="#094977" />
          </svg>
        )}
        <p>{question}</p>
      </div>
      <div className={`answer text-md normal text-gray ${collapsed ? "hide" : ""}`}>
        <div className="rect"></div>

        <p>{answer}</p>
      </div>
    </div>
  );
}
