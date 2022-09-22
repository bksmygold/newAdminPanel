import axios from "axios";

export const  getRejectReason =() => {
    return axios.post("/rejectReason/list")
}
export const postRejectReason = (values) =>{
    return axios.post('/rejectReason/create',values)
}
export const updateRejectReason = ({values,id}) =>{
    return axios.patch(`/rejectReason/${id}`,values)
}
export const deleteRejectReason = (id) =>{
    return axios.delete(`/rejectReason/${id}`)
}