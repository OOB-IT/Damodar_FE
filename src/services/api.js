import axios from 'axios';
import { baseUrl } from '../utils/config';

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProductCategories = () => api.get('/getProductCategories');
export const getProducts = (params) => api.get('/getProducts', { params });
export const getClientFeedbacks = (params) => api.get('/getFeedbacksForClientPage', { params });

export default api;
