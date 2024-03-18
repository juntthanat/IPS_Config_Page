import { useState, useEffect, useContext } from "react";
import { RerenderContext } from "../../../App";

export default function LocationAPI(props) {
  const { selectedLocation, setSelectedLocation, selectedFloor } = props ?? {};
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;
  const [data, setData] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [locationName, setLocationName] = useState([]);

  const { rerenderValuePlaceholder } = useContext(RerenderContext);

  const fetchLocationId = async () => {
    return await fetch(baseURL + `/floor-locations/floorId/` + selectedFloor)
      .then((e) => e.json())
      .then((d) => JSON.parse(JSON.stringify(d)))
      .then((f) => setData(f))
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

    console.log("fethcing asdfa;ksdfja;kldjfkld");
  }, [selectedFloor, rerenderValuePlaceholder]);

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

  const locationNameList = locationName.map((index, idx) => (
    <div
      key={`${index.locationId}-${idx}`}
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

  return <div>{locationNameList}</div>;
}

// http://marco.cooldev.win:8080/api/v1/floor-locations/floorId/1
