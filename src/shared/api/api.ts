import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

export const axiosInstance = axios.create({
    baseURL: __API_BASE_URL__,
});

axiosInstance.interceptors.request.use(config => {
    if (config.headers) {
        config.headers.authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? '';
    }
    return config;
});
