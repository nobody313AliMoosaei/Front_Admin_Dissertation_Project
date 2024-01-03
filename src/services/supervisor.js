import useFetch from "./../hook/useFetch";
import useFetchGeneral from "./../hook/useFetchGeneral";

export async function GetAllTeachers(token) {
  const apiCall = await useFetch().get(`/GetAllTeachers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}

export async function GetCollegeUni(token) {
  const apiCall = await useFetchGeneral().get(`/GetAllColleges`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}

export async function AddNewTeacher(token, data) {
  const apiCall = await useFetch().post(
    `/AddNewTeacher?`,
    {
      firstName: data.firstName,
      lastName: data.lastName,
      nationalCode: data.nationalCode,
      userName: data.userName,
      collegRef: Number(data.collegRef),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return apiCall;
}

export async function GetUserById(id) {
  const apiCall = await useFetchGeneral().post(`/GetUserById?UserId=${id}`);
  return apiCall;
}

export async function UpdateTeacher(token, data, id) {
  const apiCall = await useFetch().put(
    `/UpdateTeacher?TeacherId=${Number(id)}`,
    {
      firstName: data.firsName,
      lastName: data.lastName,
      nationalCode: data.nationalCode,
      userName: data.userName,
      college: "",
      collegRef: Number(data.collegeRef),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return apiCall;
}

export async function GetTeachersByCollegeRef(token, CollegeRef) {
  const apiCall = await useFetch().get(
    `/GetTeachersByCollegeRef?CollegeRef=${CollegeRef}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return apiCall;
}
