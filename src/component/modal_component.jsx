import "./modal_component.css";
import { X } from "react-feather";
import { useEffect, useState } from "react";

import modalPageFloor from "../modal-page/modal_page_floor";
import modalPageLocation from "../modal-page/modal_page_location";
import modalPageBeacon from "../modal-page/modal_page_beacon";

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
        setCurrentModalPage(modalPageFloor(selectedFloor, buttonType));
      }
    } else if (selectedModalPage === "Location") {
      setCurrentModalPage(modalPageLocation(selectedLocation, buttonType));
    } else if (selectedModalPage === "Beacon") {
      setCurrentModalPage(modalPageBeacon(selectedBeacon, buttonType));
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
