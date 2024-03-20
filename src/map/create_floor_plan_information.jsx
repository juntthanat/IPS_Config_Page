export default function CreateFloorPlanInformation(
  selectedFloor,
  floorPlanFile
) {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;

  const formData = new FormData();
  formData.append("file", floorPlanFile);

  const requestOptions = {
    method: "POST",
    body: formData,
  };

  const createInfo = async () => {
    const result = await fetch(baseURL + `/files`, requestOptions)
      .then((res) => res.json())
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((res) =>
        fetch(baseURL + `/floor-files`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            floorId: selectedFloor,
            fileId: res.fileId,
          }),
        })
      )
      .then((res) => res.json())
      .catch((error) => console.log(error));

    return result;
  };

  createInfo();

  return <div></div>;
}
