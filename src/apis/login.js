import axios from "axios";
//=================================
export const login = (loginCredential) => {
  return axios.post(`/auth/login`, loginCredential);
};
