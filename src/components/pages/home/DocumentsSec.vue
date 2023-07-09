<template>
  <section class="documents-sec">
    <div class="container column">
      <h2 class="text-h3 text-weight-medium text-center">Услуги</h2>
      <div class="row cards-sec">
        
        <q-card 
          v-for="service in services"
          :key="service.id"
          class="my-card col-4" 
          flat 
          bordered
        >
          <q-item class="link" clickable v-ripple></q-item>
          <q-img
            src=""
          />

          <q-card-section>
            <!-- <div class="text-overline text-orange-9">Overline</div> -->
            <div class="text-h5 q-mt-sm q-mb-xs">{{ service.name }}</div>
            <div class="text-caption text-grey">
              {{ service.prev_description }}
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn 
              label="Получить консультацию" 
              outline 
              no-caps 
              rounded 
              color="primary" 
              class="q-ml-auto" 
              padding="4px 10px"
            />

            <q-space />
          </q-card-actions>
        </q-card>


        <q-card flat bordered class="my-card col-12" >
          <q-card-section>
            <div class="text-h6">Подробное описание</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.<br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.<br>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>
        </q-card>

      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  services: Array
})
</script>
