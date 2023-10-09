<template>
  <q-page>
    <GeneralPage
      :layouts="layouts"
    />
    <HotDeals :posts="hotPosts" v-if="hotPosts" />

    <BayRental :categories="categories1" />
    <PropertyRental :categories="categories" />
    <DocumentsSec :services="services" />
    <div class="container q-pt-lg">
      <FormPerson />
    </div>
    <TeamSec />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import GeneralPage from 'src/components/pages/home/GeneralPage'
import HotDeals from 'src/components/pages/home/HotDeals'
import PropertyRental from 'src/components/pages/home/PropertyRental'
import BayRental from 'src/components/pages/home/BayRental'
import DocumentsSec from 'src/components/pages/home/DocumentsSec'
import TeamSec from 'src/components/pages/home/TeamSec'
import FormPerson from 'src/components/FormPerson'
import { postsApi } from 'src/api/post'
import { pagesApi } from 'src/api/pages'
import { servicesApi } from 'src/api/services'

const hotPosts = ref([])
const categories1 = ref(null)
const categories = ref(null)
const services = ref([])
const layouts = ref(null)

const getHotPosts = async () => {
  try {
    const resp = await postsApi.getFilterPosts({is_recommended: 1})
    hotPosts.value = resp.data
  } catch (err) {
    console.log(err)
  }
}

const getServices = async () => {
  try {
    await servicesApi.getAll().then(resp => {
      services.value = resp
    })
  } catch (err) {
    console.log(err)
    alertError()
  }
}

async function getData() {
  try {
    const resp = await pagesApi.getAll()
    layouts.value = resp.layouts
    categories.value = resp.categories
    categories1.value = resp.categories
    const newCategories = resp.categories.map((category, index) => ({
      ...category,
      image: `images/house${index + 1}.jpg`
    }))
    categories1.value = newCategories
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getHotPosts()
  getData()
  getServices()
})

</script>
