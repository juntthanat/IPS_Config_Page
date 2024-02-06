import "./config_input_floor.css";
import FloorAPI from "./floor_api";

export default function ConfigInputFloor() {
  return (
    <div className="floor-configuration-container">
      <div className="floor-configuration-header">Floor Configuration</div>
      <div className="floor-configuration-listbox-container">
        <div className="floor-configuration-listbox">
          {/* Fetch Floor From API */}
          {FloorAPI()}
        </div>
      </div>
      <div className="floor-configuration-button-container">
        {/* <button className="button-class">
                Add
              </button> */}
        {/* {CreateEditButton(switchShowModal)} */}
        <div className="floor-configuration-button-container-padding"></div>
      </div>
    </div>
  );
}
