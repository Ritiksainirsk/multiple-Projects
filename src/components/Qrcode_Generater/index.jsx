import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QrcodeGenerater() {

    const [qrValue , setQrValue] = useState('')
    const [input,setInput] = useState('')

    const HandleGenerateQrCode = ()=>{
        setQrValue(input)
        setInput("")
    }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p style={{ fontWeight: "600", fontSize: "25px" }}>QrCode Generater</p>
        <div>
          <input value={input} type="text" placeholder="Enter value" onChange={(e)=> setInput(e.target.value)}/>
          <button onClick={()=>HandleGenerateQrCode()}>Generate</button>
        </div>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "30%" }}
          value={qrValue}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}
