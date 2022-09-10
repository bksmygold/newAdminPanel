import axios from "axios";
//==============================
export const getFaq = () => {
  return axios.post("/faq/list");
};

export const getFaqById = (id) => {
  return axios.get(`/faq/${id}`);
};

export const postFaq = (data) => {
  return axios.post("/faq/create", data);
};

export const updateFaq = ({ data, id }) => {
  return axios.put(`/faq/update/${id}`, data);
};

export const deleteFaq = (id) => {
  return axios.delete(`/faq/delete/${id}`);
};
