import EditFloorPlanInformation from "../../map/edit_floor_plan_information";

export default function EditFloorInformation(
  selectedFloor,
  getFloorName,
  getGeoLength,
  getGeoWidth,
  getAzimuth,
  getLevel,
  floorPlanFile,
  onComplete
) {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;

  const data = {
    name: getFloorName,
    geoLength: getGeoLength,
    geoWidth: getGeoWidth,
    azimuth: getAzimuth,
    level: getLevel,
  };

  const requestOptions = {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  };

  const editInfo = async () => {
    const result =  await fetch(baseURL + `/floors/` + selectedFloor, requestOptions)
      .then((res) => res.json());

    if(result.message != undefined){
      alert(result.message)
    } else {
      EditFloorPlanInformation(selectedFloor, floorPlanFile, onComplete)
    }

      onComplete?.();
      return result;
  };

  editInfo();

  return <div></div>;
}
