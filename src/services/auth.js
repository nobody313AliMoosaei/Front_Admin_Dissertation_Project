import useFetch from "./../hook/useFetch";

export async function PostUserData({ userName, password }) {
  //reg-getinfo
  const apiCall = await useFetch().post("Login", {
    userName: userName,
    password: password,
  });
  return apiCall;
}
