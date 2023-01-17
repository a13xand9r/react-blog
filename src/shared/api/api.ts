import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

export const axiosInstance = axios.create({
    baseURL: __API_BASE_URL__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    },
});
