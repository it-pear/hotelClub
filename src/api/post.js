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
            apartType: el.type_id,
            square: el.square,
            deadline: el.deadline,
            layout: el.layout,
            numberStoreys: el.storeys,
            finishing: el.finishing,
            price: el.finishing,
            city: el.city_id,
            area: el.region,
            distanceSea: el.distance_id,
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
    formData.append("city", data.city)
    formData.append("region", data.region)
    formData.append("public_email", data.public_email)
    formData.append("public_phone", data.public_phone)
    formData.append("public_address", data.public_address)
    formData.append("url", data.url)
    formData.append("soc_wa", data.soc_wa)
    formData.append("soc_tg", data.soc_tg)
    formData.append("soc_inst", data.soc_inst)
    formData.append("description", data.description)

    try {
      return httpClient({
        method: "post",
        url: `${url}/update`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(({data}) => {
        // return data.data
        let formData = {}
        Object.keys(data.data).forEach(key => {
          if(data.data[key] === 'null' || data.data[key] === null) {
            formData[key] = null
          } else {
            formData[key] = data.data[key]
          }
        });
        return formData
      })
    } catch(err) {
      console.log(err)
    }
  },

  // id: 1,
  // custom: '',
  // image: 'https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-personal-personalization-profile-user-line-icon-vector-png-image_1984805.jpg',
  // name: 'Роскошные апартаменты в районе Авсаллар',
  // apartType: 'Новостройка',
  // square: '55.00 м2',
  // seadline: 'Сдана',
  // layout: '1+1',
  // numberStoreys: '1 из 9',
  // finishing: 'Чистовая',
  // price: 80000,
  // city: 'Аланья',
  // area: 'Авсаллар',
  // distanceSea: 1300,
  createPost(formData) {
    try {
      return httpClient.post(`${url}/create`, {
        
      }).then(({ data }) => {
        return data
      })
    } catch (err) {
      console.log(err)
    }
  },

  delPost(id) {
    try {
      return httpClient.post(`${url}/delete`, {
        id: id 
      }).then(({ data }) => {
        return data
      })
    } catch (err) {
      console.log(err)
    }
  }


}