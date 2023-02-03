<template>
  <q-page class="catalog">
    <div class="container row">
      <div class="col-12 col-md-3 sidebar-col">
        <SideBar />
      </div>
      <div class="col-12 col-md-9">
        <CatalogSec />
      </div>
    </div>

  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue'
import SideBar from 'src/components/pages/catalog/SideBar'
import CatalogSec from 'src/components/pages/catalog/CatalogSec'

export default defineComponent({
  name: 'CatalogPage',
  components: {
    SideBar,
    CatalogSec,
  }
})
</script>
