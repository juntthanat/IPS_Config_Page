import "./modal_page_floor.css";
import modalPageFloorLocation from "./floor/floor_location/modal_page_floor_location";

export default function modalPageFloor(selectedFloor) {
  return (
    <div id="modal-page-floor-main">
      <div className="modal-page-container">
        <div className="floor-id-header">{"FLOOR ID " + selectedFloor}</div>
        <div className="floor-input-configuration">
          FLOOR NAME <input></input>
        </div>
        <div className="floor-input-configuration">
          GEO LENGTH <input></input>
        </div>
        <div className="floor-input-configuration">
          GEO WIDTH <input></input>
        </div>
        <div className="floor-input-configuration">
          AZIMUTH <input></input>
        </div>
      </div>
      <div id="modal-page-floor-component">
        {modalPageFloorLocation()}
        <div id="modal-page-floor-beacon"></div>
        <div id="modal-page-floor-file"></div>
      </div>
    </div>
  );
}
