import { useEffect, useRef, useState } from "react";
import "./map_input.css";
import FetchFloorPlanInformation from "./fetch_floor_plan_information";

import ConfirmCancelButton from "../confirm-cancel-button/confirm_cancel_button";

export default function MapInput(props) {
  const { selectedFloor, selectedLocationData, locationData } = props ?? {};
  const [floorPlan, setFloorPlan] = useState(null);
  const [currentFloorData, setCurrentFloorData] = useState(null);

  useEffect(() => {
    FetchFloorPlanInformation(setFloorPlan, setCurrentFloorData, selectedFloor);
  }, [selectedFloor]);

  const fgCanvasRef = useRef(null);
  const mapRef = useRef(null);

  const [mapX, setMapX] = useState(0);
  const [mapY, setMapY] = useState(0);

  const [pinUnifiedX, setPinUnifiedX] = useState(0);
  const [pinUnifiedY, setPinUnifiedY] = useState(0);
  const [scaledUnifiedX, setScaledUnifiedX] = useState(0);
  const [scaledUnifiedY, setScaledUnifiedY] = useState(0);
  const [geoX, setGeoX] = useState(0);
  const [geoY, setGeoY] = useState(0);

  const [pins, setPins] = useState([]);

  function scaleCanvasCoordsToGeoCoords(x, y) {
    const floor = currentFloorData;
    const geoWidth  = floor.geoLength;
    const geoHeight = floor.geoWidth;

    const canvas = fgCanvasRef.current;
    const canvasWidth  = canvas.width;
    const canvasHeight = canvas.height;

    const widthScale  = canvasWidth / geoWidth;
    const heightScale = canvasHeight / geoHeight;

    return {
      x: x / widthScale,
      y: y / heightScale
    }
  }

  function scaleGeoCoordsToCanvasCoords(x, y) {
    const floor = currentFloorData;
    const geoWidth  = floor.geoLength;
    const geoHeight = floor.geoWidth;

    const canvas = fgCanvasRef.current;
    const canvasWidth  = canvas.width;
    const canvasHeight = canvas.height;

    const widthScale  = canvasWidth / geoWidth;
    const heightScale = canvasHeight / geoHeight;

    return {
      x: x * widthScale,
      y: y * heightScale
    }
  }

  function scaleCoordsToTrueCoords(x, y) {
    const img = mapRef.current;
    const renderedWidth  = img.clientWidth;
    const renderedHeight = img.clientHeight;

    const trueMapImage = new Image();
    trueMapImage.src = floorPlan;

    const trueWidth  = trueMapImage.width;
    const trueHeight = trueMapImage.height;

    const widthScale  = trueWidth / renderedWidth;
    const heightScale = trueHeight / renderedHeight;

    return {
      x: x * widthScale,
      y: y * heightScale,
    };
   }

  function canvasCoordsToUnifiedCoords(x, y) {
    const canvas = fgCanvasRef.current;
    const context = canvas.getContext("2d");

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    console.log("CALCULATED CENTER X: " + centerX + " Y: " + centerY);

    return { x: x - centerX, y: -1 * (y - centerY) };
  }

  function unifiedCoordsToCanvasCoords(x, y) {
    const canvas = fgCanvasRef.current;
    const context = canvas.getContext("2d");

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    return { x: Math.floor(x) + centerX, y: -1 * Math.floor(y) + centerY };
  }

  /// Draws the center of the map
  /// DO NOT USE IN PRODUCTION
  function DEBUG_ONLY_drawCenter() {
    const canvas = fgCanvasRef.current;
    const context = canvas.getContext("2d");

    const x = canvas.width / 2 - 5;
    const y = canvas.height / 2 - 5;

    context.fillStyle = "black";
    context.fillRect(x, y, 10, 10);

    console.log("Center X: " + (x + 5) + " Y: " + (y + 5));
  }
  
  /// Draw pins onto the map
  function drawLocations() {
    const canvas = fgCanvasRef.current;
    const context = canvas.getContext("2d");

    locationData.forEach((location) => {
      const canvasCoords = scaleGeoCoordsToCanvasCoords(location.geoX, location.geoY);
      const pin = {
        id: location.locationId,
        name: location.name,
        x: canvasCoords.x,
        y: canvasCoords.y,
      };

      context.fillStyle = "red";
      context.fillRect(pin.x - 5, pin.y - 5, 10, 10);  
      console.log("Drew: " + pin.name + " at X: " + pin.x + " Y: " + pin.y);

      setPins([...pins, pin]);
    });
  }

  /// Called when the pin changes location
  function relocatePin(x, y) {
    const canvas = fgCanvasRef.current;
    const context = canvas.getContext("2d");

    // Erases Everything from the Canvas
    context.reset();

    // Sets the internal map position
    setMapX(x);
    setMapY(y);

    // Draws an orange square where the user clicked
    context.fillStyle = "orange";
    context.fillRect(x - 5, y - 5, 10, 10);

    console.log("x: " + x + " y: " + y);
    
    // Draw the locations
    drawLocations();

    // Draws the center of the map
    // DEBUG ONLY
    // TODO: REMOVE THIS LINE
    DEBUG_ONLY_drawCenter();

    // Stores the location of the Pin in an array
    // Only for testing
    // setPins([{x: x - 5, y: y - 5}]);
    // console.log("Saved as => x: " + (x - 5) + " y: " + (y - 5));
  }

  function relocatePinFromUnifiedCoords(x, y) {
    setPinUnifiedX(x);
    setPinUnifiedY(y);
    
    const scaledUnifiedCoords = scaleCoordsToTrueCoords(x, y);
    setScaledUnifiedX(scaledUnifiedCoords.x);
    setScaledUnifiedY(scaledUnifiedCoords.y);

    const canvasCoords = unifiedCoordsToCanvasCoords(x, y);
    relocatePin(canvasCoords.x, canvasCoords.y);

    const geoCoords = scaleCanvasCoordsToGeoCoords(canvasCoords.x, canvasCoords.y);
    setGeoX(geoCoords.x);
    setGeoY(geoCoords.y);
  }

  /// Called when the Canvas gets clicked
  function canvasCallback(reactOnClick) {
    const canvas = reactOnClick.target;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const x = reactOnClick.clientX - rect.left;
    const y = reactOnClick.clientY - rect.top;

    // Checks if the user is clicking on a pin
    pins.forEach((pin) => {
      if (x >= pin.x && x <= pin.x + 10 && y >= pin.y && y <= pin.y + 10) {
        alert("You clicked: " + pin.name + "!\nX: " + pin.x + " Y: " + pin.y);
        return;
      }
    });

    const geoCoords = scaleCanvasCoordsToGeoCoords(x, y);
    setGeoX(geoCoords.x);
    setGeoY(geoCoords.y);

    relocatePin(x, y);
    const unifiedCoords = canvasCoordsToUnifiedCoords(x, y);
    setPinUnifiedX(unifiedCoords.x);
    setPinUnifiedY(unifiedCoords.y);

    const scaledUnifiedCoords = scaleCoordsToTrueCoords(unifiedCoords.x, unifiedCoords.y);
    setScaledUnifiedX(scaledUnifiedCoords.x);
    setScaledUnifiedY(scaledUnifiedCoords.y);
  }

  /// Gets called when the map image gets loaded
  function initMap() {
    const img = mapRef.current;
    const imgWidth = img.clientWidth;
    const imgHeight = img.clientHeight;

    let tempMap = new Image();
    tempMap.src = floorPlan;

    console.log("==============================");
    console.log("--------IMG Properties--------");
    console.log("==============================");
    console.log("Src:");
    console.log(tempMap);
    console.log("True Dimension:");
    console.log("Width: " + tempMap.width + " Height: " + tempMap.height);
    console.log("Rendered Dimension:");
    console.log("Width: " + imgWidth + " Height: " + imgHeight);
    console.log("Geo Dimension:");
    console.log("Width: " + currentFloorData.geoLength + " Height: " + currentFloorData.geoWidth);
    console.log("==============================");

    const canvas = fgCanvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = imgWidth;
    canvas.height = imgHeight;
  }
  
  useEffect(() => {
    if (selectedLocationData === null) {
      return;
    }
    const canvasCoords = scaleGeoCoordsToCanvasCoords(selectedLocationData.geoX, selectedLocationData.geoY);
  },[selectedLocationData]);
  
  useEffect(() => {
    drawLocations();
  }, [locationData]);

  // useEffect with [] as param to execute only at mount time
  useEffect(() => {
    // Recommended usage:
    // Make Request to server here
    // Then store the pins in the "pins" useState array
    // Then call a function to draw the pins here as well
    //   - Should such a function be made, call it in relocatePin as well
    //     if you wish to do so. This is just a guideline. Hell, I ain't
    //     the one implementing this so... Go nuts lol
  }, []);

  return (
    <div id="map-input-background">
      <div id="map-input-container">
        <img
          ref={mapRef}
          src={floorPlan}
          onLoad={initMap}
          alt="Map"
          draggable="false"
        />
        <canvas
          ref={fgCanvasRef}
          onClick={canvasCallback}
          style={{ position: "absolute", zIndex: 1 }}
        ></canvas>
      </div>
      <label>
        X:{" "}
        <input
          value={pinUnifiedX}
          type="number"
          onChange={(e) =>
            relocatePinFromUnifiedCoords(e.target.value, pinUnifiedY)
          }
        />
      </label>
      <label>
        Y:{" "}
        <input
          value={pinUnifiedY}
          type="number"
          onChange={(e) =>
            relocatePinFromUnifiedCoords(pinUnifiedX, e.target.value)
          }
        />
      </label>
      <p>Canvas X: {mapX} Y: {mapY}</p>
      <p>Scaled Unified X: {scaledUnifiedX} Y: {scaledUnifiedY}</p>
      <p>Geo X: {geoX} Y: {geoY}</p>
      {ConfirmCancelButton()}
    </div>
  );
}
