import axios from "axios";

export const apiInstance = axios.create({
  baseURL: 'https://384d3b6f8bbe0bb8.mokky.dev/api/',
  headers: {
    Authorization: 'Bear ${""}',
    "Content-Type": 'application/json',
  },
})

apiInstance.interceptors.response.use(undefined, function (error) {
  const status = error.response.status
  if (status >= 500) {
    return 'interceptors err 500'
  }
})