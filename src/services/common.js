import useFetch from "./../hook/useFetch";
import useFetchGeneral from "./../hook/useFetchGeneral";

export async function GetAllRoles(token) {
  const apiCall = await useFetch().get(`GetAllRoles`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}
export async function GetAllstatus() {
  const apiCall = await useFetchGeneral().get(`GetAllStatusDissertation`);
  return apiCall;
}
