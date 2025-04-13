import axios from 'axios'

// Credentials from the .env file to login and obtain the token
const creds = {
    username: import.meta.env.VITE_APP_API_USERNAME,
    password: import.meta.env.VITE_APP_API_PASSWORD
}

// API URLs for submit and login from the .env file
const API_SUBMIT_URL = import.meta.env.VITE_APP_API_SUBMIT_URL
const API_LOGIN_URL = import.meta.env.VITE_APP_API_LOGIN_URL

// Function to obtain the token by logging in
// then submitting the data via POST
export const submitData = async (FormData, token) => {
    const authResponse = await axios.post(API_LOGIN_URL, creds)
    token = authResponse.data.token

    const response = await axios.post(API_SUBMIT_URL, FormData, {
        headers: {
            Authorization: `Bearer ${token}`, // Use of JWT authentication header 
            'Content-Type': 'application/json',
        }
    })
    return response.data
}