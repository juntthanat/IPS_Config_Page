import "./config_input_floor.css";
import FloorAPI from "./floor_api";

import CreateEditButton from "../../../create-edit-button/create_edit_button";

export default function ConfigInputFloor(switchShowModal, selectedFloor, setSelectedFloor) {

  return (
    <div className="floor-configuration-container">
      <div className="floor-configuration-header">Floor Configuration</div>
      <input placeholder="Enter Floor ID"></input>
      <div className="floor-configuration-listbox-container">
        <div className="floor-configuration-listbox">
        {/* <input placeholder="Enter Floor ID"></input> */}
          Floor List
          {/* Fetch Floor From API */}
          {FloorAPI(selectedFloor, setSelectedFloor)}
        </div>
      </div>
      <div className="floor-configuration-button-container">
        {CreateEditButton(switchShowModal)}
        <div className="floor-configuration-button-container-padding"></div>
      </div>
    </div>
  );
}
