import useFetchGeneral from "./../hook/useFetchGeneral";
import useFetch from "./../hook/useFetch";

export async function GetReportSystemCount() {
  //reg-getinfo
  const apiCall = await useFetchGeneral().get("GetReportSystemCount");
  return apiCall;
}

export async function GetCollegeUni() {
  const apiCall = await useFetchGeneral().get(`/GetAllColleges`);
  return apiCall;
}

export async function AddNewCollege(token, title, dsr) {
  const apiCall = await useFetch().post(
    `/AddNewCollege`,
    {
      code: 0,
      title: title,
      dsr: dsr,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return apiCall;
}

export async function DeleteCollege(token, CollegeRef) {
  const apiCall = await useFetch().post(
    `/DeleteCollege?CollegeRef=${CollegeRef}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return apiCall;
}
