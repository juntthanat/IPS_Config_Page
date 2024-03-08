import "./modal_page_location.css";
import ModalPageLocationFloor from "./location/location_floor/modal_page_location_floor";
import FetchLocationInformation from "./location/fetch_location_information";

export default function modalPageLocation(props) {
  const { selectedLocation, buttonType , switchShowModal} = props ?? {};

  return (
    <div id="modal-page-location-main">
      <div className="modal-page-container">
        <FetchLocationInformation
          selectedLocation={selectedLocation}
          buttonType={buttonType}
          switchShowModal={switchShowModal}
        />
      </div>
      <div id="modal-page-location-component">
        <ModalPageLocationFloor/>
        <div id="modal-page-location-beacon"></div>
        <div id="modal-page-location-file"></div>
      </div>
    </div>
  );
}
