<template>
  <section class="hot-deals">
    <div class="container column">
      <h2 class="text-h3 text-weight-medium text-center">Горячие предложения</h2>

      <div class="row cards">
        <div 
          class="col-xs-12 col-md-3 col-3 card-sec"
          v-for="item in deals"
          :key="item"
        >
          <q-card class="my-card" bordered flat>
            <q-img src="https://primeinvest.group/wp-content/uploads/2022/12/d2-1.jpg">
              <div class="absolute-bottom text-subtitle2 text-center" style="padding: 5px 0;">
                Новостройка
              </div>
            </q-img>
            
            <q-card-section>
              <q-btn
                fab
                color="primary"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%);"
                label="1+1"
              />

              <div class="column no-wrap items-start">
                <div class="text-h6 ellipsis">
                  Cafe Basilico
                </div>
                <div class="text-grey text-caption row no-wrap items-center">
                  <q-icon name="place" />
                  Аланья, Город
                </div>
              </div>

              <!-- <q-rating v-model="stars" :max="5" size="32px" /> -->
            </q-card-section>

            <q-card-section class="q-pt-none row">
              <div class="text-subtitle1 text-weight-bold col-12">
                $ 100 000
              </div>
              <div class="row items-center" style="width: 100%;">
                <div class="text-caption text-grey col-6">
                  Площадь 55 м<sup>2</sup>
                </div>
                <div class="text-caption text-grey col-6">
                  До моря 150 м.
                </div>
              </div>
              
            </q-card-section>

            <q-separator />

            <q-card-actions class="justify-between">
              <q-btn flat round icon="event" />
              <q-btn 
                label="Подробнее" 
                outline 
                no-caps 
                rounded 
                color="primary" 
                class="q-ml-auto" 
                padding="4px 10px"
                to="/single/1"
              />
            </q-card-actions>
          </q-card>
        </div>

      </div>

      <div class="text-center q-pt-lg w-100">
        <q-btn 
          label="Смотреть весь каталог" 
          unelevated 
          rounded 
          color="primary" 
          size="md"
          padding="10px 24px"
        />
      </div>
      
    </div>
  </section>
</template>

<script>
import {ref, defineComponent} from 'vue'

export default defineComponent({
  setup() {
    const deals = ref([
      {
        
      },
      {

      },
      {

      },
      {

      },
    ])

    return {
      deals
    }
  },
})
</script>
