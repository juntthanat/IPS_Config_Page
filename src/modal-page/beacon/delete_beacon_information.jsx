export default function DeleteBeaconInformation(selectedBeacon, onComplete) {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;
  const requestOptions = {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const deleteInfo = async () => {
    const result = await fetch(baseURL + `/beacons/` + selectedBeacon, requestOptions)
        .then((res) => res.json())
    if(result.message != undefined){
      alert(result.message);
    }

        onComplete?.();
        return result;
  };

  deleteInfo();
}
