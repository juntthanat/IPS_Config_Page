export default function EditFloorPlanInformation(
  selectedFloor,
  floorPlanFile,
  onComplete
) {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;

  const formData = new FormData();
  formData.append("file", floorPlanFile);

  console.log(floorPlanFile);

  const requestOptions = {
    method: "PUT",
    body: formData,
  };

  const editInfo = async () => {
    const result = await fetch(
      baseURL + `/floor-files/floorId/` + selectedFloor,
    )
      .then((res) => res.json())
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((res) => fetch(baseURL + `/files/` + res.fileId, requestOptions))
      .then((res) => res.json())
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    onComplete?.();

    return result;
  };

  editInfo();

  return <div></div>;
}
