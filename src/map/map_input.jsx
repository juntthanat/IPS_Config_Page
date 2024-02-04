import { useEffect, useRef, useState } from "react";
import "./map_input.css";
import map1 from "../assets/map_1.png";

import ConfirmCancelButton from "../confirm-cancel-button/confirm_cancel_button";

export default function MapInput() {
  
  const fgCanvasRef = useRef(null);
  const [mapX, setMapX] = useState(0);
  const [mapY, setMapY] = useState(0);
  const [pins, setPins] = useState([]);

  /// Called when the Canvas gets clicked
  function canvasCallback(reactOnClick) {
    const canvas = reactOnClick.target;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const x    = reactOnClick.clientX - rect.left;
    const y    = reactOnClick.clientY - rect.top;

    // Checks if the user is clicking on a pin
    pins.forEach(pin => {
	if (x >= pin.x && x <= pin.x + 10 &&
	    y >= pin.y && y <= pin.y + 10) {
	    alert("You clicked a pin!");
	    return;
	}
    });

    // Erases Everthing from the Canvas
    context.reset();

    // Sets the internal map position
    setMapX(x);
    setMapY(y);

    // Draws an orange square where the user clicked
    context.fillStyle = "orange";
    context.fillRect(x - 5, y - 5, 10, 10);

    console.log("x: " + x + " y: " + y);

    // Stores the location of the Pin
    setPins([{x: x - 5, y: y - 5}]);
    console.log("Saved as => x: " + (x - 5) + " y: " + (y - 5));
  }


  // useEffect with [] as param to execute only at mount time
  useEffect(() => {
    const canvas = fgCanvasRef.current;
    const context = canvas.getContext("2d");

    // Making the canvas expand to fill the parent container
    const parentBoundingBox = canvas.parentNode.getBoundingClientRect();
    canvas.width = parentBoundingBox.width;
    canvas.height = parentBoundingBox.height;

    // Plotting The Center Point of the Canvas
//    const canvasBoundingBox = canvas.getBoundingClientRect();
//    const canvasCenterX = (canvasBoundingBox.right - canvasBoundingBox.left)/2;
//    const canvasCenterY = (canvasBoundingBox.bottom - canvasBoundingBox.top)/2;
//    console.log("Center X: " + canvasCenterX + " Center Y: " + canvasCenterY);

//    context.fillRect(canvasCenterX - 5, canvasCenterY - 5, 10, 10);
  }, []);

  // <canvas ref={bgCanvasRef} onClick={canvasCallback} style={{ position: "absolute", zIndex: 0 }}></canvas>
  return (
    <div id="map-input-background">
      <div id="map-input-container">
        <img src={map1} alt="Map" draggable="false"></img>
	<canvas ref={fgCanvasRef} onClick={canvasCallback} style={{ position: "absolute", zIndex: 1 }}></canvas>
      </div>
      <p>X: {mapX} Y: {mapY}</p>
      {ConfirmCancelButton()}
    </div>
  );
}
