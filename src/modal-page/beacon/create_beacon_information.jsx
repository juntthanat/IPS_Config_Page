export default function CreateBeaconInformation(
  getBeaconName,
  getBeaconGeoX,
  getBeaconGeoY,
  getMacAddress,
  selectedFloor,
  onComplete
) {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;

  const data = {
    name: getBeaconName,
    geoX: getBeaconGeoX,
    geoY: getBeaconGeoY,
    macAddress: getMacAddress,
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
    const result = await fetch(baseURL + `/beacons`, requestOptions)
      .then((res) => res.json())
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((res) =>
        fetch(baseURL + `/floor-beacons`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            floorId: selectedFloor,
            beaconId: res.beaconId,
          }),
        })
      )
      .then((res) => res.json())
      .catch((error) => console.log(error));


    onComplete?.();
    return result;
  };

  createInfo();

  return <div></div>;
}
