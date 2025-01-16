import axios from 'axios'

export const authenticateApi = axios.create({
    baseURL: 'https://test-api-y04b.onrender.com/'
})