import TopicHeader from "../../component/topic_header";

import CRUDBeaconId from "./crud_beacon_id";
import CRUDBeaconMacAddress from "./crud_beacon_mac_address";
import CRUDBeaconName from "./crud_beacon_name";
import CRUDBeaconGeoX from "./crud_beacon_geo_x";
import CRUDBeaconGeoY from "./crud_beacon_geo_y";
import CRUDBeaconGeoFloorId from "./crud_beacon_geo_floor_id";

export default function CRUDBeaconInput(){
    return (
        <div id="crud-beacon-input" style={{display: "flex", flexDirection: "column",}}>
            {TopicHeader("CRUD Beacon")}
            {CRUDBeaconId()}
            {CRUDBeaconMacAddress()}
            {CRUDBeaconName()}
            {CRUDBeaconGeoX()}
            {CRUDBeaconGeoY()}
            {CRUDBeaconGeoFloorId()}
        </div>
    )
}

/*
CRUD beacon
- beacon_id (auto gen)
- mac_address
- name
- geo_x
- geo_y
- floor_id
*/