import axios from "axios";


const getAuthKey = () => {
    let data;
    try {
        data = JSON.parse(localStorage.getItem("tmtData"))
    } catch {
        data = null
    }
    return data?.token || ""
}

const appBaseURl = axios.create({
    baseURL: process.env.REACT_APP_ADMIN_API_BASEUR,
})


export const tmntGetApi = async (url, config) => {
    return await appBaseURl.get(url, { ...config, headers: { "authkey": getAuthKey() } }).then((response) => {
        return response.data
    })
}
export const tmntPostApi = async (url, data, config) => {
    return await appBaseURl.post(url, { ...data }, { ...config, headers: { "authkey": getAuthKey() } }).then((response) => {
        return response.data
    })
}
export const appAuthApi = async (url, data, config) => {
    return await appBaseURl.post(url, { ...data }, { ...config, headers: { "authkey": getAuthKey() } }).then((response) => {
        return response.data
    })
}