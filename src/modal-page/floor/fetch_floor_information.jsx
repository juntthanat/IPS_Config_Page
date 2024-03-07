import { useState, useEffect } from "react";
import ConfirmCancelButton from "../../confirm-cancel-button/confirm_cancel_button";
import EditFloorInformation from "./edit_floor_information";

export default function FetchFloorInformation(props) {
  const { selectedFloor, buttonType, switchShowModal } = props ?? {};
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;

  const [getFloorName, setGetFloorName] = useState("");
  const [getGeoLength, setGetGeoLength] = useState("");
  const [getGeoWidth, setGetGeoWidth] = useState("");
  const [getAzimuth, setGetAzimuth] = useState("");

  const [userConfirm, setUserConfirm] = useState(false);

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

  const handleNameChange = (event) => {
    setGetFloorName(event.target.value);
  };
  const handleGeoLengthChange = (event) => {
    setGetGeoLength(event.target.value);
  };
  const handleGeoWidthChange = (event) => {
    setGetGeoWidth(event.target.value);
  };
  const handleGetAzimuth = (event) => {
    setGetAzimuth(event.target.value);
  };

  // const switchUserConfirm = useCallback(()=>{
  //   setUserConfirm(true);
  // })

  useEffect(() => {
    if (userConfirm === true) {
      // <EditFloorInformation
      //   selectedFloor={selectedFloor}
      //   getFloorName={getFloorName}
      //   getGeoLength={getGeoLength}
      //   getGeoWidth={getGeoWidth}
      //   getAzimuth={getAzimuth}
      // />;
      EditFloorInformation(
        selectedFloor,
        getFloorName,
        getGeoLength,
        getGeoWidth,
        getAzimuth
      );
      switchShowModal();
    }
    setUserConfirm(false);
  }, [userConfirm]);

  useEffect(() => {
    if (buttonType === "edit") {
      fetchInfo();
    }
  }, []);

  return (
    <div>
      <div className="floor-id-header">
        {buttonType === "create"
          ? "FLOOR ID AUTOGENERATED"
          : "FLOOR ID " + selectedFloor}
      </div>
      <div className="floor-input-configuration">
        FLOOR NAME{" "}
        <input
          defaultValue={buttonType === "create" ? null : getFloorName}
          onChange={handleNameChange}
        ></input>
      </div>
      <div className="floor-input-configuration">
        GEO LENGTH{" "}
        <input
          defaultValue={buttonType === "create" ? null : getGeoLength}
          onChange={handleGeoLengthChange}
        ></input>
      </div>
      <div className="floor-input-configuration">
        GEO WIDTH{" "}
        <input
          defaultValue={buttonType === "create" ? null : getGeoWidth}
          onChange={handleGeoWidthChange}
        ></input>
      </div>
      <div className="floor-input-configuration">
        AZIMUTH{" "}
        <input
          defaultValue={buttonType === "create" ? null : getAzimuth}
          onChange={handleGetAzimuth}
        ></input>
      </div>
      <ConfirmCancelButton
        setUserConfirm={setUserConfirm}
        switchShowModal={switchShowModal}
      />
    </div>
  );
}
