import axios from "axios";
const version = 1;
const axiosInstance = axios.create({
  baseURL: `http://doc-rajaee.ir/API/v${version}/Administrator`,
  // withCredentials: true,
});

export default axiosInstance;
