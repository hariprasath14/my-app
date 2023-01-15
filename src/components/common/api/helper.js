import axios from "axios";



const appBaseURl = axios.create({
    baseURL: process.env.REACT_APP_ADMIN_API_BASEUR
})


export const tmntGetApi = async (url, config) => {
    return await appBaseURl.get(url, { ...config }).then((response) => {
        return response.data
    })
}
export const tmntPostApi = async (url, data, config) => {
    return await appBaseURl.post(url, { ...data }, { ...config }).then((response) => {
        return response.data
    })
}
export const appAuthApi = async (url, data, config) => {
    return await appBaseURl.post(url, { ...data }, { ...config }).then((response) => {
        return response.data
    })
}