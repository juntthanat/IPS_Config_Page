import "./modal_component.css"
import { X } from 'react-feather';
import { useState } from "react";

import modalPageFloor from "../modal-page/modal_page_floor";
import modalPageLocation from "../modal-page/modal_page_location";
import modalPageBeacon from "../modal-page/modal_page_beacon";
import modalPageFloorLocation from "../modal-page/floor/floor_location/modal_page_floor_location";
import modalPageLocationFloor from "../modal-page/location/location_floor/modal_page_location_floor";

export default function ModalComponent(showModal, switchShowModal, selectedModalPage){
    const [currentModalPage, setCurrentModalPage] = useState(null);

    const closeButtonHandler = () => {
        switchShowModal()
    }

    const changeModalPage = () => {
        if(selectedModalPage == "floor"){
            setCurrentModalPage(modalPageFloor)
        } else if(selectedModalPage == "location"){
            setCurrentModalPage(modalPageLocation)
        } else {
            setCurrentModalPage(modalPageBeacon)
        }
    }


    return(
        <div id="modal-component-main" style={{display: showModal? "flex" : "none"}}>
            <div id="modal-page">
                <div id="close-button" onClick={closeButtonHandler}>
                    <X className="feather-icon-32"/>
                </div>
                <div id="modal-header">
                    {selectedModalPage}
                </div>
                <div class="modal-body">
                    {/* Test Modal Page */}
                    <div style={{display: selectedModalPage === "Floor"? "block" : "none"}}>
                        {modalPageFloor()}
                    </div>
                    <div style={{display: selectedModalPage === "Location"? "block" : "none"}}>
                        {modalPageLocation()}
                    </div>
                    <div style={{display: selectedModalPage === "Beacon"? "block" : "none"}}>
                        {modalPageBeacon()}
                    </div>
                    {/* End of Test Modal Page */}
                </div>
            </div>
        </div>
    );
}