import "./modal_page_beacon.css";
// import ModalPageBeaconFloor from "./beacon/beacon_floor/modal_page_beacon_floor";
import FetchBeaconInformation from "./beacon/fetch_beacon_information";

export default function modalPageBeacon(props) {
  const { selectedBeacon, buttonType, switchShowModal, selectedFloor } = props ?? {};

  return (
    <div id="modal-page-beacon-main">
      <div className="modal-page-container">
        <FetchBeaconInformation
          selectedBeacon={selectedBeacon}
          buttonType={buttonType}
          switchShowModal={switchShowModal}
          selectedFloor={selectedFloor}
        />
      </div>
      <div id="modal-page-beacon-component">
      </div>
    </div>
  );
}
