import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://api.petfinder.com/v2/';

const api: AxiosInstance = axios.create({ baseURL: BASE_URL });

export default api;
