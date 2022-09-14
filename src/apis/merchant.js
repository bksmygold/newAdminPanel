import axios from "axios";
//==============================
export const getMerchant = () => {
  return axios.post("/merchant/list");
};

export const getMerchantById = (id) => {
  return axios.get(`/merchant/${id}`);
};

export const postMerchant = (data) => {
  return axios.post("/merchant/create", data);
};

export const updateMerchant = ({ data, id }) => {
  return axios.put(`/merchant/${id}`, data);
};

export const deleteItem = (id) => {
  return axios.delete(`/merchant/${id}`);
};
