import { useState, useEffect } from "react";

export default function EditFloorInformation(props){
    const {selectedFloor, floorName, floorGeoLength, floorGeoWidth, floorAzimuth} = props ?? {};
    const baseURL = `http://marco.cooldev.win:8080/api/v1`;

    const data ={
        name: floorName,
        geoLength: floorGeoLength,
        geoWidth: floorGeoWidth,
        azimuth: floorAzimuth
    }

    const requestOptions = {
        methods: 'PUT',
        body: JSON.stringify(data)
    }
    
    const editInfo = async () => {
        return await fetch(baseURL + `floors` + "/" + selectedFloor, requestOptions)
    }


    return(
        <div>
            
        </div>
    )
}