import { useEffect, useRef } from "react";
import "../App.css";

function Box() {
  const canvasRef = useRef();

  const drawRectangle = () => {
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.strokeRect(50, 30, 110, 90);
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