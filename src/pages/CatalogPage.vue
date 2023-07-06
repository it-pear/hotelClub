<template>
  <q-page class="catalog">
    <div class="container row">
      <div class="col-12 col-md-3 sidebar-col">
        <SideBar 
          @getPosts="getPosts" 
          :updatePagination="pagination.current_page" 
        />
      </div>
      <div class="col-12 col-md-9">
        <CatalogSec 
          :posts="posts" 
          :pagination="pagination" 
          @updatePagination="updatePagination" 
          v-if="posts" 
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import SideBar from 'src/components/pages/catalog/SideBar'
import CatalogSec from 'src/components/pages/catalog/CatalogSec'

const posts = ref([])
const pagination = ref({})

const updatePagination = (newPage) => {
  pagination.value.current_page = newPage
}

const getPosts = (data) => {
  posts.value = data.posts
  pagination.value = data.pagination
}

</script>
