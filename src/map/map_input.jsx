import { useEffect, useRef, useState } from "react";
import "./map_input.css";
import map1 from "../assets/map_1.png";

import ConfirmCancelButton from "../confirm-cancel-button/confirm_cancel_button";

export default function MapInput() {
  
  const bgCanvasRef = useRef(null);
  const fgCanvasRef = useRef(null);
  const [mapX, setMapX] = useState(0);
  const [mapY, setMapY] = useState(0);

  /// Called when the Canvas gets clicked
  function canvasCallback(reactOnClick) {
    const canvas = reactOnClick.target;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    context.reset();

    const x    = reactOnClick.clientX - rect.left;
    const y    = reactOnClick.clientY - rect.top;
    setMapX(x);
    setMapY(y);

    // Draws an orange square where the user clicked
    context.fillStyle = "orange";
    context.fillRect(x - 5, y - 5, 10, 10);

    console.log("x: " + x + " y: " + y);
  }


  // useEffect with [] as param to execute only at mount time
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    const fgCanvas = fgCanvasRef.current;
    const context = canvas.getContext("2d");

    // Making the canvas expand to fill the parent container
    const parentBoundingBox = canvas.parentNode.getBoundingClientRect();
    canvas.width = parentBoundingBox.width;
    canvas.height = parentBoundingBox.height;
    fgCanvas.width = parentBoundingBox.width;
    fgCanvas.height = parentBoundingBox.height;

    // Loading the Image
    const image = new Image();
    image.src = map1;
    image.onload = () => {
	const imageAspectRatio = image.height / image.width;
	const imageHeight = canvas.height * 0.84;
	const imageWidth = imageHeight / imageAspectRatio;

	const imageX = (canvas.width - imageWidth) / 2;
	const imageY = (canvas.height - imageHeight) / 2;
	context.drawImage(image, imageX, imageY, imageWidth, imageHeight);
    };

    // Plotting The Center Point of the Canvas
    const canvasBoundingBox = canvas.getBoundingClientRect();
    const canvasCenterX = (canvasBoundingBox.right - canvasBoundingBox.left)/2;
    const canvasCenterY = (canvasBoundingBox.bottom - canvasBoundingBox.top)/2;
    console.log("Center X: " + canvasCenterX + " Center Y: " + canvasCenterY);

    context.fillRect(canvasCenterX - 5, canvasCenterY - 5, 10, 10);
  }, []);

  // <img src={map1} alt="Map" draggable="false"></img>
  return (
    <div id="map-input-background">
      <div id="map-input-container">
	<canvas ref={bgCanvasRef} onClick={canvasCallback} style={{ position: "absolute", zIndex: 0 }}></canvas>
	<canvas ref={fgCanvasRef} onClick={canvasCallback} style={{ position: "absolute", zIndex: 1 }}></canvas>
      </div>
      <p>X: {mapX} Y: {mapY}</p>
      {ConfirmCancelButton()}
    </div>
  );
}
