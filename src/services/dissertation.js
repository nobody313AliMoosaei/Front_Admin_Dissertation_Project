import useFetch from "./../hook/useFetch";

export async function GetAllDissertation(token, pageNumber, pageSize) {
  console.log(pageNumber, " -", pageSize);
  const apiCall = await useFetch().get(
    `/GetAllDissertation?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
  const apiCall = await useFetch().post(
    `/ChangeDissertationStatus?DissertationId=${id}&Status=${status}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(apiCall);
  return apiCall;
}

export async function DownloadDissertation(token, addressFile) {
  const addressFile2 =
    "C:\\Inetpub\\vhosts\\doc-rajaee.ir\\httpdocs\\wwwroot\\AllFiles\\1402\\3ee288ca-95ad-477f-83b7-ee5102744a4f.jpg";
  const apiCall = await useFetch().post(
    "/Download",
    {
      FileAddress:
        "C:\\Inetpub\\vhosts\\doc-rajaee.ir\\httpdocs\\wwwroot\\AllFiles\\1402\\3ee288ca-95ad-477f-83b7-ee5102744a4f.jpg",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return apiCall;
}
