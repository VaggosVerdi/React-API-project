import axios from 'axios'

const creds = {
    username: import.meta.env.VITE_APP_API_USERNAME,
    password: import.meta.env.VITE_APP_API_PASSWORD
}
const API_SUBMIT_URL = import.meta.env.VITE_APP_API_SUBMIT_URL
const API_LOGIN_URL = import.meta.env.VITE_APP_API_LOGIN_URL

export const submitUserData = async (FormData, token) => {
    const authResponse = await axios.post(API_LOGIN_URL, creds)
    token = authResponse.data.token

    const response = await axios.post(API_SUBMIT_URL, FormData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    return response.data
}