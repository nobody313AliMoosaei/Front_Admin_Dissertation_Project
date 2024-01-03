import useFetch from "./../hook/useFetch";

export async function GetAllUser(
  token,
  pageNumber,
  pageSize,
  fullName = "",
  userName = "",
  title = ""
) {
  const apiCall = await useFetch().post(
    `/GetAllUser?PageNumber=${pageNumber}&PageSize=${pageSize}`,
    { fullName: fullName, userName: userName, title: title },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return apiCall;
}

export async function GetAllRoles(token) {
  const apiCall = await useFetch().get(`GetAllRoles`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}

export async function GetUserById(id) {
  const apiCall = await useFetch().get(`GetUserById?UserId=${id}`);
  return apiCall;
}

export async function DeActiveUser(token, UserId) {
  const apiCall = await useFetch().put(`/DeActiveUser?UserId=${UserId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}

export async function GetCollegeUni(token) {
  const apiCall = await useFetch().get(`/GetCollegeUni`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}

export async function AddNewUser(token, data) {
  // const formData = new FormData();
  // formData.append("firstName", data.firstName);
  // formData.append("lastName", data.lastName);
  // formData.append("nationalCode", data.nationalCode);
  // formData.append("userName", data.userName);
  // formData.append("collegeRef", data.CollegeRef);
  // formData.append("teacher1_Ref", data.Teacher_1);

  const apiCall = await useFetch().post(
    `/AddNewUser?Role=2`,
    {
      firstName: data.firstName,
      lastName: data.lastName,
      nationalCode: data.nationalCode,
      userName: data.userName,
      collegeRef: Number(data.CollegeRef),
      teacher1_Ref: data.Teacher_1,
      phoneNumber: "123",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return apiCall;
}

export async function UpdateUser(token, data, id) {
  // const formData = new FormData();
  // formData.append("firstName", data.firstName);
  // formData.append("lastName", data.lastName);
  // formData.append("nationalCode", data.nationalCode);
  // formData.append("userName", data.userName);
  // formData.append("collegeRef", data.CollegeRef);
  // formData.append("teacher1_Ref", data.Teacher_1);
  console.log(data);
  const apiCall = await useFetch().put(
    `/UpdateUser`,
    {
      userId: Number(id),
      firstName: data.firsName,
      lastName: data.lastName,
      nationalCode: data.nationalCode,
      userName: data.userName,
      collegeRef: Number(data.collegeRef),
      teacher1_Ref: Number(data.teachersName),
      teacher2_Ref: 0,
      teacher3_Ref: 0,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return apiCall;
}
