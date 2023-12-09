import useFetch from "./../hook/useFetch";

export async function GetAllTeachers(token) {
  const apiCall = await useFetch().get(`/GetAllTeachers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}
