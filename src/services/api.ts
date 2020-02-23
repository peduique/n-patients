import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'https://api.nutripad.com.br/api/v1/',
  headers: {
    'x-auth-token': getToken()
  }
});

export default api;
