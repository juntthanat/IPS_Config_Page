import { useState, useEffect } from "react";

export default function FloorAPI(props) {
  const { selectedFloor, setSelectedFloor } = props ?? {};
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return await fetch(baseURL + `/floors`)
      .then((e) => e.json())
      .then((d) => JSON.parse(JSON.stringify(d)))
      .then((f) => setData(f));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const checkSelectedFloor = (value) => {
    if (value === true) {
      return "lightgrey";
    }
  };

  const floorList = data.map((index) => (
    <div
      key={index.floorId}
      onClick={() => {
        setSelectedFloor(index.floorId);
      }}
      style={{
        backgroundColor: checkSelectedFloor(selectedFloor === index.floorId),
      }}
    >
      {index.name}
    </div>
  ));

  return <div>{floorList}</div>;
}
