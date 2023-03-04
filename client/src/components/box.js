import * as React from 'react';
import { temp } from './webcam';
import { useEffect, useRef } from "react";
import "../App.css";

function Box() {
  const canvasRef = useRef();
 
  const drawRectangle = (e) => {
    var coords = e.split(",");
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.clearRect(0, 0, 500, 500)
    context.strokeRect(parseInt(coords[0])/4, parseInt(coords[1])/10, parseInt(coords[2])/10, parseInt(coords[3])/10);
    console.log(parseInt(coords[0])+ parseInt(coords[1])+ parseInt(coords[2]), parseInt(coords[3]));
  };

  useEffect(() => {setInterval(()=>{
    drawRectangle(temp);
  },1)
}, []);

  return (
<div>
  <canvas
    ref={canvasRef}
    style={{
      width: 1280,
      height: 960,
    }}
  />
</div>
  );
}

export default Box;