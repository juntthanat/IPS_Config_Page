export default function EditFloorInformation(
  selectedFloor,
  getFloorName,
  getGeoLength,
  getGeoWidth,
  getAzimuth
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
    return await fetch(baseURL + `floors` + "/" + selectedFloor, requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  };

  editInfo();

  return <div></div>;
}

// selectedFloor, getFloorName, getGeoLength, getGeoWidth, getAzimuth
