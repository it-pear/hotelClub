import httpClient from "./httpClient.js";
// import store from '../store/store';
// import { doRegister } from "src/store/auth/actions.js";

// const store = useStore(); 
const url = ''

export const authApi = {

  doLogin(email, password) {
    try {
      return httpClient.post(`/login`, {
        email: email,
        password: password
      }).then(response => {
        let token = response.data.token
        let user = JSON.stringify(response.data.user)
        localStorage.setItem('token', token)
        localStorage.setItem('user', user)
        return !!response.data.user.role ? 'admin' : 'user'
      })
    } catch (err) {
      throw err
    }
  },

  doLogout() {
    localStorage.clear()
    window.location.reload()
  },

  doRegister(data) {
    const formData = new FormData()
    formData.append("name", data.username)
    formData.append("email", data.email)
    formData.append("password", data.password)
    try {
      return httpClient({
        method: "post",
        url: `/registration`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(response => {
        let token = response.data.token
        let user = JSON.stringify(response.data.user)
        localStorage.setItem('token', token)
        localStorage.setItem('user', user)

        return !!response.data.user.role ? 'admin' : 'user'  
      })
    } catch (err) {
      throw err
    }
  }

}