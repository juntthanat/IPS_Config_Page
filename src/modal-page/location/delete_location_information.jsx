// export default function DeleteLocationInformation(selectedLocation, onComplete) {
//   const baseURL = `http://marco.cooldev.win:8080/api/v1`;
//   const requestOptions = {
//     method: "DELETE",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   };

//   const deleteInfo = async () => {
//     const result = await fetch(
//       baseURL + `/locations/` + selectedLocation,
//       requestOptions
//     )
//       .then((res) => res.json())
//       .then((res) => JSON.parse(JSON.stringify(res)))
//       .catch((error) => console.log(error));

//       onComplete?.();
//       return result;
//   };

//   deleteInfo();

//   return <div></div>;
// }
