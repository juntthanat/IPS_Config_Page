import CreateFloorPlanInformation from "../../map/create_floor_plan_information";
export default function CreateFloorInformation(
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
    level: getLevel
  };

  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  };

  const createInfo = async () => {
    const result = await fetch(baseURL + `/floors`, requestOptions)
      .then((res) => res.json())
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((res) => CreateFloorPlanInformation(res.floorId, floorPlanFile))
      .catch((error) => {
        console.log(error);
      });

    onComplete?.();
    return result;
  };

  createInfo();

  return <div></div>;
}
