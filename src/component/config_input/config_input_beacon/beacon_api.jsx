import { useState, useEffect, useContext, useRef } from "react";
import { RerenderContext } from "../../../App";

export default function BeaconAPI(props) {
  const { selectedBeacon, setSelectedBeacon, selectedFloor } = props ?? {};
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;
  const [data, setData] = useState([]);
  const [beaconList, setBeaconList] = useState([]);
  const [beaconName, setBeaconName] = useState([]);
  const isFetching = useRef(false);

  const { rerenderValuePlaceholder } = useContext(RerenderContext);

  const fetchBeaconId = async () => {
    return await fetch(baseURL + `/floor-beacons/floorId/` + selectedFloor)
      .then((e) => e.json())
      .then((d) => JSON.parse(JSON.stringify(d)))
      .then((f) => setData(f));
  };
  const beaconIdList = (floorBeaconJSON) => {
    setBeaconList([]);
    for (let i = 0; i < floorBeaconJSON.length; i++) {
      setBeaconList((beaconList) => [
        ...beaconList,
        floorBeaconJSON[i].beaconId,
      ]);
    }
  };

  const fetchBeaconName = async (idList) => {
    if (isFetching.current == false) {
      isFetching.current = true;
      setBeaconName([]);
      for (let i = 0; i < idList.length; i++) {
        await fetch(baseURL + `/beacons/` + idList[i])
          .then((e) => e.json())
          .then((d) => JSON.parse(JSON.stringify(d)))
          .then((f) => setBeaconName((beaconName) => [...beaconName, f]));
      }
    }
    isFetching.current = false;
  };

  useEffect(() => {
    fetchBeaconId();
  }, [selectedFloor, rerenderValuePlaceholder]);

  useEffect(() => {
    beaconIdList(data);
  }, [data]);

  useEffect(() => {
    fetchBeaconName(beaconList);
  }, [beaconList]);

  const checkSelectedBeacon = (value) => {
    if (value === true) {
      return "lightgrey";
    }
  };

  const beaconNameList = beaconName.map((index, idx) => (
    <div
      key={`${index.beaconId}-${idx}`}
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
