export default function CreateLocationInformation(
  getLocationName,
  getLocationGeoX,
  getLocationGeoY,
  selectedFloor,
  onComplete
) {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;

  const data = {
    name: getLocationName,
    geoX: getLocationGeoX,
    geoY: getLocationGeoY,
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
    const result = await fetch(baseURL + `/locations`, requestOptions)
      .then((res) => res.json())
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((res) => fetch(baseURL + `/floor-locations`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          floorId: selectedFloor,
          locationId: res.locationId,
        }),
      }))
      .then((res) => res.json())
      .catch((error) => console.log(error));

      onComplete?.();
      return result;
  };

  createInfo();

  return <div></div>;
}
