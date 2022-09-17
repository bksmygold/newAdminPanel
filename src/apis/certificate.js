import axios from 'axios';
//==============================
export const getCertificate = () => {
  return axios.post('/certificate/list');
};

export const getCertificateById = (id) => {
  return axios.get(`/certificate/${id}`);
};

export const postCertificate = (data) => {
  return axios.post('/certificate/create', data);
};

export const updateCertificate = ({ data, id }) => {
  return axios.patch(`/certificate/${id}`, data);
};

export const deleteCertificate = (id) => {
  return axios.delete(`/certificate/${id}`);
};
