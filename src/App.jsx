import "./App.css";
import { useCallback, useState, createContext } from "react";

import TitleHeader from "./component/title_header";

import MapInput from "./map/map_input";

import ConfigInputFloor from "./component/config_input/config_input_floor/config_input_floor";
import ConfigInputLocation from "./component/config_input/config_input_location/config_input_location";
import ConfigInputBeacon from "./component/config_input/config_input_beacon/config_input_beacon";

// Test Modal
import ModalComponent from "./component/modal_component";

export const RerenderContext = createContext({
  rerender: () => undefined,
});

function App() {
  const [, setRendererContextValue] = useState(false);

  const rerender = () => {
    setRendererContextValue((prev) => !prev);
  };
  // Modal
  const [showModal, setShowModal] = useState(false);
  const [buttonType, setButtonType] = useState();
  const [selectedModalPage, setSelectedModalPage] = useState(null);

  // Selected Data From API
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedLocationData, setSelectedLocationData] = useState(null);
  const [selectedBeacon, setSelectedBeacon] = useState(null);

  const switchShowModal = useCallback(
    (selectModalPage, selectButtonType) => {
      setSelectedModalPage(selectModalPage);
      setButtonType(selectButtonType);
      if (showModal == true) {
        setShowModal(false);
      } else {
        setShowModal(true);
      }
    },
    [showModal]
  );

  return (
    <RerenderContext.Provider
      value={{
        rerender,
      }}
    >
      <button onClick={() => {rerender()}}>rere</button>
      <div id="main-config-page">
        <div id="main-config-page-input">
          <div id="main-config-page-input-container">
            <ModalComponent
              showModal={showModal}
              switchShowModal={switchShowModal}
              selectedModalPage={selectedModalPage}
              selectedFloor={selectedFloor}
              selectedLocation={selectedLocation}
              selectedBeacon={selectedBeacon}
              buttonType={buttonType}
            />
            <TitleHeader title={"Configuration"} />
            <ConfigInputFloor
              switchShowModal={switchShowModal}
              selectedFloor={selectedFloor}
              setSelectedFloor={setSelectedFloor}
            />
            <div className="location-beacon-configuration-container">
              <ConfigInputLocation
                switchShowModal={switchShowModal}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                setSelectedLocationData={setSelectedLocationData}
                selectedFloor={selectedFloor}
              />
              <ConfigInputBeacon
                switchShowModal={switchShowModal}
                selectedBeacon={selectedBeacon}
                setSelectedBeacon={setSelectedBeacon}
                selectedFloor={selectedFloor}
              />
            </div>
          </div>
        </div>
        <div id="main-config-page-map-input">
          <div id="main-config-page-map-input-title">
            <TitleHeader title={"Map"} />
          </div>
          <div id="main-config-page-map-input-container">
            <MapInput selectedFloor={selectedFloor} selectedLocationData={selectedLocationData}/>
          </div>
        </div>
      </div>
    </RerenderContext.Provider>
  );
}

export default App;

// To Open A terminal CTRL+SHIFT+P then search for Create new terminal
// ShortCut CTRL+SHIFT+`

// http://marco.cooldev.win:8080/swagger-ui/index.html#/
