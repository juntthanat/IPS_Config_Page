import "./config_input_beacon.css";
import BeaconAPI from "./beacon_api";
import CreateEditButton from "../../../create-edit-button/create_edit_button";

export default function ConfigInputBeacon(props) {
  const { switchShowModal, selectedBeacon, setSelectedBeacon, selectedFloor } =
    props ?? {};


  return (
    <div className="beacon-configuration-container">
      <div className="location-configuration-header">Beacon</div>
      <input placeholder="Enter Beacon ID"></input>
      <div className="location-configuration-listbox-container">
        <div className="location-configuration-listbox">
          beacon list
          <BeaconAPI
            selectedBeacon={selectedBeacon}
            setSelectedBeacon={setSelectedBeacon}
            selectedFloor={selectedFloor}
          />
        </div>
      </div>
      <CreateEditButton
        switchShowModal={switchShowModal}
        selectModalPage={"Beacon"}
      />
    </div>
  );
}
