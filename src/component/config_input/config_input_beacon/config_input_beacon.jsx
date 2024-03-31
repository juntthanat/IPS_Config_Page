import "./config_input_beacon.css";
import BeaconAPI from "./beacon_api";
import CreateEditButton from "../../../create-edit-button/create_edit_button";

export default function ConfigInputBeacon(props) {
  const { switchShowModal, selectedBeacon, setSelectedBeacon, selectedFloor } =
    props ?? {};
  return (
    <div className="beacon-configuration-container">
      <div className="beacon-configuration-header">Beacon</div>
      <div className="beacon-configuration-listbox-container">
        <div className="beacon-configuration-listbox">
          beacon list
          <BeaconAPI
            selectedBeacon={selectedBeacon}
            setSelectedBeacon={setSelectedBeacon}
            selectedFloor={selectedFloor}
          />
        </div>
      </div>
      <div className="beacon-configuration-button-container">
        <div className="beacon-configuration-button-container-padding">
          <CreateEditButton
            switchShowModal={switchShowModal}
            selectModalPage={"Beacon"}
          />
        </div>
      </div>
    </div>
  );
}
