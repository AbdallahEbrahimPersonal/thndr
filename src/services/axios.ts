import baseAxios, { AxiosInstance } from 'axios';
import { POLYGON_API_KEY, POLYGON_API_URL } from '@env';
import { handleError } from '@/services/error-handler';
import { identity } from '../utils/helpers';

const axios: AxiosInstance = baseAxios.create({
  baseURL: POLYGON_API_URL,
});

axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${POLYGON_API_KEY}`;
  return config;
});

axios.interceptors.response.use(identity, handleError);

export default axios;
