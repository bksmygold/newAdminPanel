import axios from "axios";
//=================================

export const getLoggedInUser = () => {
  return axios.get(`/user/@me`);
};

export const postUser = (data) => {
  return axios.post(`/user/create`, data);
};

export const updateUser = ({data,id}) => {
  return axios.patch(`/user/${id}`,data);
};

export const deleteUser = (id ) => {
  return axios.delete(`/user/${id}`);
};

export const getOrganisationUser = () => {
  return axios.post(`/user/list`, {
    options: {
      populate:"role"
    },
    filter: {
      userType:2
    }
  });
};

export const getUserById = (id) => {
  return axios.get(`/user/${id}`);
};