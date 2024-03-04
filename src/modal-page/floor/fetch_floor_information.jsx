import { useState, useEffect } from "react";

export default function FetchFloorInformation(props) {
  const { selectedFloor, buttonType } = props ?? {};
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;

  const [getFloorName, setGetFloorName] = useState("");
  const [getGeoLength, setGetGeoLength] = useState("");
  const [getGeoWidth, setGetGeoWidth] = useState("");
  const [getAzimuth, setGetAzimuth] = useState("");

  const fetchInfo = async () => {
    return await fetch(baseURL + `/floors` + "/" + selectedFloor)
      .then((e) => e.json())
      .then((d) => JSON.parse(JSON.stringify(d)))
      .then((f) => {
        setGetFloorName(f.name);
        setGetGeoLength(f.geoLength);
        setGetGeoWidth(f.geoWidth);
        setGetAzimuth(f.azimuth);
      });
  };

  useEffect(() => {
    if (buttonType === "edit") {
      fetchInfo();
    }
  }, []);

  return (
    <div>
      <div className="floor-input-configuration">
        FLOOR NAME{" "}
        <input
          defaultValue={buttonType === "create" ? null : getFloorName}
        ></input>
      </div>
      <div className="floor-input-configuration">
        GEO LENGTH{" "}
        <input
          defaultValue={buttonType === "create" ? null : getGeoLength}
        ></input>
      </div>
      <div className="floor-input-configuration">
        GEO WIDTH{" "}
        <input
          defaultValue={buttonType === "create" ? null : getGeoWidth}
        ></input>
      </div>
      <div className="floor-input-configuration">
        AZIMUTH{" "}
        <input
          defaultValue={buttonType === "create" ? null : getAzimuth}
        ></input>
      </div>
    </div>
  );
}
