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
            :src="`http://back.kvadro93.beget.tech/${service.image}`"
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
            Добро пожаловать на страницу наших услуг, где вы найдете подробную информацию о широком спектре услуг в сфере недвижимости, которые мы предлагаем в Алании, Газипаше и Анталии. Как ведущее агентство недвижимости, мы стремимся предоставить комплексные решения для удовлетворения всех ваших потребностей в недвижимости.          </q-card-section>
          <q-separator inset />

          <q-card-section>
            В нашей компании мы гордимся своим клиентоориентированным подходом. Мы понимаем, что у каждого клиента есть уникальные потребности, и мы стремимся предложить индивидуальные решения для удовлетворения этих потребностей. Независимо от того, покупаете ли вы, продаете или поддерживаете недвижимость в Турции, вы можете положиться на нас в предоставлении превосходного обслуживания и результатов.<br><br>
            Ваше путешествие в сфере турецкой недвижимости начинается здесь. Свяжитесь с нами сегодня, чтобы узнать, как мы можем помочь вам с вашими потребностями в недвижимости
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
