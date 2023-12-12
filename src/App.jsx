import { useState } from "react";
import "./App.css";

import CRUDFloorInput from "./geographical/crud_floor/crud_floor_input";
import CRUDLocationInput from "./geographical/crud_location/crud_location_input";
import CRUDBeaconInput from "./geographical/crud_beacon/crud_beacon_input";


function App() {
  return (
    <div id="main-config-page">
      <div id="main-config-page-input">
        Geographical
        {CRUDFloorInput()}
        {CRUDLocationInput()}
        {CRUDBeaconInput()}
        Representation
        
      </div>
      <div id="main-config-page-map">MAP</div>
    </div>
  );
}

export default App;

/*
#GEOGRAPHICAL#
CRUD floor
- floor_id (auto generated)
- name
- geo_length
- geo_width

CRUD location
- location_id (auto gen)
- name
- geo_x
- geo_y
- floor_id

CRUD beacon
- beacon_id (auto gen)
- mac_address
- name
- geo_x
- geo_y
- floor_id

#REPRESENTATION#
CRUD floor plan
- floor_plan_id
- name
- plan_length
- plan_width
- file_content (this will be file upload)
- floor_id
*/
