import axios from "axios";

const logOut = () => {
  localStorage.clear()
  window.location.href = '/'
}

const config = {
  baseURL: "https://back.vivamentehome.com/api/"
  // baseURL: "https://back.vivamentehome.com/" https://back.vivamentehome.com
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
