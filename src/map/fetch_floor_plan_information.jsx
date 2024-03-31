export default function FetchFloorPlanInformation(
    setFloorPlan,
    setCurrentFloorData,
    selectedFloor,
    onComplete
) {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;

  const fetchFloorPlan = async (floorPlanId) => {
    return await fetch(
      baseURL + `/files/` + floorPlanId,
      {
        cache: "no-cache",
      }
    )
      .then((res) => res.json())
      .then((res) => setFloorPlan(res));
  };

  const fetchInfo = async () => {
    const result = await fetch(
      baseURL + `/floor-files/floorId/` + selectedFloor
    )
      .then((res) => res.json())
      .then((res) => fetchFloorPlan(res.fileId));

    onComplete?.();
    return result;
  };

  const fetchCurrentFloorInfo = async () => {
    return await fetch(baseURL + `/floors/` + selectedFloor)
      .then((res) => res.json())
      .then((res) => setCurrentFloorData(res));
  };

  fetchInfo();
  fetchCurrentFloorInfo();

  return <div></div>;
}
