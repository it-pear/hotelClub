<template>
  <q-dialog
    v-model="accept"
  >
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section class="flex justify-between">
        <div class="text-subtitle1 text-weight-medium">Заявка на оказание услуги</div>
        <q-btn flat icon="close" v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-none">

        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="formData.name"
            label="Ваше имя*"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Это поле не должно быть пустым']"
          />

          <q-input
            filled
            type="number"
            v-model="formData.phone"
            label="Ваш телефон *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Это поле не должно быть пустым']"
          />

          <q-toggle v-model="accept" label="Я согласен на обработку моих персональных данных" />

          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">

      </q-card-actions>
    </q-card>

  </q-dialog>


  <q-page class="services">
    <div class="container column">
      <h2 class="text-h3 text-weight-medium text-center">Услуги</h2>
      <div class="content">
        <div class="row list">
          <div
            class="col-12 col-md-6 item"
            v-for="service in services"
            :key="service.id"
          >
            <q-card class="my-card" bordered flat>
              <q-img :src="`https://back.vivamentehome.com/${service.image}`">
                <div class="text-subtitle2 text-center">
                  <div class="text-h5">{{service.name}}</div>
                  <div class="text-subtitle2">
                    {{service.prev_description}}
                  </div>
                </div>
              </q-img>

              <q-card-section>
                <div class="services__info">
                  <span v-html="service.description"></span>
                </div>
                <q-btn
                  label="Записаться на консультацию"
                  unelevated
                  rounded
                  color="primary"
                  size="md"
                  padding="10px 24px"
                  @click="accept = true"
                />
              </q-card-section>
            </q-card>
          </div>
          <q-card flat bordered class="my-card col-12 q-pt-md">
            <q-card-section class="q-pt-none">
              Добро пожаловать на страницу наших услуг, где вы найдете подробную информацию о широком спектре услуг в сфере недвижимости, которые мы предлагаем в Алании, Газипаше и Анталии. Как ведущее агентство недвижимости, мы стремимся предоставить комплексные решения для удовлетворения всех ваших потребностей в недвижимости.          </q-card-section>
            <q-separator inset />

            <q-card-section>
              В нашей компании мы гордимся своим клиентоориентированным подходом. Мы понимаем, что у каждого клиента есть уникальные потребности, и мы стремимся предложить индивидуальные решения для удовлетворения этих потребностей. Независимо от того, покупаете ли вы, продаете или поддерживаете недвижимость в Турции, вы можете положиться на нас в предоставлении превосходного обслуживания и результатов.<br><br>
              Ваше путешествие в сфере турецкой недвижимости начинается здесь. Свяжитесь с нами сегодня, чтобы узнать, как мы можем помочь вам с вашими потребностями в недвижимости
            </q-card-section>
          </q-card>
        </div>
        <div class="form-sec q-pt-xl">
          <FormPerson />
        </div>


      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { servicesApi } from 'src/api/services';
import FormPerson from 'src/components/FormPerson';
import { onMounted, ref } from 'vue';

const $q = useQuasar()

const formData = ref({
  name: null,
  phone: null,
  accept: true,
})

const accept = ref(false)
const services = ref([])

const getServices = async () => {
  try {
    await servicesApi.getAll().then(resp => {
      services.value = resp
    })
  } catch (err) {
    console.log(err)
    alertError()
  }
}

onMounted(() => {
  getServices()
})

</script>
