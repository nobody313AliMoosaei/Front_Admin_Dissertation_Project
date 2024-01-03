import useFetch from "./../hook/useFetch";

// export async function ExportExcel(TableID) {
//   const apiCall = await useFetch().get(`ExportExcel?TableID=${TableID}`);
//   return apiCall;
// }
export async function ExportExcel(TableID) {
  const apiCall = await useFetch().get(`ExportExcel?TableID=${TableID}`, {
    responseType: "arraybuffer",
  });
  return apiCall;
}
