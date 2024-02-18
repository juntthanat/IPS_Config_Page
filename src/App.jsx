import "./App.css";
import { useCallback, useState } from "react";

import TitleHeader from "./component/title_header";
import InputNavigation from "./navigation/input_navigation";

import CRUDFloorPlanInput from "./representation/crud_floor_plan/crud_floor_plan_input";
import MapInput from "./map/map_input";

import ConfigInputFloor from "./component/config_input/config_input_floor/config_input_floor";
import ConfigInputLocation from "./component/config_input/config_input_location/config_input_location";

// Test Modal
import ModalComponent from "./component/modal_component";
import CreateEditButton from "./create-edit-button/create_edit_button";

function App() {
  const [showModal, setShowModal] = useState(false);

  // Selected Data From API
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedBeacon, setSelectedBeacon] = useState(null);

  const switchShowModal = useCallback(() => {
    if (showModal == true) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }, [showModal]);

  return (
    <div id="main-config-page">
      <div id="main-config-page-geographical-representation-input">
        <div id="main-config-page-input-navigation">{InputNavigation()}</div>
        <div id="main-config-page-geographical-input">
          {ModalComponent(showModal, switchShowModal)}
          {TitleHeader("Configuration")}
          {/* Starting of Redesigning */}
          {ConfigInputFloor(switchShowModal, selectedFloor, setSelectedFloor)}
          <div className="location-beacon-configuration-container">
            {ConfigInputLocation(switchShowModal, selectedLocation, setSelectedLocation, selectedFloor)}
            <div className="beacon-configuration-container">
              <div className="location-configuration-header">Beacon</div>
              <input placeholder="Enter Beacon ID"></input>
              <div className="location-configuration-listbox-container">
                <div className="location-configuration-listbox">
                  beacon list
                </div>
              </div>
              {CreateEditButton(switchShowModal)}
            </div>
          </div>
          {/* End of Redesigning */}
          {/* {CRUDFloorInput()}
          {CRUDLocationInput()}
          {CRUDBeaconInput()}
          {CreateEditButton(switchShowModal)} */}
        </div>
        <div id="main-config-page-representation-input">
          {TitleHeader("Representation Input")}
          {CRUDFloorPlanInput()}
        </div>
      </div>
      <div id="main-config-page-map-input">
        <div id="main-config-page-map-input-title">{TitleHeader("Map")}</div>
        <div id="main-config-page-map-input-container">{MapInput()}</div>
      </div>
    </div>
  );
}

export default App;

// Run codespace on Ipad
// npm run dev -- --host 0.0.0.0
// then go to PORTS and looks for Vite Default port (5173) or the one specify in the terminal
// and click the website or globe icon in the Forwareded Address column

// To Open A terminal CTRL+SHIFT+P then search for Create new terminal
// ShortCut CTRL+SHIFT+`

// http://marco.cooldev.win:8080/swagger-ui/index.html#/
