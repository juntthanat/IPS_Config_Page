import "./App.css";
import { useCallback, useState } from "react";

import TitleHeader from "./component/title_header";

import MapInput from "./map/map_input";

import ConfigInputFloor from "./component/config_input/config_input_floor/config_input_floor";
import ConfigInputLocation from "./component/config_input/config_input_location/config_input_location";
import ConfigInputBeacon from "./component/config_input/config_input_beacon/config_input_beacon";

// Test Modal
import ModalComponent from "./component/modal_component";

function App() {
  // Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedModalPage, setSelectedModalPage] = useState(null);

  // Selected Data From API
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedBeacon, setSelectedBeacon] = useState(null);

  const switchShowModal = useCallback((selectModalPage) => {
    setSelectedModalPage(selectModalPage);
    if (showModal == true) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }, [showModal]);

  return (
    <div id="main-config-page">
      <div id="main-config-page-input">
        <div id="main-config-page-input-container">
          {ModalComponent(showModal, switchShowModal, selectedModalPage)}
          {TitleHeader("Configuration")}
          {ConfigInputFloor(switchShowModal, selectedFloor, setSelectedFloor)}
          <div className="location-beacon-configuration-container">
            {ConfigInputLocation(switchShowModal, selectedLocation, setSelectedLocation, selectedFloor)}
            {ConfigInputBeacon(switchShowModal, selectedBeacon, setSelectedBeacon, selectedFloor)}
          </div>
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

// To Open A terminal CTRL+SHIFT+P then search for Create new terminal
// ShortCut CTRL+SHIFT+`

// http://marco.cooldev.win:8080/swagger-ui/index.html#/
