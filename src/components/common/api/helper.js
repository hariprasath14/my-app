import axios from "axios";



const appBaseURl = axios.create({
    baseURL: process.env.REACT_APP_ADMIN_API_BASEUR
})


export const getRegisterPlayers = async (url, data, config) => {
    return await appBaseURl.get(url, { ...data }, { ...config }).then((response) => {
        return response.data
    })
}
export const registerPlayers = async (url, data, config) => {
    return await appBaseURl.post(url, { ...data }, { ...config }).then((response) => {
        return response.data
    })
}