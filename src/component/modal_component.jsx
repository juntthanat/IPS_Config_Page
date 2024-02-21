import "./modal_component.css"
import { X } from 'react-feather';
import { useState } from "react";

import modalPageFloor from "../modal-page/modal_page_floor";
import modalPageLocation from "../modal-page/modal_page_location";
import modalPageBeacon from "../modal-page/modal_page_beacon";
import modalPageFloorLocation from "../modal-page/floor/floor_location/modal_page_floor_location";
import modalPageLocationFloor from "../modal-page/location/location_floor/modal_page_location_floor";

export default function ModalComponent(showModal, switchShowModal, selectModalPage){
    const [currentModalPage, setCurrentModalPage] = useState(null);

    const closeButtonHandler = () => {
        switchShowModal()
    }

    const changeModalPage = () => {
        if(selectModalPage == "floor"){
            setCurrentModalPage(modalPageFloor)
        } else if(selectModalPage == "location"){
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
                    Floor   Location    Beacon  File
                </div>
                <div id="modal-body">
                    {/* {modalPageFloor()} */}
                    {/* {modalPageLocation()} */}
                    {modalPageBeacon()}
                </div>
            </div>
        </div>
    );
}