import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./popup.css";

export default function PopupModal() {
  const [displayContent, setDisplayContent] = useState(-1000);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div>
          <button
            onClick={() => {
              setDisplayContent(0);
            }}
            style={{ background: "green", border: "none" }}
          >
            click here
          </button>
        </div>

        <div
          className="popUpBox"
          style={{
            textAlign: "center",
            padding: "15px",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            transform: `translateY(${displayContent}px)`,
          }}
        >
          <button onClick={()=>{setDisplayContent(-1000)}} className="close">
            <IoClose />
          </button>
          <h1>Hello, here I am</h1>
          <p>
            This is Madhubala In publishing and graphic design, Lorem ipsum is
            a placeholder text commonly used to demonstrate the visual form of a
            document or a typeface without relying on meaningful content
          </p>
          <img
            style={{ borderRadius: "20px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpCM-No1CUGHBq7y14FSUH6-WB9eXLklYFTg&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
