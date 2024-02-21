import { useState, useEffect } from "react";

export default function BeaconAPI(
  selectedBeacon,
  setSelectedBeacon,
  selectedFloor
) {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;
  const [data, setData] = useState([]);
  const [beaconList, setBeaconList] = useState([]);
  const [beaconName, setBeaconName] = useState([]);

  const fetchBeaconId = async () => {
    return await fetch(baseURL + `/floor-beacons/floorId/` + selectedFloor)
      .then((e) => e.json())
      .then((d) => JSON.parse(JSON.stringify(d)))
      .then((f) => setData(f));
  };
  const beaconIdList = (floorBeaconJSON) => {
    setBeaconList([]);
    for (let i = 0; i < floorBeaconJSON.length; i++) {
      setBeaconList((locationList) => [
        ...locationList,
        floorBeaconJSON[i].locationId,
      ]);
    }
  };

  const fetchBeaconName = async (idList) => {
    setBeaconName([]);
    for (let i = 0; i < idList.length; i++) {
      await fetch(baseURL + `/beacons/` + idList[i])
        .then((e) => e.json())
        .then((d) => JSON.parse(JSON.stringify(d)))
        .then((f) => setBeaconName((beaconName) => [...beaconName, f]));
    }
  };

  useEffect(() => {
    fetchBeaconId();
  }, [selectedFloor]);

  useEffect(() => {
    beaconIdList(data);
  }, [data]);

  useEffect(() => {
    fetchBeaconName(beaconList);
  }, [beaconList]);

  const checkSelectedBeacon = (value) => {
    if (value === true) {
      return "red";
    }
  };

  const beaconNameList = beaconName.map((index) => (
    <div
      key={index.beaconId}
      onClick={() => {
        setSelectedBeacon(index.beaconId);
      }}
      style={{
        backgroundColor: checkSelectedBeacon(selectedBeacon === index.beaconId),
      }}
    >
      {index.name}
    </div>
  ));

  return <div>{beaconNameList}</div>;
}
