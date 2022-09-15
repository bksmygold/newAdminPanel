import axios from 'axios';
//==============================
export const getLoanInterest = () => {
  return axios.post('/loaninterest/list');
};

export const getLoanInterestById = (id) => {
  return axios.get(`/loaninterest/${id}`);
};

export const postLoanInterest = (data) => {
  return axios.post('/loaninterest/create', data);
};

export const updateLoanInterest = ({ data, id }) => {
  return axios.patch(`/loaninterest/update/${id}`, data);
};

export const deleteLoanInterest = (id) => {
  return axios.delete(`/loaninterest/delete/${id}`);
};
