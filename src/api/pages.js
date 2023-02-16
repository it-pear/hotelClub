import httpClient from "./httpClient.js";

const url = 'pages'

export const pagesApi = {

  getAll() {
    try {
      return httpClient.get(`${url}/post/single`)
      .then(({ data }) => {
        return data
      });
    } catch(err) {
      console.log(err)
    }
  },

}