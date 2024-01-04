import useFetch from "./../hook/useFetch";
import useFetchGeneral from "./../hook/useFetchGeneral";

export async function GetUserInRole(token, RoleRef) {
  const apiCall = await useFetch().get(`/GetUserInRole?RoleRef=${RoleRef}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}

export async function AddNewUser(token, data, RoleRef) {
  // const formData = new FormData();
  // formData.append("firstName", data.firstName);
  // formData.append("lastName", data.lastName);
  // formData.append("nationalCode", data.nationalCode);
  // formData.append("userName", data.userName);
  // formData.append("collegeRef", data.CollegeRef);
  // formData.append("teacher1_Ref", data.Teacher_1);

  const apiCall = await useFetch().post(
    `/AddNewUser?Role=${RoleRef}`,
    {
      firstName: data.firstName,
      lastName: data.lastName,
      nationalCode: data.nationalCode,
      userName: data.userName,
      collegeRef: Number(data.collegeRef),
      teacher1_Ref: data.Teacher_1,
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
