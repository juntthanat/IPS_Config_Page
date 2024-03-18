import { useState, useEffect, useContext } from "react";
import { RerenderContext } from "../../../App";

export default function LocationAPI(props) {
  const { selectedLocation, setSelectedLocation, setSelectedLocationData, locationData, setLocationData, selectedFloor } = props ?? {};
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;
  const [data, setData] = useState([]);
  const [locationList, setLocationList] = useState([]);

  const {rerender} = useContext(RerenderContext)

  const fetchLocationId = async () => {
    return await fetch(baseURL + `/floor-locations/floorId/` + selectedFloor)
      .then((e) => e.json())
      .then((d) => JSON.parse(JSON.stringify(d)))
      .then((f) => setData(f));
  };

  const locationIdList = (floorLocationJSON) => {
    setLocationList([]);
    for (let i = 0; i < floorLocationJSON.length; i++) {
      setLocationList((locationList) => [
        ...locationList,
        floorLocationJSON[i].locationId,
      ]);
    }
  };

  const fetchLocationName = async (idList) => {
    setLocationData([]);
    for (let i = 0; i < idList.length; i++) {
      await fetch(baseURL + `/locations/` + idList[i])
        .then((e) => e.json())
        .then((d) => JSON.parse(JSON.stringify(d)))
        .then((f) => setLocationData((locationData) => [...locationData, f]));
    }
  };

  useEffect(() => {
    fetchLocationId();
  }, [selectedFloor]);

  useEffect(() => {
    locationIdList(data);
  }, [data]);

  useEffect(() => {
    fetchLocationName(locationList);
  }, [locationList]);

  const checkSelectedLocation = (value) => {
    if (value === true) {
      return "lightgrey";
    }
  };

  const locationNameList = locationData.map((index) => (
    <div
      key={index.locationId}
      onClick={() => {
        setSelectedLocation(index.locationId);
        setSelectedLocationData(index);
      }}
      style={{
        backgroundColor: checkSelectedLocation(
          selectedLocation === index.locationId
        ),
      }}
    >
      {index.name}
    </div>
  ));

  return <div>{locationNameList}</div>;
}

// http://marco.cooldev.win:8080/api/v1/floor-locations/floorId/1
