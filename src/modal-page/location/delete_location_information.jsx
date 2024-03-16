export default function DeleteLocationInformation(selectedLocation) {
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
    return await fetch(
      baseURL + `/locations/` + selectedLocation,
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => JSON.parse(JSON.stringify(res)))
      .catch((error) => console.log(error));
  };

  deleteInfo();

  return <div></div>;
}
