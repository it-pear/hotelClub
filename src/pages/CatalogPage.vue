<template>
  <q-page class="catalog">
    <div class="container row">
      <div class="col-12 col-md-3 sidebar-col">
        <SideBar @getPosts="getPosts" />
      </div>
      <div class="col-12 col-md-9">
        <CatalogSec />
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import SideBar from 'src/components/pages/catalog/SideBar'
import CatalogSec from 'src/components/pages/catalog/CatalogSec'

const posts = ref([])

const getPosts = (val) => {
  posts.value = val
}

</script>
