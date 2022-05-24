import axios from "axios";
import querystring from 'query-string'

import apiConfig from "./apiConfig";

const axiosClient = axios.create({
    baseUrl: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: params => querystring.stringify({...params, api_key: apiConfig.api})
})

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response;
}, (error) => {
    throw error;
})

export default axiosClient;