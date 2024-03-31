import "./modal_page_location.css";
import FetchLocationInformation from "./location/fetch_location_information";

export default function modalPageLocation(props) {
  const { selectedLocation, buttonType, switchShowModal, selectedFloor } =
    props ?? {};

  return (
    <div id="modal-page-location-main">
      <div className="modal-page-container">
        <FetchLocationInformation
          selectedLocation={selectedLocation}
          buttonType={buttonType}
          switchShowModal={switchShowModal}
          selectedFloor={selectedFloor}
        />
      </div>
      <div id="modal-page-location-component">
      </div>
    </div>
  );
}
