import "./modal_page_floor.css";
import FetchFloorInformation from "./floor/fetch_floor_information";

export default function ModalPageFloor(props) {
  const { selectedFloor, buttonType, switchShowModal, uploadedFloorPlan, setUploadedFloorPlan } = props ?? {};

  return (
    <div id="modal-page-floor-main">
      <div
        className="modal-page-container"
      >
        <FetchFloorInformation
          selectedFloor={selectedFloor}
          buttonType={buttonType}
          switchShowModal={switchShowModal}
          // floorPlan={floorPlan}
          // setFloorPlan={setFloorPlan}
          uploadedFloorPlan={uploadedFloorPlan}
          setUploadedFloorPlan={setUploadedFloorPlan}
        />
      </div>
      <div id="modal-page-floor-component">
      </div>
    </div>
  );
}
