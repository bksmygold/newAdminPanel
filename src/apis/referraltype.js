import axios from "axios";
//==============================
export const getReferralType = () => {
  return axios.post("/referralType/list");
};

export const getReferralTypeById = (id) => {
  return axios.get(`/referralType/${id}`);
};

export const postReferralType = (data) => {
  return axios.post("/referralType/create", data);
};

export const updateReferralType = ({ data, id }) => {
  return axios.put(`/referralType/update/${id}`, data);
};

export const deleteReferralType = (id) => {
  return axios.delete(`/referralType/delete/${id}`);
};
