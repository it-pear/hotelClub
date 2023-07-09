<template>
  <q-page>
    <GeneralPage />
    <HotDeals :posts="hotPosts" v-if="hotPosts" />
    <PropertyRental :categories="categories" />
    <BayRental :categories="categories" />
    <DocumentsSec />
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

const hotPosts = ref([])
const citys = ref(null)
const categories = ref(null)
const layouts = ref(null)
const types = ref(null)
const distances = ref(null)
const advantages = ref(null)
const properties = ref(null)

const getHotPosts = async () => {
  try {
    const resp = await postsApi.getFilterPosts({is_recommended: 1}); 
    hotPosts.value = resp.data
  } catch (err) {
    console.log(err)
  }
}

async function getData() {
  try {
    const resp = await pagesApi.getAll()
    advantages.value = resp.advantages
    categories.value = resp.categories
    citys.value = resp.citys
    properties.value = resp.properties
    types.value = resp.types
    distances.value = resp.distances
    layouts.value = resp.layouts
    
  } catch (err) {
    console.log(err)
  } 
}

onMounted(() => {
  getHotPosts()
  getData()
})

</script>
