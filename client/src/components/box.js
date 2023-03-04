import * as React from 'react';
import { temp } from './webcam';
import { useEffect, useRef } from "react";
import "../App.css";

function Box() {
  const canvasRef = useRef();
 
  const drawRectangle = (e) => {
    var coords = e.split(",");
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle = "green";
    context.lineWidth = 2;
    context.clearRect(0, 0, 500, 500)
    context.strokeRect(parseInt(coords[0])/4, parseInt(coords[1])/10, parseInt(coords[2])/5, parseInt(coords[3])/5);
    context.fillStyle = "white";
    context.fillRect(parseInt(coords[0])/4 + (parseInt(coords[2])/5)+10, parseInt(coords[1])/10, parseInt(coords[2])/5, parseInt(coords[3])/5);
    if (parseInt(coords[1]) != 0){
      context.fillStyle = "red";
      context.fillText('Ziki Zheng', parseInt(coords[0])/4 + parseInt(coords[2])/4, (parseInt(coords[2])/5))
    }
    
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
  <div className="txtbox"/>
</div>
  );
}

export default Box;