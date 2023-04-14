import httpClient from "./httpClient.js";

const url = 'posts'

export const postsApi = {

  getAll() {
    try {
      return httpClient.get(`${url}/getall`)
      .then(({ data }) => {
        return data = data.map(el => {
          return {
            id: el.id,
            custom: '',
            image: el.image,
            name: el.name,
            apartType: el.type ? el.type.name : "",
            square: el.square,
            deadline: el.deadline,
            layout: el.layout ? el.layout.name : "",
            numberStoreys: el.storeys,
            finishing: el.finishing,
            price: el.price,
            city: el.city ? el.city.name : "",
            area: el.region ? el.region.name : "",
            distanceSea: el.distance ? el.distance.name : "",
          }
        })
      });
    } catch(err) {
      console.log(err)
    }
  },

  createPost(data) {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("category_id", data.category_id)
    formData.append("description", data.description)
    formData.append("image", data.image)
    formData.append("price", data.price)
    formData.append("is_recommended", data.is_recommended)
    formData.append("square", data.square)
    formData.append("deadline", data.deadline)
    formData.append("storeys", data.storeys)
    formData.append("finishing", data.finishing)
    formData.append("layout_id", data.layout_id)
    if (data.type_id !== null) {
      formData.append("type_id", data.type_id)
    }
    formData.append("city_id", data.city_id)
    formData.append("region_id", data.region_id)
    formData.append("distance_id", data.distance_id)

    for (let i = 0; i < data.images.length; i++) {
      formData.append(`images[${i}]`, data.images[i])
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