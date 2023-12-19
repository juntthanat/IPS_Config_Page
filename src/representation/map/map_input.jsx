import "./map_input.css"
import map1 from "../../assets/map_1.png"

export default function MapInput(){
    return (
        <div id="map-input-background">
            <div id="map-input-container">
                <img src={map1} alt="Map" draggable="false"></img>
            </div>
        </div>
    )
}