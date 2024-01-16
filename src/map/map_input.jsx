import { useEffect, useRef } from "react";
import "./map_input.css";
import map1 from "../assets/map_1.png";

import ConfirmCancelButton from "../confirm-cancel-button/confirm_cancel_button";

/// Called when the Canvas gets clicked
function canvasCallback(reactOnClick) {
  const canvas = reactOnClick.target;
  const context = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const x    = reactOnClick.clientX - rect.left;
  const y    = reactOnClick.clientY - rect.top;
  console.log("x: " + x + " y: " + y);
}

export default function MapInput() {
  
  const canvasRef = useRef(null);

  // useEffect with [] as param to execute only at mount time
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Making the canvas expand to fill the parent container
    const parentBoundingBox = canvas.parentNode.getBoundingClientRect();
    canvas.width = parentBoundingBox.width;
    canvas.height = parentBoundingBox.height;

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
	<canvas ref={canvasRef} onClick={canvasCallback}></canvas>
      </div>
      {ConfirmCancelButton()}
    </div>
  );
}
