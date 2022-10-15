import axios from 'axios';
//==============================
export const getDashboardAnalytics = (from,to) => {
  // return axios.get('/dashboard/analytics/app?from=03/10/2022&to=04/12/2022');
  return axios.get(`/dashboard/analytics/app?from=${from}&to=${to}`);
};