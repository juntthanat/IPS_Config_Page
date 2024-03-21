import "./modal_component.css";
import { X } from "react-feather";
import { useEffect, useState } from "react";

import ModalPageFloor from "../modal-page/modal_page_floor";
import ModalPageLocation from "../modal-page/modal_page_location";
import ModalPageBeacon from "../modal-page/modal_page_beacon";

export default function ModalComponent(props) {
  const {
    showModal,
    switchShowModal,
    selectedModalPage,
    selectedFloor,
    selectedLocation,
    selectedBeacon,
    buttonType,
    uploadedFloorPlan,
    setUploadedFloorPlan,
    coordinate
  } = props ?? {};
  const [currentModalPage, setCurrentModalPage] = useState(null);

  const closeButtonHandler = () => {
    switchShowModal();
  };

  const changeModalPage = () => {
    if (selectedModalPage === "Floor") {
      if (buttonType === "edit" && selectedFloor === null) {
        setCurrentModalPage(<div>Please Select Floor to Edit</div>);
      } else if (buttonType === "delete" && selectedFloor === null) {
        setCurrentModalPage(<div>Please Select Floor to Delete</div>);
      } else {
        setCurrentModalPage(
          <ModalPageFloor
            selectedFloor={selectedFloor}
            buttonType={buttonType}
            switchShowModal={switchShowModal}
            uploadedFloorPlan={uploadedFloorPlan}
            setUploadedFloorPlan={setUploadedFloorPlan}
          />
        );
      }
    } else if (selectedModalPage === "Location") {
      if (buttonType === "edit" && selectedLocation === null) {
        setCurrentModalPage(<div>Please Select Location to Edit</div>);
      } else if (buttonType === "delete" && selectedLocation === null) {
        setCurrentModalPage(<div>Please Select Location to Delete</div>);
      } else {
        setCurrentModalPage(
          <ModalPageLocation
            selectedLocation={selectedLocation}
            buttonType={buttonType}
            switchShowModal={switchShowModal}
            selectedFloor={selectedFloor}
          />
        );
      }
    } else if (selectedModalPage === "Beacon") {
      if (buttonType === "edit" && selectedBeacon === null) {
        setCurrentModalPage(<div>Please Select Beacon to Edit</div>);
      } else if (buttonType === "delete" && selectedBeacon === null) {
        setCurrentModalPage(<div>Please Select Beacon to Delete</div>);
      } else {
        setCurrentModalPage(
          <ModalPageBeacon
            selectedBeacon={selectedBeacon}
            buttonType={buttonType}
            switchShowModal={switchShowModal}
            selectedFloor={selectedFloor}
            coordinate={coordinate}
          />
        );
      }
    } else {
      setCurrentModalPage(<div>Something Went Wrong</div>);
    }
  };

  useEffect(() => {
    changeModalPage();
  }, [selectedModalPage, coordinate]);

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
        <div className="modal-body">{currentModalPage}</div>
      </div>
    </div>
  );
}
