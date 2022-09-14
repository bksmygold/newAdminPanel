import axios from "axios";
//=================================

export const getLoggedInUser = () => {
  return axios.get(`/user/@me`);
};

export const updateUser = ({data,id}) => {
  return axios.patch(`/user/${id}`,data);
};

export const getUserById = (id) => {
  return axios.get(`/user/${id}`);
};