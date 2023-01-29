<template>
  <q-layout view="hhh LpR fff">
    
    <q-header class="my-header" height-hint="98" style="border-bottom: 1px solid #eceff1;">
      <q-toolbar class="toolbar-info bg-blue-grey-1">
          <div class="row container">
            <div class="col-xs-12 col-sm-9 col-md-9">
              <a 
                href="tel:89999999999" 
                class="phone text-body2 text-weight-medium text-blue-grey-13"
              >
                8 (999) 999 99-99
              </a>
              <a 
                href="mailto:example@gmail.com" 
                class="phone text-body2 text-weight-medium text-blue-grey-13 q-ml-lg"
              >
                example@gmail.com
              </a>
            </div>

            <div class="col-xs-12 col-sm-3 col-md-3 flex justify-end">
              <q-btn flat round color="primary" icon="telegram" />
              <q-btn flat round color="primary" icon="telegram" />
              <q-btn flat round color="primary" icon="telegram" />
            </div>
          </div>
      </q-toolbar>

      <q-toolbar class="bg-white text-blue-grey-13 toolbar-head" color="blue-grey-13" style="min-height: 80px;">
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->
          <div class="container">
            <q-toolbar-title>
              <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
              </q-avatar>
            </q-toolbar-title>

            <q-tabs align="left" class="tabs-link">
              <q-route-tab
                v-for="link in routes"
                :key="link"
                :to="link.link"
                :label="link.name"
              />
            </q-tabs>
            <q-btn 
              unelevated rounded color="primary" 
              label="Войти" 
              icon="svguse:icons/allIcons.svg#phone" 
              class="q-ml-auto btn-reverse-il-mb" 
            />
            <q-btn 
              unelevated rounded color="primary" 
              label="Войти" 
              icon="svguse:icons/allIcons.svg#user" 
              class="q-ml-sm btn-reverse-il-mb" 
            />
            
            <q-btn 
              dense 
              flat 
              round 
              color="primary"
              icon="menu" 
              class="mb-visible"
              @click="toggleRightDrawer" 
            />
          </div>
        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>

      
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <q-tabs align="left" class="tabs-link text-dark">
        <q-route-tab
          v-for="link in routes"
          :key="link"
          :to="link.link"
          :label="link.name"
        />
      </q-tabs>
      <a 
        href="tel:89999999999" 
        class="phone text-body2 text-weight-medium text-blue-grey-13"
      >
        8 (999) 999 99-99
      </a>
      <div class="col-12 flex justify-center socials">
        <q-btn flat round color="primary" icon="telegram" />
        <q-btn flat round color="primary" icon="telegram" />
        <q-btn flat round color="primary" icon="telegram" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-blue-grey-1 text-white q-pa-lg">
      <div class="row container">
        <div class="col-12">
          <q-toolbar style="padding-left: 10px;">
            <q-toolbar-title>
              <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
              </q-avatar>
            </q-toolbar-title>
            <a href="tel:89999999999" class="phone text-body2 text-weight-medium text-blue-grey-13">8 (999) 999 99-99</a>
            <q-tabs align="left" class="tabs-link q-ml-auto">
              <q-route-tab
                v-for="link in routes"
                :key="link"
                :to="link.link"
                :label="link.name"
                class="text-blue-grey-13"
              />
            </q-tabs>
          </q-toolbar>
        </div>
        <div class="col-12 q-pt-md row" style="padding-left: 10px; padding-right: 10px;">
          <a href="" class="phone text-body2 text-weight-medium text-blue-grey-13">Политика конфиденциальности</a>
          <a href="" class="phone text-body2 text-weight-medium text-blue-grey-13 q-ml-auto">Наименовании компании разработчика</a>
        </div>
        <div class="col-12 q-pt-lg text-center">
          <span class="text-blue-grey-13 ">&copy; Все права защищены</span>
        </div>
      </div>
      
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const rightDrawerOpen = ref(false)

    const routes = ref([
      {
        name: 'Каталог недвижимости',
        link: ''
      },
      {
        name: 'Услуги',
        link: ''
      },
      {
        name: 'О нас',
        link: ''
      },
      {
        name: 'Контакты',
        link: ''
      },
    ])

    return {
      routes,
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>