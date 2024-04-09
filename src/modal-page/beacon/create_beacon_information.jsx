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
    const result = await fetch(baseURL + `/beacons`, requestOptions).then(
      (res) => res.json()
    );
    // .then((res) => JSON.parse(JSON.stringify(res)))

    if (result.beaconId != undefined) {
      // fetch(baseURL + `/floor-beacons`, {
      //   method: "POST",
      //   mode: "cors",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   },
      //   body: JSON.stringify({
      //     floorId: selectedFloor,
      //     beaconId: result.beaconId,
      //   }),
      // }).then((res) => res.json());
       await createBeacon(result);
    } else if (result.message != undefined) {
      alert(result.message);
    }

    // onComplete?.();
    return result;
  };

  const createBeacon = async (beaconInfo) => {
    const result = await fetch(baseURL + `/floor-beacons`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        floorId: selectedFloor,
        beaconId: beaconInfo.beaconId,
      }),
    }).then((res) => res.json());

    setTimeout(() => {
      console.log("Hello, World!");
      onComplete?.();
    }, 1000);
    return result;
  }

  createInfo();
}
