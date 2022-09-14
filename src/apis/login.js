import axios from "axios";
//=================================

export const validateLogin = (loginCredential) => {
  return axios.post(`/auth/validate`, loginCredential);
};

export const login = (data) => {
  return axios.post(`/auth/login`,data)
};

export const getLoggedInUser = () => { 
  return axios.get(`/user/@me`)
}
