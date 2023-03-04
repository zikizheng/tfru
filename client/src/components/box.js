import { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import "../App.css";
import dataArray from "./webcam.js";
const coord = '0 0 0 0'

function Box() {
  const canvasRef = useRef();

  const drawRectangle = () => {
    if ((coord.length) > 0){
    const b = coord.split(' ').map(Number);
  
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 2;
    if (b[2] > 0) { 
    context.strokeRect(b[0], b[1], b[2], b[3]);
    }
    }
  };

  useEffect(() => {
    drawRectangle();
  }, []);

  return (
<div>
  <canvas className="box"
    ref={canvasRef}
    style={{
      width: "350px",
      height: "300px",
    }}
  />
</div>
  );
}

export default Box;