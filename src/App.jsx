import { useState } from "react";
import "./App.css";

import TitleHeader from "./component/title_header";

import CRUDFloorInput from "./geographical/crud_floor/crud_floor_input";
import CRUDLocationInput from "./geographical/crud_location/crud_location_input";
import CRUDBeaconInput from "./geographical/crud_beacon/crud_beacon_input";
import CRUDFloorPlanInput from "./representation/crud_floor_plan/crud_floor_plan_input";

function App() {
  return (
    <div id="main-config-page">
      <div id="main-config-page-input">
        {TitleHeader("Geographical Input")}
        {CRUDFloorInput()}
        {CRUDLocationInput()}
        {CRUDBeaconInput()}
      </div>
      <div id="main-config-page-map">
        {TitleHeader("Representation Input")}
        {CRUDFloorPlanInput()}

        Map
      </div>
    </div>
  );
}

export default App;

// Run codespace on Ipad
// npm run dev -- --host 0.0.0.0
// then go to PORTS and looks for Vite Default port (5173) or the one specify in the terminal
// and click the website or globe icon in the Forwareded Address column

// To Open A terminal CTRL+SHIFT+P then search for Create new terminal
// ShortCut CTRL+SHIFT+`

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
