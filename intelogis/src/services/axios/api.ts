import axios, {AxiosInstance} from 'axios';
import {BASE_URL, REQUEST_TIMEOUT} from '../../consts/axios';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    });
  return api;
}