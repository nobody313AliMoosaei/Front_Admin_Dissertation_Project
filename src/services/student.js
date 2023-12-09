import useFetch from "./../hook/useFetch";

export async function GetAllUser(token, value = 1) {
  const apiCall = await useFetch().get(`/GetAllUser`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}

export async function GetAllRoles(token) {
  const apiCall = await useFetch().get(`/GetAllRoles`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}

export async function FindUser(token, UNE = "3981231095") {
  const apiCall = await useFetch().get(`/FindUser?UNE=${UNE}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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
