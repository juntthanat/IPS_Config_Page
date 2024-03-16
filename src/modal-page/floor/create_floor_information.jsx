export default function CreateFloorInformation(
  selectedFloor,
  getFloorName,
  getGeoLength,
  getGeoWidth,
  getAzimuth
) {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;

  const data = {
    name: getFloorName,
    geoLength: getGeoLength,
    geoWidth: getGeoWidth,
    azimuth: getAzimuth,
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
    return await fetch(baseURL + `/floors`, requestOptions)
    .then((res) => res.json())
    .catch((error)=> {
        console.log(error)
    })
  };

  createInfo();

  return <div></div>;
}
