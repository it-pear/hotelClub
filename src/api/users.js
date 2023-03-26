import httpClient from "./httpClient.js";

const url = 'users'

export const userApi = {

  getAll() {
    try {
      return httpClient.get(`${url}/getall`)
      .then(({ data }) => {
        return data
      })
    } catch(err) {
      console.log(err)
    }
  },

  getById(id) {
    try {
      return httpClient.get(`${url}/${id}`)
      .then(({ data }) => {
        return data
      });
    } catch(err) {
      console.log(err)
    }
  },
  
  delUser(id) {
    try {
      return httpClient.post(`${url}/del/${id}`).then(({ data }) => {
        return data
      })
    } catch (err) {
      console.log(err)
    }
  }

}