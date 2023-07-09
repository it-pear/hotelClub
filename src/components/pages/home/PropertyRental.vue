<template>
  <section class="property-rental">
    <div class="container column">
      <h2 class="text-h3 text-weight-medium text-center">Аренда Недвижимости</h2>

      <div class="cards-section row" style="width: 100%;">
        
        <div class="col-3 car-sec">
          <q-item class="link" clickable v-ripple></q-item>
          <q-card class="my-card">
            <q-img src="https://primeinvest.group/wp-content/uploads/2022/12/1-18.jpg">
              <div class="absolute-bottom text-h6">
                Новостройки
              </div>
            </q-img>
          </q-card>
        </div>
        <div class="col-3 car-sec">
          <q-item class="link" clickable v-ripple></q-item>
          <q-card class="my-card">
            <q-img src="https://primeinvest.group/wp-content/uploads/2023/01/whatsapp-image-2023-01-09-at-09.34.21-2.jpg">
              <div class="absolute-bottom text-h6">
                Вторичка
              </div>
            </q-img>
          </q-card>
        </div>
        <div class="col-3 car-sec">
          <q-item class="link" clickable v-ripple></q-item>
          <q-card class="my-card">
            <q-img src="https://primeinvest.group/wp-content/uploads/2022/11/imgonline-com-ua-resize-iot7gw0uxg.jpg">
              <div class="absolute-bottom text-h6">
                Виллы
              </div>
            </q-img>
          </q-card>
        </div>
        <div class="col-3 car-sec">
          <q-item class="link" clickable v-ripple></q-item>
          <q-card class="my-card">
            <q-img src="https://primeinvest.group/wp-content/uploads/2023/01/452-7-kargicak-7.jpg">
              <div class="absolute-bottom text-h6">
                Коммерция
              </div>
            </q-img>
          </q-card>
        </div>
        
      </div>
      
    </div>
  </section>
  
</template>

<script setup>
const props = defineProps({
  categories: Array
})
</script>