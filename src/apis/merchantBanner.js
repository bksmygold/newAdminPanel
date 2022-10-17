import axios from 'axios';
//==============================
export const getMerchantBanner = () => {
  return axios.post('/merchantBanner/list', {
    options: {
      populate: 'style',
    },
  });
};



export const getMerchantBannerById = (id) => {
  return axios.get(`/merchantBanner/${id}`);
};

export const postMerchantBanner = (data) => {
  return axios.post('/merchantBanner/create', data);
};

export const updateMerchantBanner = ({ data, id }) => {
  return axios.patch(`/merchantBanner/${id}`, data);
};

export const deleteMerchantBanner = (id) => {
  return axios.delete(`/merchantBanner/${id}`);
};
