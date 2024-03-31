export default function EditBeaconInformation(
  selectedBeacon,
  getBeaconName,
  getBeaconGeoX,
  getBeaconGeoY,
  getMacAddress,
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
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  };

  const editInfo = async () => {
    const result = await fetch(
      baseURL + `/beacons/` + selectedBeacon,
      requestOptions
    )
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
