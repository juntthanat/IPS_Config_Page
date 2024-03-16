export default function DeleteFloorInformation(selectedFloor) {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;
//   const data = {
//     floorId: selectedFloor,
//   };
  const requestOptions = {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    // body: JSON.stringify(data),
  };

  const deleteInfo = async () => {
    return await fetch(baseURL + `/floors/` + selectedFloor, requestOptions)
        .then((res) => res.json())
        // .then((res) => JSON.parse(JSON.stringify(res)))
        .catch((error) => console.log(error))
  };

  deleteInfo();

  return <div></div>;
}
