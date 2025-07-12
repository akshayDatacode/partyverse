import axios from 'axios';
import { setupAxios } from '@/core/auth/AuthHelpers';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  timeout: 10000, // Set a timeout for requests
});

setupAxios(axiosInstance);

export default axiosInstance;