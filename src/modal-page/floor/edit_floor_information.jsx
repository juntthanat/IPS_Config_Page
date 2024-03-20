export default function EditFloorInformation(
  selectedFloor,
  getFloorName,
  getGeoLength,
  getGeoWidth,
  getAzimuth,
  floorPlanFile,
  onComplete
) {
  //   const { selectedFloor, getFloorName, getGeoLength, getGeoWidth, getAzimuth } =
  //     props ?? {};
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;

  const data = {
    name: getFloorName,
    geoLength: getGeoLength,
    geoWidth: getGeoWidth,
    azimuth: getAzimuth,
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
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      });

      onComplete?.();
      return result;
  };

  editInfo();

  return <div></div>;
}

// selectedFloor, getFloorName, getGeoLength, getGeoWidth, getAzimuth
