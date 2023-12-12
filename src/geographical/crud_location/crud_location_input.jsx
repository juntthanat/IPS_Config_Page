import CRUDLocationId from "./crud_location_id"
import CRUDLocationName from "./crud_location_name"
import CRUDLocationGeoX from "./crud_location_geo_x"
import CRUDLocationGeoY from "./crud_location_geo_y"
import CRUDLocationFloorId from "./crud_location_floor_id"

export default function CRUDLocationInput(){
    return (
        <div id="crud-beacon-input" style={{display: "flex", flexDirection: "column",}}>
            CRUDLocationInput
            {CRUDLocationId()}
            {CRUDLocationName()}
            {CRUDLocationGeoX()}
            {CRUDLocationGeoY()}
            {CRUDLocationFloorId()}
        </div>
    )
}

/*
CRUD location
- location_id (auto gen)
- name
- geo_x
- geo_y
- floor_id
*/