import axios from 'axios';
//==============================
export const getDashboardAnalytics = () => {
  return axios.get('/dashboard/analytics/app?from=03/10/2022&to=04/12/2022');
};

