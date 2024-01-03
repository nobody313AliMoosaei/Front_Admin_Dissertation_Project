import axios from "axios";
const axiosInstance = axios.create({
  baseURL: `http://doc-rajaee.ir/API/General/`,
  // withCredentials: true,
});

export default axiosInstance;
