export default function CreateFloorInformation(
  getFloorName,
  getGeoLength,
  getGeoWidth,
  getAzimuth,
  onComplete
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
    const result = await fetch(baseURL + `/floors`, requestOptions)
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      });

    onComplete?.();
    return result;
  };

  createInfo();

  return <div></div>;
}
