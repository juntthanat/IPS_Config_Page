import "./modal_page_floor.css";
import FetchFloorInformation from "./floor/fetch_floor_information";

export default function ModalPageFloor(props) {
  const { selectedFloor, buttonType, switchShowModal } = props ?? {};

  return (
    <div id="modal-page-floor-main">
      <div
        className="modal-page-container"
      >
        <FetchFloorInformation
          selectedFloor={selectedFloor}
          buttonType={buttonType}
          switchShowModal={switchShowModal}
        />
      </div>
      <div id="modal-page-floor-component">
      </div>
    </div>
  );
}
