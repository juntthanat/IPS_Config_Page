import "./config_input_location.css";
import LocationAPI from "./location_api";

import CreateEditButton from "../../../create-edit-button/create_edit_button";

export default function ConfigInputLocation(
  switchShowModal,
  selectedLocation,
  setSelectedLocation,
  selectedFloor
) {
  return (
    <div className="location-configuration-container">
      <div className="location-configuration-header">Location</div>
      <input placeholder="Enter Location ID"></input>
      <div className="location-configuration-listbox-container">
        <div className="location-configuration-listbox">
          location list
          {LocationAPI(selectedLocation, setSelectedLocation, selectedFloor)}
        </div>
      </div>
      {CreateEditButton(switchShowModal)}
    </div>
  );
}
