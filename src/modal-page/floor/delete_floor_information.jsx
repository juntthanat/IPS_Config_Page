export default function DeleteFloorInformation(selectedFloor, onComplete) {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;
  const requestOptions = {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const deleteLocation = async (index) => {
    return await fetch(baseURL + `/locations/` + index, requestOptions)
      .then((res) => res.json())
      .then((res) => JSON.parse(JSON.stringify(res)));
  };
  const deleteBeacon = async (index) => {
    return await fetch(baseURL + `/beacons/` + index, requestOptions)
      .then((res) => res.json())
      .then((res) => JSON.parse(JSON.stringify(res)));
  };
  const deleteFloor = async (index) => {
    return await fetch(baseURL + `/floors/` + index, requestOptions)
      .then((res) => res.json())
      .then((res) => JSON.parse(JSON.stringify(res)));
  };

  const deleteInfo = async () => {
    const result = await fetch(
      baseURL + `/floor-locations/floorId/` + selectedFloor
    )
      .then((res) => res.json())
      .then((res) => {
        for (
          let locationIndex = 0;
          locationIndex < res.length;
          locationIndex++
        ) {
          deleteLocation(res[locationIndex].locationId);
        }
      })
      .then(() =>
        fetch(baseURL + `/floor-beacons/floorId/` + selectedFloor)
          .then((res) => res.json())
          .then((res) => {
            for (let beaconIndex = 0; beaconIndex < res.length; beaconIndex++) {
              deleteBeacon(res[beaconIndex].beaconId);
            }
          })
      )
      .then(deleteFloor(selectedFloor));

    onComplete?.();
    return result;
  };

  deleteInfo();

  return <div></div>;
}
