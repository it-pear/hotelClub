<template>
  <q-layout view="hhh LpR fff">

    <q-header class="my-header" height-hint="98" style="border-bottom: 1px solid #eceff1;">
      <q-toolbar class="toolbar-info bg-blue-grey-1">
          <div class="row container" style="align-items: center;">
            <div class="col-xs-12 col-sm-9 col-md-9">
              <a
                href="tel:+905363369711"
                class="phone text-body2 text-weight-medium text-blue-grey-13"
              >
              +90 (536) 336-9711
              </a>
              <a
                href="mailto:info@vivamente.com"
                class="phone text-body2 text-weight-medium text-blue-grey-13 q-ml-lg"
              >
                info@vivamente.com
              </a>
            </div>

            <div class="col-xs-12 col-sm-3 col-md-3 flex justify-end">
              <q-btn flat round color="primary" icon="phone" type="a" href="tel:+905363369711" />
              <q-btn flat round color="primary" icon="fab fa-whatsapp" type="a" target="_blank" href="https://wa.me/905318299735" />
              <q-btn flat round color="primary" icon="fab fa-telegram" type="a" target="_blank" href="https://t.me/vivamente_alanya" />
            </div>
          </div>
      </q-toolbar>

      <q-toolbar class="bg-white text-blue-grey-13 toolbar-head" color="blue-grey-13" style="min-height: 80px;">
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->
          <div class="container" style="align-items: center;">
            <q-toolbar-title>
              <q-avatar to="/">
                <a href="/" class="link"></a>
                <img src="/images/logo.jpg">
              </q-avatar>
            </q-toolbar-title>

            <q-tabs align="left" class="tabs-link q-ml-auto">
              <q-route-tab
                v-for="link in routes"
                :key="link"
                :to="link.link"
                :label="link.name"
              />
            </q-tabs>
            <!-- <q-btn
              unelevated rounded color="primary"
              label="Войти"
              icon="svguse:icons/allIcons.svg#phone"
              class="q-ml-auto btn-reverse-il-mb mb-visible"
              to="/login"
            />
            <q-btn
              unelevated rounded color="primary"
              label="Войти"
              icon="svguse:icons/allIcons.svg#phone"
              class="q-ml-auto btn-reverse-il-mb mb-visible"
              to="/login"
            />

            <q-btn
              unelevated rounded color="primary"
              label="Войти"
              icon="svguse:icons/allIcons.svg#user"
              class="q-ml-sm q-ml-auto btn-login btn-reverse-il-mb"
              to="/login"
            />
             -->
            <q-btn
              dense
              flat
              round
              color="primary"
              icon="menu"
              class="mb-visible q-ml-auto"
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
        href="tel:+905363369711"
        class="phone text-body2 text-weight-medium text-blue-grey-13"
      >
        +90 (536) 336-9711
      </a>
      <div class="col-12 flex justify-center socials">
        <q-btn flat round color="primary" icon="phone" type="a" href="tel:+905363369711" />
        <q-btn flat round color="primary" icon="fab fa-whatsapp" type="a" target="_blank" href="https://wa.me/905318299735" />
        <q-btn flat round color="primary" icon="fab fa-telegram" type="a" target="_blank" href="https://t.me/vivamente_alanya" />
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
                <img src="/images/logo.jpg">
              </q-avatar>
            </q-toolbar-title>
            <a href="tel:+905363369711" class="phone text-body2 text-weight-medium text-blue-grey-13">+90 (536) 336-9711</a>
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

<script setup>
import { ref } from 'vue'

const rightDrawerOpen = ref(false)

const routes = ref([
  {
    name: 'Каталог недвижимости',
    link: '/catalog'
  },
  {
    name: 'Услуги',
    link: '/services'
  },
  {
    name: 'О нас / Контакты',
    link: 'about'
  },
])

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}



</script>
