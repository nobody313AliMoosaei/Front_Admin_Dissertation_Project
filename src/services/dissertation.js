import useFetch from "./../hook/useFetch";
import useFetchGeneral from "./../hook/useFetchGeneral";

export async function GetAllDissertation(
  token,
  pageNumber,
  pageSize,
  fullName = "",
  userName = "",
  title = ""
) {
  console.log(pageNumber, " -", pageSize);
  const apiCall = await useFetch().post(
    `/GetAllDissertation?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    {
      fullName: fullName,
      userName: userName,
      title: title,
    }
  );
  return apiCall;
}

export async function GetCollegeUni(token) {
  const apiCall = await useFetch().get(`/GetDissertationStatus`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}

export async function CahngeDissertationStatus(token, id, status) {
  console.log(token);
  const apiCall = await useFetch().post(
    `/ChangeDissertationStatus?DissertationId=${id}&StatusId=${status}`
  );
  console.log(apiCall);
  return apiCall;
}

export async function DownloadFile(FileAddress) {
  const apiCall = await useFetchGeneral().post(
    "/DownloadFile",
    {
      fileAddress: FileAddress,
    },
    {
      responseType: "arraybuffer",
    }
  );
  return apiCall;
}
// .replace(/\\/g, "\\\\"),
