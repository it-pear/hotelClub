<template>
  <q-page>
    <GeneralPage />
    <HotDeals :posts="hotPosts" v-if="hotPosts" />
    <PropertyRental :categories="categories" />
    <BayRental :categories="categories" />
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
const categories = ref(null)
const services = ref([])

const getHotPosts = async () => {
  try {
    const resp = await postsApi.getFilterPosts({is_recommended: 1}); 
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

    categories.value = resp.categories

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
