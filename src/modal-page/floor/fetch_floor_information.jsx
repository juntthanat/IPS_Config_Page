import { useState, useEffect, useContext } from "react";
import ConfirmCancelButton from "../../confirm-cancel-button/confirm_cancel_button";
import EditFloorInformation from "./edit_floor_information";
import CreateFloorInformation from "./create_floor_information";
import DeleteFloorInformation from "./delete_floor_information";

import { RerenderContext } from "../../App";

export default function FetchFloorInformation(props) {
  const {
    selectedFloor,
    buttonType,
    switchShowModal,
    // uploadedFloorPlan,
    setUploadedFloorPlan,
  } = props ?? {};
  const { rerender } = useContext(RerenderContext);
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;

  const [getFloorName, setGetFloorName] = useState("");
  const [getGeoLength, setGetGeoLength] = useState("");
  const [getGeoWidth, setGetGeoWidth] = useState("");
  const [getAzimuth, setGetAzimuth] = useState("");

  const [userConfirm, setUserConfirm] = useState(false);

  const [floorPlanFile, setFloorPlanFile] = useState();

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
  const handleFloorPlan = (event) => {
    setUploadedFloorPlan(URL.createObjectURL(event.target.files[0]));
    setFloorPlanFile(event.target.files[0]);
  };

  const checkUserInput = () => {
    if (
      getFloorName != "" &&
      getGeoLength != "" &&
      getGeoWidth != "" &&
      getAzimuth != ""
    ) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    if (userConfirm === true && checkUserInput() == true) {
      if (buttonType === "create") {
        CreateFloorInformation(
          getFloorName,
          getGeoLength,
          getGeoWidth,
          getAzimuth,
          floorPlanFile,
          () => {
            rerender();
          }
        );
      } else if (buttonType === "edit") {
        EditFloorInformation(
          selectedFloor,
          getFloorName,
          getGeoLength,
          getGeoWidth,
          getAzimuth,
          floorPlanFile,
          () => {
            rerender();
          }
        );
      } else {
        DeleteFloorInformation(selectedFloor, () => {
          rerender();
        });
      }
      switchShowModal();
    }
    setUserConfirm(false);
  }, [userConfirm]);

  useEffect(() => {
    if (buttonType === "edit") {
      fetchInfo();
    } else if (buttonType === "create") {
      console.log("Create Section");
    } else {
      fetchInfo();
    }
  }, []);

  return (
    <div>
      <div
        style={{
          display: buttonType === "delete" ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "xxxl",
        }}
      >
        Are You Sure? -_-
      </div>
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
          style={{
            border: getFloorName === "" ? "solid red 2px" : "solid black 2px",
          }}
          placeholder={getFloorName === "" ? "Please Enter Floor Name" : ""}
          disabled={buttonType === "delete" ? true : false}
        ></input>
      </div>
      <div className="floor-input-configuration">
        GEO LENGTH{" "}
        <input
          defaultValue={buttonType === "create" ? null : getGeoLength}
          onChange={handleGeoLengthChange}
          style={{
            border: getGeoLength === "" ? "solid red 2px" : "solid black 2px",
          }}
          placeholder={
            getGeoLength === "" ? "Please Enter Floor Geo Length" : ""
          }
          disabled={buttonType === "delete" ? true : false}
        ></input>
      </div>
      <div className="floor-input-configuration">
        GEO WIDTH{" "}
        <input
          defaultValue={buttonType === "create" ? null : getGeoWidth}
          onChange={handleGeoWidthChange}
          style={{
            border: getGeoWidth === "" ? "solid red 2px" : "solid black 2px",
          }}
          placeholder={getGeoWidth === "" ? "Please Enter Floor Geo Width" : ""}
          disabled={buttonType === "delete" ? true : false}
        ></input>
      </div>
      <div className="floor-input-configuration">
        AZIMUTH{" "}
        <input
          defaultValue={buttonType === "create" ? null : getAzimuth}
          onChange={handleGetAzimuth}
          style={{
            border: getAzimuth === "" ? "solid red 2px" : "solid black 2px",
          }}
          placeholder={getAzimuth === "" ? "Please Enter Floor Azimuth" : ""}
          disabled={buttonType === "delete" ? true : false}
        ></input>
      </div>
      <div className="floor-input-configuration">
        FLOOR PLAN
        <input type="file" onChange={handleFloorPlan}></input>
      </div>
      <ConfirmCancelButton
        setUserConfirm={setUserConfirm}
        switchShowModal={switchShowModal}
      />
    </div>
  );
}
