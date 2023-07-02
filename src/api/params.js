import httpClient from "./httpClient.js";

export const paramsApi = {
    
  create(data) {
    try {
      const resp = httpClient.post(`${data.url}/save`, {
        name: data.name
      })
      return resp
    } catch(err) {
      throw err
    }
  },

  createCity(data) {
    try {
      const resp = httpClient.post(`${data.url}/save`, {
        name: data.name,
        city_id: data.city_id
      })
      return resp
    } catch(err) {
      throw err
    }
  },

  update(data) {
    try {
      const resp = httpClient.post(`${data.url}/edit/${data.id}`, {
        name: data.name
      })
      return resp
    } catch(err) {
      throw err
    }
  },

  del(data, id) {
    try {
      httpClient.post(`${data.url}/del/${id}`)
    } catch (err) {
      throw err
    }
  }

}