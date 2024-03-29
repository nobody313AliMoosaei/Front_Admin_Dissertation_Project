import axiosInstance from "./../helper/axiosInatance";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";

const AxiosInstance = (router = null) => {
  axiosInstance.interceptors.request.use(
    function (config) {
      const cookies = new Cookies();
      const token = cookies.get("token");
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return error;
    }
  );
  axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      if (!error.response) {
        toast.warn("Network Error", {
          toastId: "id-network-error",
        });
      } else if (error.response.status === 500) {
        toast.warn("500 Internet server Error", {
          toastId: "id-code-500",
        });
      }

      //check status code with backend to handler it

      //  else if (error.response.status === 400) {
      //   toast.warn(error.response.message, {
      //     toastId: "id-code-400",
      //   });
      // } else if (error.response.status === 401) {
      //   toast.warn(error.response.message, {
      //     toastId: "id-code-400",
      //   });
      // }
      return error.response;
    }
  );
  return axiosInstance;
};

export default AxiosInstance;
