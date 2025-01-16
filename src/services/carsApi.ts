import axios from 'axios'

export const carsApi = axios.create({
    baseURL: 'https://parallelum.com.br/fipe/api/v1/carros'
})