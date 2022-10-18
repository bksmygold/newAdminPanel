import { MergeTypeSharp } from '@mui/icons-material';
import axios from 'axios';
import dayjs from 'dayjs';
//==============================
export const getDashboardAnalytics = (from, to) => {
  return axios.get(`/dashboard/analytics/app?from=${dayjs(from).format('DD/MM/YYYY')}&to=${dayjs(to).format('DD/MM/YYYY')}`);
};

export const getDashboardOrders = (from, to) => {
  return axios.get(`/dashboard/analytics/orders?from=${dayjs(from).format('DD/MM/YYYY')}&to=${dayjs(to).format('DD/MM/YYYY')}`)
}

export const getDashboardPeople = (from, to, type) => {
  return axios.get(`/dashboard/analytics/peoples?from=${dayjs(from).format('DD/MM/YYYY')}&to=${dayjs(to).format('DD/MM/YYYY')}&type=${type}`)
}

export const getDashboardInvoice = (from,to) =>{
  return axios.get(`/dashboard/analytics/sale-purchases?from=${from}&to=${to}`)
}

export const getDashboardReceivables = (from,to) =>{
  return axios.get(`/dashboard/analytics/receivables?from=${from}&to=${to}`)
}

export const getDashboardSettlements = (from,to) =>{
  return axios.get(`/dashboard/analytics/settlements?from=${from}&to=${to}`)
}

export const getDashboardCommissions = (from,to) =>{
  return axios.get(`/dashboard/analytics/commissions?from=${from}&to=${to}`)
}

export const getDashboardCustody = (year) =>{
  return axios.get(`/dashboard/analytics/custody?year=${year}`)
}

