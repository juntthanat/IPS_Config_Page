import "./modal_page_location.css"
import modalPageLocationFloor from "./location/location_floor/modal_page_location_floor"

export default function modalPageLocation(){

    return (
        <div id="modal-page-location-main">
            <input></input>
            <div id="modal-page-location-component">
                {modalPageLocationFloor()}
                <div id="modal-page-location-beacon"></div>
                <div id="modal-page-location-file"></div>
            </div>
        </div>
    )
}