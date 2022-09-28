import axios from 'axios';
//==============================
export const getVipReferral = (vipId) => {
  return axios.post('/referral/list',{
    filter:{
      type:vipId
    },
    options:{
      populate:"user"
    }
  });
};

export const getSaleReferral = (saleId,saleAssociateId) => {
    return axios.post('/referral/list',{
      filter:{
        type:[saleId,saleAssociateId]
      },
      options:{
        populate:"user"
      }
    });
  };

export const getVipReferralById = (id) => {
  return axios.get(`/user/${id}`);
};

export const postVipReferral = (data) => {
  return axios.post('/referralUser/create', data);
};

export const updateVipReferral = ({ data, id }) => {
  return axios.patch(`/user/${id}`, data);
};

export const deleteVipReferral = (id) => {
  return axios.delete(`/referral/${id}`);
};
