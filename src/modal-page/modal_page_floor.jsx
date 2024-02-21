import "./modal_page_floor.css"
import modalPageFloorLocation from "./floor/floor_location/modal_page_floor_location"

export default function modalPageFloor(){
    
    return (
        <div id="modal-page-floor-main">
            FLOOR PAGE
            <input></input>
            <div id="modal-page-floor-component">
                {modalPageFloorLocation()}
                <div id="modal-page-floor-beacon"></div>
                <div id="modal-page-floor-file"></div>
            </div>
        </div>
    )
}