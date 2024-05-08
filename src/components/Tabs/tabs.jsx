import React, { useState } from "react";
import "./tabs.css";

export default function Tabs() {
  const [currentIndex, setcurrentIndex] = useState();

  const tabsArray = [
    {
      label: "Tab 1",
      content: "Madhubala ji",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLNkqFewCr_BsEiClYzI29kX35iS0-MJxqLp6ZYBw_MHyWNRTG6FYvQEAe-Ryl0-B-N0&usqp=CAU"
    },
    {
      label: "Tab 2",
      content: "Ratan tata ji",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_miz9nhrr2VvD8ykGLteJ6_r3i4oweg8mA&usqp=CAU"

    },
    {
      label: "Tab 3",
      content: "Shahrukh khan",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcmZrLFrhIetsiLrZd5grRpJk9DBLPxPLTEZxyZfoa6CsXp_DLw8ha0XQxptFSQ3kMaM&usqp=CAU"
    },
  ];

  return (
    <>
      <div className="wrapper">
        <div className="header">
          {tabsArray.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setcurrentIndex(index);
                }}
                className={`tab-item ${currentIndex === index ? 'active' : ' '}`}
              >
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
        <div className="content">
          {tabsArray[currentIndex] &&
           <>
           <h2 className="title">{tabsArray[currentIndex].content}</h2>
           <img src={tabsArray[currentIndex].img} alt="" className="picture" />
           </>
           }
        </div>
      </div>
    </>
  );
}
