import "./modal_component.css";
import { X } from "react-feather";
import { useEffect, useState } from "react";

import ModalPageFloor from "../modal-page/modal_page_floor";
import ModalPageLocation from "../modal-page/modal_page_location";
import ModalPageBeacon from "../modal-page/modal_page_beacon";

export default function ModalComponent(
  showModal,
  switchShowModal,
  selectedModalPage,
  selectedFloor,
  selectedLocation,
  selectedBeacon,
  buttonType
) {
  const [currentModalPage, setCurrentModalPage] = useState(null);

  const closeButtonHandler = () => {
    switchShowModal();
  };

  const changeModalPage = () => {
    if (selectedModalPage === "Floor") {
      if (buttonType === "edit" && selectedFloor === null) {
        setCurrentModalPage(<div>Please Select Floor to Edit</div>);
      } else {
        setCurrentModalPage(
          <ModalPageFloor
            selectedFloor={selectedFloor}
            buttonType={buttonType}
          />
        );
      }
    } else if (selectedModalPage === "Location") {
      if (buttonType === "edit" && selectedLocation === null) {
        setCurrentModalPage(<div>Please Select Location to Edit</div>);
      } else {
        setCurrentModalPage(
          <ModalPageLocation
            selectedLocation={selectedLocation}
            buttonType={buttonType}
          />
        );
      }
    } else if (selectedModalPage === "Beacon") {
      if (buttonType === "edit" && selectedBeacon === null) {
        setCurrentModalPage(<div>Please Select Beacon to Edit</div>);
      } else {
        setCurrentModalPage(
          <ModalPageBeacon
            selectedBeacon={selectedBeacon}
            buttonType={buttonType}
          />
        );
      }
    } else {
      setCurrentModalPage(<div>Something Went Wrong</div>);
    }
  };

  useEffect(() => {
    changeModalPage();
  }, [selectedModalPage]);

  return (
    <div
      id="modal-component-main"
      style={{ display: showModal ? "flex" : "none" }}
    >
      <div id="modal-page">
        <div id="close-button" onClick={closeButtonHandler}>
          <X className="feather-icon-32" />
        </div>
        <div id="modal-header">{selectedModalPage}</div>
        <div className="modal-body">
          {/* Test Modal Page */}
          {currentModalPage}
          {/* End of Test Modal Page */}
        </div>
      </div>
    </div>
  );
}
