import "./App.css";
import { useCallback, useState } from "react";

import TitleHeader from "./component/title_header";
import InputNavigation from "./navigation/input_navigation";

import CRUDFloorInput from "./geographical/crud_floor/crud_floor_input";
import CRUDLocationInput from "./geographical/crud_location/crud_location_input";
import CRUDBeaconInput from "./geographical/crud_beacon/crud_beacon_input";
import CRUDFloorPlanInput from "./representation/crud_floor_plan/crud_floor_plan_input";
import MapInput from "./map/map_input";

// Test Modal
import ModalComponent from "./component/modal_component";
import CreateEditButton from "./create-edit-button/create_edit_button";

function App() {
  const [showModal, setShowModal] = useState(false);

  const switchShowModal = useCallback(() => {
    if(showModal == true){
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }, [showModal])

  return (
    <div id="main-config-page">
      <div id="main-config-page-geographical-representation-input">
        <div id="main-config-page-input-navigation">{InputNavigation()}</div>
        <div id="main-config-page-geographical-input">
          {ModalComponent(showModal, switchShowModal)}
          {TitleHeader("Configuration")}
          {/* Starting of Redesigning */}
          <div className="floor-configuration-container">
            <div className="floor-configuration-header">
              Floor Configuration
            </div>
            <div className="floor-configuration-listbox-container">
              <div className="floor-configuration-listbox">
                <ui>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                </ui>
              </div>
            </div>
            <div className="floor-configuration-button-container">
              <button className="button-class">
                Add
              </button>
              <div className="floor-configuration-button-container-padding"></div>
            </div>
          </div>
          {/* End of Redesigning */}
          {/* {CRUDFloorInput()}
          {CRUDLocationInput()}
          {CRUDBeaconInput()}
          {CreateEditButton(switchShowModal)} */}
        </div>
        <div id="main-config-page-representation-input">
          {TitleHeader("Representation Input")}
          {CRUDFloorPlanInput()}
        </div>
      </div>
      <div id="main-config-page-map-input">
        <div id="main-config-page-map-input-title">{TitleHeader("Map")}</div>
        <div id="main-config-page-map-input-container">{MapInput()}</div>
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




import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function BasicDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">  
            <ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
        


*/
