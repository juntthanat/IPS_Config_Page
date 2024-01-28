import "./modal_component.css"

export default function ModalComponent(showModal, switchShowModal){


    return(
        <div id="modal-component-main" style={{display: showModal? "flex" : "none"}}>
            <div id="modal-page">
                <div id="close-button"></div>
                <div id="modal-header">
                    Title
                </div>
            </div>
        </div>
    );
}