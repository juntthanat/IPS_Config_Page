import "./config_input_beacon.css";
import BeaconAPI from "./beacon_api";
import CreateEditButton from "../../../create-edit-button/create_edit_button";

export default function ConfigInputBeacon(
  switchShowModal,
  selectedBeacon,
  setSelectedBeacon,
  selectedFloor
) {
  return (
    <div className="beacon-configuration-container">
      <div className="location-configuration-header">Beacon</div>
      <input placeholder="Enter Beacon ID"></input>
      <div className="location-configuration-listbox-container">
        <div className="location-configuration-listbox">
          beacon list
          {BeaconAPI(selectedBeacon, setSelectedBeacon, selectedFloor)}
        </div>
      </div>
      {CreateEditButton(switchShowModal)}
    </div>
  );
}
