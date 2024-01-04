import useFetch from "./../hook/useFetch";

export async function PostUserData({ userName, password }) {
  //reg-getinfo
  const apiCall = await useFetch().post("Login", {
    userName: userName,
    password: password,
  });
  return apiCall;
}
export async function GetRefreshToken(token) {
  const apiCall = await useFetch().get("/IsValidUser", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}
