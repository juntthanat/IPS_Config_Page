import { useState, useEffect } from "react";

export default function FloorAPI() {
  const baseURL = `http://marco.cooldev.win:8080/`;
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return (
      fetch(baseURL + `api/v1/floors`, {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      })
        //   .then((e) => e.json())
        .then((d) => setData(d))
    );
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  console.log(data);

  return <div></div>;
}
