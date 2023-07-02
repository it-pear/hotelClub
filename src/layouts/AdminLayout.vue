<template>
  <q-layout view="hhh lpR fFf" class="admin-layout">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Недвижимость
        </q-toolbar-title>

        <q-btn 
          label="Выйти" 
          outline 
          no-caps 
          rounded 
          color="white" 
          class="q-ml-auto" 
          padding="4px 10px"
          @click="onLogout"
        />
      </q-toolbar>

    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-tabs align="left" active-color="primary">
        <q-route-tab to="/admin/catalog" label="Недвижимость" />
        <q-route-tab to="/admin/services" label="Услуги" />
        <q-route-tab to="/admin/users" label="Пользователи" />
        <q-route-tab to="/admin/params" label="Общие параметры" />
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { authApi } from "src/api/auth"

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const onLogout = async () => {
  await authApi.doLogout()
}

</script>