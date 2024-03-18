export default function FetchFloorPlanInformation(setFloorPlan, setCurrentFloorData, selectedFloor) {
  const baseURL = `http://marco.cooldev.win:8080/api/v1`;

  const fetchFloorPlan = async (floorPlanId) => {
    return await fetch(baseURL + `/files/` + floorPlanId)
      .then((res) => res.json())
      .then((res) => setFloorPlan(res.viewUrl));
  };

  const fetchInfo = async () => {
    return await fetch(baseURL + `/floor-files/floorId/` + selectedFloor)
      .then((res) => res.json())
      .then((res) => fetchFloorPlan(res.fileId));
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
