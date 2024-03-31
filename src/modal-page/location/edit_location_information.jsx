// export default function EditLocationInformation(
//   selectedLocation,
//   getLocationName,
//   getLocationGeoX,
//   getLocationGeoY,
//   onComplete
// ) {
//   const baseURL = `http://marco.cooldev.win:8080/api/v1`;

//   const data = {
//     name: getLocationName,
//     geoX: getLocationGeoX,
//     geoY: getLocationGeoY,
//   };
//   const requestOptions = {
//     method: "PUT",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//     body: JSON.stringify(data),
//   };

//   const editInfo = async () => {
//     const result = await fetch(
//       baseURL + `/locations/` + selectedLocation,
//       requestOptions
//     )
//       .then((res) => res.json())
//       .catch((error) => {
//         console.log(error);
//       });

//       onComplete?.();
//       return result;
//   };

//   editInfo();

//   return <div></div>;
// }
