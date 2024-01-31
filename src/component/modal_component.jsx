import "./modal_component.css"
import { X } from 'react-feather';

import modalPageFloor from "../modal-page/modal_page_floor";
import modalPageLocation from "../modal-page/modal_page_location";

export default function ModalComponent(showModal, switchShowModal){
    const closeButtonHandler = () => {
        switchShowModal()
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
                    {modalPageLocation()}
                </div>
            </div>
        </div>
    );
}