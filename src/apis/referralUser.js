import axios from 'axios';
//==============================
export const getVipReferral = () => {
  return axios.post('/referral/list',{
    filter:{
      type:"6332cf4acc4242e5b392ab32"
    },
    options:{
      populate:"user"
    }
  });
};

export const getSaleReferral = () => {
    return axios.post('/referral/list',{
      filter:{
        type:["62de63f893c00e5343e8bb40","62de649e93c00e5343e8bb53"]
      },
      options:{
        populate:"user"
      }
    });
  };

export const getVipReferralById = (id) => {
  return axios.get(`/referralUser/${id}`);
};

export const postVipReferral = (data) => {
  return axios.post('/referralUser/create', data);
};

export const updateVipReferral = ({ data, id }) => {
  return axios.patch(`/referralUser/${id}`, data);
};

export const deleteVipReferral = (id) => {
  return axios.delete(`/referralUser/${id}`);
};
