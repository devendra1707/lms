import { myAxios } from "./helper";

export const signUpUser = (id, user) => {
  return myAxios
    .post(`auth/register?id=${id}`, user)
    .then((response) => response.data);
};

export const loginUser = (loginDetail) => {
  return myAxios
    .post("auth/login", loginDetail)
    .then((response) => response.data);
};

// To Test The Api is Working Or not
export const testApi = () => {
  return myAxios.get(`test`).then((response) => {
    return response.data;
  });
};
