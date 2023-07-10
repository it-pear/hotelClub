import httpClient from "./httpClient.js";

const url = 'posts'

function buildQuery(params) {
  let queryParams = new URLSearchParams()
  for (let key in params) {
    let value = params[key]
    if (key === 'id' && value !== null && value !== '') {
      value = Number(value)
    }
    if (Array.isArray(value)) { // Если значение является массивом
      value.forEach(val => queryParams.append(`${key}[]`, val))
    } else if (value !== null && value !== '') { // Если значение не null и не пустая строка
      queryParams.append(key, value)
    }
  }
  return queryParams.toString()
}

export const postsApi = {

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

  async getFilterPosts(fields) {
    let query = buildQuery(fields)
    try {
      const resp = await httpClient.get(`${url}/getparams/get?${query}`)
      return resp.data
    } catch (err) {
      throw err
    }
  },

  getById(id) {
    try {
      return httpClient.get(`${url}/${id}`)
      .then(({ data }) => {
        return data
      })
    } catch(err) {
      console.log(err)
    }
  },

  async getRecommendedPosts() {
    try {
      const resp = await httpClient.get(`${url}/getall/recommended`)
    } catch (err) {
      throw err
    }
  },

  createPost(data) {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("category_id", data.category_id)
    if (data.description) formData.append("description", data.description)
    if (typeof(data.image) === 'object') formData.append("image", data.image)
    formData.append("price", data.price)
    formData.append("is_recommended", data.is_recommended)
    formData.append("square", data.square)
    formData.append("deadline", data.deadline)
    formData.append("storeys", data.storeys)
    formData.append("sale", data.sale)
    formData.append("finishing", data.finishing)
    formData.append("layout_id", data.layout_id)
    if (data.type_id !== null) {
      formData.append("type_id", data.type_id)
    }
    formData.append("city_id", data.city_id)
    formData.append("region_id", data.region_id)
    formData.append("distance_id", data.distance_id)

    for (let i = 0; i < data.images.length; i++) {
      if (typeof(data.image) === 'object') formData.append(`images[${i}]`, data.images[i])
    }
    for (let i = 0; i < data.properties.length; i++) {
      if (data.properties.length) formData.append(`properties[${i}]`, data.properties[i])
    }
    for (let i = 0; i < data.advantages.length; i++) {
      if (data.advantages.length) formData.append(`advantages[${i}]`, data.advantages[i])
    }

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
  
  updatePost(data, images) {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("category_id", data.category_id)
    if (data.description) formData.append("description", data.description)
    if (typeof(data.image) === 'object') formData.append("image", data.image)
    formData.append("price", data.price)
    formData.append("is_recommended", data.is_recommended)
    formData.append("square", data.square)
    formData.append("sale", data.sale)
    if (data.deadline) formData.append("deadline", data.deadline)
    formData.append("storeys", data.storeys)
    formData.append("finishing", data.finishing)
    formData.append("layout_id", data.layout_id)
    if (data.type_id !== null) {
      formData.append("type_id", data.type_id)
    }
    formData.append("city_id", data.city_id)
    formData.append("region_id", data.region_id)
    formData.append("distance_id", data.distance_id)

    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        formData.append(`images[${i}]`, images[i])
      }
    }
    for (let i = 0; i < data.properties.length; i++) {
      if (data.properties.length) formData.append(`properties[${i}]`, typeof(data.properties[i]) === 'object' ? data.properties[i].id : data.properties[i])
    }
    for (let i = 0; i < data.advantages.length; i++) {
      if (data.advantages.length) formData.append(`advantages[${i}]`, typeof(data.advantages[i]) === 'object' ? data.advantages[i].id : data.advantages[i])
    }
    

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
  
  delPost(id) {
    try {
      return httpClient.post(`${url}/del/${id}`).then(({ data }) => {
        return data
      })
    } catch (err) {
      throw err
    }
  }

}