import "./config_input_floor.css";
import FloorAPI from "./floor_api";

import CreateEditButton from "../../../create-edit-button/create_edit_button";

export default function ConfigInputFloor(props) {
  const { switchShowModal, selectedFloor, setSelectedFloor } = props ?? {};
  return (
    <div className="floor-configuration-container">
      <div className="floor-configuration-header">Floor</div>
      <div className="floor-configuration-listbox-container">
        <div className="floor-configuration-listbox">
          <FloorAPI selectedFloor={selectedFloor} setSelectedFloor={setSelectedFloor}/>
        </div>
      </div>
      <div className="floor-configuration-button-container">
        <div className="floor-configuration-button-container-padding">
          <CreateEditButton switchShowModal={switchShowModal} selectModalPage={"Floor"}/>
        </div>
      </div>
    </div>
  );
}
