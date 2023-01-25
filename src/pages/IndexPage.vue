<template>
  <q-page>
    <GeneralPage />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import GeneralPage from 'src/components/pages/home/GeneralPage'

export default defineComponent({
  name: 'IndexPage',
  components: {
    GeneralPage
  }
})
</script>
