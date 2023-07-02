import httpClient from "./httpClient.js";

const url = 'images'

export const imagesApi = {
  
  delImage(id) {
    try {
      httpClient.post(`${url}/del/${id}`)
    } catch (err) {
      throw err
    }
  }

}