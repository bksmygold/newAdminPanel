import axios from 'axios';



//========  VIP_Referrals  ====================================
export const getVipReferral = (vipId) => {
  return axios.post('/user/list',{
    filter:{
      "referral.type":vipId,
    }
  });
};

export const getVipReferralById = (id) => {
  return axios.get(`/user/${id}`);
};

export const postVipReferral = (data) => {
  return axios.post('/user/create', data);
};

export const updateVipReferral = ({ data, id }) => {
  return axios.patch(`/user/${id}`, data);
};

export const deleteVipReferral = (id) => {
  return axios.delete(`/user/${id}`);
};

//========  Sales_Referrals  ====================================
export const getSaleReferral = (saleId,saleAssociateId) => {
    return axios.post('/user/list',{
      filter:{
        "referral.type":[saleId,saleAssociateId]
      },

    });
  };

  export const getSaleReferralById = (id) => {
    return axios.get(`/user/${id}`);
  };
  
  export const postSaleReferral = (data) => {
    return axios.post('/user/create', data);
  };
  
  export const updateSaleReferral = ({ data, id }) => {
    return axios.patch(`/user/${id}`, data);
  };
  
  export const deleteSaleReferral = (id) => {
    return axios.delete(`/user/${id}`);
  };
  