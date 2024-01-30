import "./modal_component.css"
import { X } from 'react-feather';

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
                    Title
                </div>
            </div>
        </div>
    );
}