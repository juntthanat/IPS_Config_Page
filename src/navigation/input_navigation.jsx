import "./input_navigation.css";
import { useState } from "react";

export default function InputNavigation() {
  const geographicalInput = () => {
    return document.getElementById("main-config-page-geographical-input");
  };
  const representationInput = () => {
    return document.getElementById("main-config-page-representation-input");
  };
  const geographicalNavigateText = () => {
    return document.getElementById("geographical-navigator-text");
  };
  const representationNavigateText = () => {
    return document.getElementById("representation-navigator-text");
  };

  const geographicalNavigateHandler = () => {
    geographicalInput().style.display = "block";
    representationInput().style.display = "none";
    geographicalNavigateText().style.fontWeight = "800";
    representationNavigateText().style.fontWeight = "400";
  };
  const presentationNavigateHandler = () => {
    geographicalInput().style.display = "none";
    representationInput().style.display = "block";
    geographicalNavigateText().style.fontWeight = "400";
    representationNavigateText().style.fontWeight = "800";
  };

  return (
    <div id="navigator">
      <div id="geographical-navigator" onClick={geographicalNavigateHandler}>
        <div id="geographical-navigator-text">Geographical</div>
      </div>
      <div id="representation-navigator" onClick={presentationNavigateHandler}>
        <div id="representation-navigator-text">Representaion</div>
      </div>
    </div>
  );
}
