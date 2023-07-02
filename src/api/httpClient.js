import axios from "axios";

const logOut = () => {
  localStorage.clear()
  window.location.href = '/'
}

const config = {
  baseURL: "http://127.0.0.1:8000/api/"
  // baseURL: "http://62.217.177.152/api/"
}

const httpClient = axios.create(config)

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)
  
httpClient.interceptors.response.use(function (response) {
  return response
}, function (error) {
  const err = error.response.status

  const originalRequest = error.config
  if (originalRequest && !originalRequest._isRetry) {
    originalRequest._isRetry = true

    if(err === 401) {
      console.log('Неавторизован')
      logOut() 
    }
    if(err === 403) {
      console.log('Нет доступа')
    }
    if(err === 404) {
      console.log('Не найдено')
    }
  }
  return Promise.reject(error)
})


export default httpClient