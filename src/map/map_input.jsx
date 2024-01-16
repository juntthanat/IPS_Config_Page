import { useEffect, useRef } from "react";
import "./map_input.css";
import map1 from "../assets/map_1.png";

import ConfirmCancelButton from "../confirm-cancel-button/confirm_cancel_button";

function canvasCallback(reactOnClick) {
  const canvas = reactOnClick.target;
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

    const parentBoundingBox = canvas.parentNode.getBoundingClientRect();
    canvas.width = parentBoundingBox.width;
    canvas.height = parentBoundingBox.height;

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
