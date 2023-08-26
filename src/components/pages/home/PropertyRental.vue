<template>
  <section class="property-rental">
    <div class="container column">
      <h2 class="text-h3 text-weight-medium text-center">Аренда Недвижимости</h2>

      <div class="cards-section row" style="width: 100%;">
        <div 
          class="col-3 car-sec"
          v-for="category in categories"
          :key="category.id"
        >
          <q-item class="link" clickable v-ripple :to="`/catalog?sale=rent&category=${category.id}`" />
          <q-card class="my-card">
            <q-img :src="`${category.image}`">
            <!-- <q-img :src="`https://back.vivamentehome.com/${category.image}`"> -->
              <div class="absolute-bottom text-h6">
                {{ category.name }}
              </div>
            </q-img>
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
          to="/catalog"
        />
      </div>
      
    </div>
  </section>
  
</template>

<script setup>
const props = defineProps({
  categories: Array
})
</script>