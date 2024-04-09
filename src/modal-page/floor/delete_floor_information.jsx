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

  // const deleteLocation = async (index) => {
  //   return await fetch(baseURL + `/locations/` + index, requestOptions)
  //     .then((res) => res.json())
  //     .then((res) => JSON.parse(JSON.stringify(res)));
  // };
  const deleteBeacon = async (index) => {
    return await fetch(baseURL + `/beacons/` + index, requestOptions).then(
      (res) => res.json()
    );
  };
  const deleteFloorPlan = async (index) => {
    return await fetch(baseURL + `/files/` + index, requestOptions).then(
      (res) => res.json()
    );
  };
  const deleteFloor = async (index) => {
    return await fetch(baseURL + `/floors/` + index, requestOptions)
      .then((res) => res.json())
      .then((res) => JSON.parse(JSON.stringify(res)));
  };

  const deleteInfo = async () => {
    const result = await fetch(
      baseURL + `/floor-beacons/floorId/` + selectedFloor
    ).then((res) => res.json());

    if (result.length > 0) {
      for (let beaconIndex = 0; beaconIndex < result.length; beaconIndex++) {
        deleteBeacon(result[beaconIndex].beaconId);
      }
      deleteFloor(selectedFloor);
    }

    const getFileId = await fetch(
      baseURL + `/floor-files/floorId/` + selectedFloor
    ).then((res) => res.json());

    if (getFileId.fileId != undefined) {
      deleteFloorPlan(getFileId.fileId);
      deleteFloor(selectedFloor);
    }

    onComplete?.();
    return result;
  };

  deleteInfo();
}
