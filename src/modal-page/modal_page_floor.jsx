import "./modal_page_floor.css";
// import ModalPageFloorLocation from "./floor/floor_location/modal_page_floor_location";
import FetchFloorInformation from "./floor/fetch_floor_information";

export default function ModalPageFloor(props) {
  const { selectedFloor, buttonType , switchShowModal} = props ?? {};

  return (
    <div id="modal-page-floor-main">
      <div className="modal-page-container">
        <FetchFloorInformation
          selectedFloor={selectedFloor}
          buttonType={buttonType}
          switchShowModal={switchShowModal}
        />
      </div>
      <div id="modal-page-floor-component">
        
        {/* <ModalPageFloorLocation />
        <div id="modal-page-floor-beacon"></div>
        <div id="modal-page-floor-file"></div> */}
      </div>
    </div>
  );
}
