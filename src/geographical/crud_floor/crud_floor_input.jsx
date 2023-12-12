
import CRUDFloorId from "./crud_floor_id"
import CRUDFloorName from "./crud_floor_name"
import CRUDFloorGeoLength from "./crud_floor_geo_length"
import CRUDFloorGeoWidth from "./crud_floor_geo_width"

export default function CRUDFloorInput(){
    return (
        <div id="crud-beacon-input" style={{display: "flex", flexDirection: "column",}}>
            CRUDFloorInput
            {CRUDFloorId()}
            {CRUDFloorName()}
            {CRUDFloorGeoLength()}
            {CRUDFloorGeoWidth()}
        </div>
    )
}

/*
CRUD floor
- floor_id (auto generated)
- name
- geo_length
- geo_width
*/