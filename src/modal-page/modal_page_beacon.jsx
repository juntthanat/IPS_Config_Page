import "./modal_page_beacon.css"
import modalPageBeaconFloor from "./beacon/beacon_floor/modal_page_beacon_floor"

export default function modalPageBeacon(selectedBeacon){

    return (
        <div id="modal-page-beacon-main">
            BEACON ID {selectedBeacon}
            <input></input>
            <div id="modal-page-beacon-component">
                {modalPageBeaconFloor()}
                <div id="modal-page-beacon-beacon"></div>
                <div id="modal-page-beacon-file"></div>
            </div>
        </div>
    )
}