import "./modal_component.css"
import { Camera } from 'react-feather';

export default function ModalComponent(showModal, switchShowModal){
    const closeButtonHandler = () => {
        switchShowModal()
    }


    return(
        <div id="modal-component-main" style={{display: showModal? "flex" : "none"}}>
            <div id="modal-page">
                <div id="close-button" onClick={closeButtonHandler}>
                    <Camera/>
                </div>
                <div id="modal-header">
                    Title
                </div>
            </div>
        </div>
    );
}