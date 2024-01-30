import "./modal_page_floor.css"
import modalPageFloorLocation from "./floor_location/modal_page_floor_location"

export default function modalPageFloor(){
    
    return (
        <div id="modal-page-floor-main">
            <input></input>
            <div id="modal-page-floor-component">
                {modalPageFloorLocation()}
                <div id="modal-page-floor-beacon"></div>
                <div id="modal-page-floor-file"></div>
            </div>
        </div>
    )
}