import axios from 'axios';
//==============================
export const getFaq = (app) => {
  return axios.post('/faq/list', {
    filter: {
      app
    }
  });
};

export const getFaqById = (id) => {
  return axios.get(`/faq/${id}`);
};

export const postFaq = (data) => {
  console.log("payload--- ",data)
  return axios.post('/faq/create', data);
};

export const updateFaq = ({ data, id }) => {
  return axios.patch(`/faq/${id}`, data);
};

export const deleteFaq = (id) => {
  return axios.delete(`/faq/${id}`);
};
