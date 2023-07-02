import httpClient from "./httpClient.js";

const url = 'services'

export const servicesApi = {

  getAll() {
    try {
      return httpClient.get(`${url}/getall`)
      .then(({ data }) => {
        return data = data.data.map(el => {
          return {
            id: el.id,
            custom: '',
            image: el.image,
            name: el.name,
            description: el.description,
            prev_description: el.prev_description,
            price: el.price,
            is_recommended: el.is_recommended
          }
        })
      });
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

  createService(data) {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("prev_description", data.prev_description)
    formData.append("description", data.description)
    formData.append("image", data.image)
    formData.append("price", data.price)
    formData.append("is_recommended", data.is_recommended)

    try {
      return httpClient({
        method: "post",
        url: `${url}/save`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(({data}) => {
        return data
      })
    } catch(err) {
      console.log(err)
    }
  },
  
  updateService(data) {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("prev_description", data.prev_description)
    formData.append("description", data.description)
    formData.append("image", data.image)
    formData.append("price", data.price)
    formData.append("is_recommended", data.is_recommended)

    try {
      return httpClient({
        method: "post",
        url: `${url}/edit/${data.id}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(({data}) => {
        return data
      })
    } catch(err) {
      console.log(err)
    }
  },
  
  delService(id) {
    try {
      return httpClient.post(`${url}/del/${id}`).then(({ data }) => {
        return data
      })
    } catch (err) {
      console.log(err)
    }
  }
}