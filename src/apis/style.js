import axios from 'axios';
//==============================
export const getStyle = () => {
    return axios.post('/style/list', {
      options: {
        populate: [
          
          {
            path: 'metalGroup',
            populate: 'metal',
          },
        ],
      },
    });
};

export const getStyleById = (id) => {
  return axios.get(`/style/${id}`);
};

export const postStyle = (data) => {
  return axios.post('/style/create', data);
};

export const updateStyle = ({ data, id }) => {
  return axios.patch(`/style/${id}`, data);
};

export const deleteStyle = (id) => {
  return axios.delete(`/style/${id}`);
};
