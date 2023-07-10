<template>
  <div class="catalog-sec q-pt-lg more-posts" v-if="posts.length">
    <h2 class="text-h4 text-weight-bold text-left">Похожие объекты</h2>
    <div class="row cards">

      <div 
        class="col-xs-12 col-md-4 col-lg-3 q-pa-sm card-sec"
        v-for="item in posts"
        :key="item"
      >
      <q-card class="my-card" flat bordered>
          <q-img :src="`http://127.0.0.1:8000/${item.image}`" height="210px">
            <div class="absolute-bottom text-subtitle2 text-center" style="padding: 5px 0;">
              {{ item.category?.name }}
            </div>
          </q-img>
          
          <q-card-section>
            <q-btn
              fab
              color="primary"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
              :label="item.layout?.name"
            />

            <div class="column no-wrap items-start">
              <div class="text-h6 ellipsis">
                {{ item.name }}
              </div>
              <div class="text-grey text-caption row no-wrap items-center">
                <q-icon name="place" />
                {{ item.city?.name }}, {{ item.region?.name }}
              </div>
            </div>

            <!-- <q-rating v-model="stars" :max="5" size="32px" /> -->
          </q-card-section>

          <q-card-section class="q-pt-none row">
            <div class="text-subtitle1 text-weight-bold col-12">
              € {{ item.price }}
            </div>
            <div class="row items-center row-captions" style="width: 100%;">
              <div class="text-caption text-grey col-6">
                Площадь {{ item.square }} м<sup>2</sup>
              </div>
              <div class="text-caption row-captions text-grey col-6">
                До моря {{ item.distance?.name }} м.
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
              :to="`/single/${item.id}`"
            />
          </q-card-actions>
        </q-card>
      </div>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: Array
})

</script>
