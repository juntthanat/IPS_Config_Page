import { useState, useEffect } from "react";

export default function LocationAPI(
  selectedLocation,
  setSelectedLocation,
  selectedFloor
) {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;
  const [data, setData] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [locationName, setLocationName] = useState([]);

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
    setLocationName([]);
    for (let i = 0; i < idList.length; i++) {
      await fetch(baseURL + `/locations/` + idList[i])
        .then((e) => e.json())
        .then((d) => JSON.parse(JSON.stringify(d)))
        .then((f) => setLocationName((locationName) => [...locationName, f]));
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
      return "red";
    }
  };

  const floorList = locationName.map((index) => (
    <div
      key={index.locationId}
      onClick={() => {
        setSelectedLocation(index.locationId);
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

  return <div>{floorList}</div>;
}

// http://marco.cooldev.win:8080/api/v1/floor-locations/floorId/1
