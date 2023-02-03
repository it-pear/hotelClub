<template>
  <q-layout
    view="hhh LpR fff"
    class="window-height window-width row justify-center items-center auth-layout"

  >

    <q-page-container >
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    
    return {

    }
  }
}
</script>