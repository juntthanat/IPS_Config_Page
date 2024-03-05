import "./modal_page_beacon.css";
import ModalPageBeaconFloor from "./beacon/beacon_floor/modal_page_beacon_floor";
import FetchBeaconInformation from "./beacon/fetch_beacon_information";

export default function modalPageBeacon(props) {
  const { selectedBeacon, buttonType } = props ?? {};

  return (
    <div id="modal-page-beacon-main">
      <div className="modal-page-container">
        <FetchBeaconInformation selectedBeacon={selectedBeacon} buttonType={buttonType}/>
      </div>
      <div id="modal-page-beacon-component">
        <ModalPageBeaconFloor/>
        <div id="modal-page-beacon-beacon"></div>
        <div id="modal-page-beacon-file"></div>
      </div>
    </div>
  );
}
