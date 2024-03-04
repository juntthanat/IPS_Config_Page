import "./modal_page_location.css";
import { useState } from "react";
import modalPageLocationFloor from "./location/location_floor/modal_page_location_floor";

export default function modalPageLocation(props) {
  const { selectedLocation, buttonType } = props ?? {};

  const [getLocationName, setGetLocationName] = useState("");
  const [getLocationGeoX, setGetLocationGeoX] = useState("");
  const [getLocationGeoY, setGetLocationGeoY] = useState("");

  return (
    <div id="modal-page-location-main">
      <div className="modal-page-container">
        <div className="location-id-header">
          {buttonType === "create"
            ? "LOCATION ID AUTOGENERATED"
            : "FLOOR ID " + selectedLocation}
        </div>
        <div className="location-input-configuration">
          LOCATION NAME{" "}
          <input
            defaultValue={buttonType === "create" ? null : getLocationName}
          ></input>
        </div>
        <div className="location-input-configuration">
          GEO X
          <input
            defaultValue={buttonType === "create" ? null : getLocationGeoX}
          ></input>
        </div>
        <div className="location-input-configuration">
          GEO Y
          <input
            defaultValue={buttonType === "create" ? null : getLocationGeoY}
          ></input>
        </div>
      </div>
      <div id="modal-page-location-component">
        {modalPageLocationFloor()}
        <div id="modal-page-location-beacon"></div>
        <div id="modal-page-location-file"></div>
      </div>
    </div>
  );
}
