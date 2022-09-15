import axios from 'axios';
//==============================
export const getMakingCharge = () => {
  return axios.post('/makingcharge/list', {
    options: {
      populate: [
        'supplier',
        'productType',
        {
          path: 'metalGroup',
          populate: 'metal',
        },
      ],
    },
  });
};

export const getMakingChargeById = (id) => {
  return axios.get(`/makingcharge/${id}`);
};

export const postMakingCharge = (data) => {
  return axios.post('/makingcharge/create', data);
};

export const updateMakingCharge = ({ data, id }) => {
  return axios.patch(`/makingcharge/update/${id}`, data);
};

export const deleteMakingCharge = (id) => {
  return axios.delete(`/makingcharge/delete/${id}`);
};
