import { useState, useEffect } from "react";

export default function FloorAPI() {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(baseURL + `/floors`, {
      mode: "no-cors",
    })
      .then((e) => e.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return <div>{data}</div>;
}
