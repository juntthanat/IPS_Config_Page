import { useState, useEffect } from "react";

export default function FetchLocationInformation(props) {
  const { selectedLocation, buttonType } = props ?? {};
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;

  const [getLocationName, setGetLocationName] = useState("");
  const [getLocationGeoX, setGetLocationGeoX] = useState("");
  const [getLocationGeoY, setGetLocationGeoY] = useState("");

  const fetchInfo = async () => {
    return await fetch(baseURL + `/locations` + "/" + selectedLocation)
      .then((e) => e.json())
      .then((d) => JSON.parse(JSON.stringify(d)))
      .then((f) => {
        setGetLocationName(f.name);
        setGetLocationGeoX(f.geoX);
        setGetLocationGeoY(f.geoY);
      });
  };

  useEffect(() => {
    if (buttonType === "edit") {
      fetchInfo();
    }
  }, []);

  return (
    <div>
      <div className="location-id-header">
        {buttonType === "create"
          ? "LOCATION ID AUTOGENERATED"
          : "FLOOR ID " + selectedLocation}
      </div>
      <div className="location-input-configuration">
        LOCATION NAME{" "}
        <input
          defaultValue={buttonType === "create" ? null : getLocationName}
        ></input>
      </div>
      <div className="location-input-configuration">
        GEO X
        <input
          defaultValue={buttonType === "create" ? null : getLocationGeoX}
        ></input>
      </div>
      <div className="location-input-configuration">
        GEO Y
        <input
          defaultValue={buttonType === "create" ? null : getLocationGeoY}
        ></input>
      </div>
    </div>
  );
}
