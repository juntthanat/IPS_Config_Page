import "./modal_page_beacon.css";
import FetchBeaconInformation from "./beacon/fetch_beacon_information";
export default function ModalPageBeacon(props) {
  const {
    selectedBeacon,
    buttonType,
    switchShowModal,
    selectedFloor,
    coordinate
  } = props ?? {};

  return (
    <div id="modal-page-beacon-main">
      <div className="modal-page-container">
        <FetchBeaconInformation
          selectedBeacon={selectedBeacon}
          buttonType={buttonType}
          switchShowModal={switchShowModal}
          selectedFloor={selectedFloor}
          coordinate={coordinate}
        />
      </div>
      <div id="modal-page-beacon-component">
        {/* <ModalPageBeaconFloor /> */}
        {/* <div id="modal-page-beacon-beacon"></div>
        <div id="modal-page-beacon-file"></div> */}
      </div>
    </div>
  );
}
