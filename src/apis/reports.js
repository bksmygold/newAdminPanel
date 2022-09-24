import axios from "axios"

export const getBuySaveReport = ()=>{
    return axios.post("/reports/buy-save")
}