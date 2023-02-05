<template>
  <q-page class="about">
    <div class="container column">
      <h2 class="text-h3 text-weight-medium text-center">Контакты</h2>
      
      <div class="content">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25643.40929726009!2d31.995142423367618!3d36.54383619860756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dca27b822cd5fb%3A0xd160c1c8b3dc170b!2z0JDQu9Cw0L3RjNGPLCDQkNC90YLQsNC70LjRjywg0KLRg9GA0YbQuNGP!5e0!3m2!1sru!2sru!4v1675632591122!5m2!1sru!2sru" width="50%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <q-card-section class="info">
              <div class="text-overline">Турция, Аланья</div>
              <div class="text-h5 q-mt-sm q-mb-xs text-weight-medium">
                Краснодарский край, г. Геленджик, ул. Пушкина 44
              </div>
              <div class="row work-sec">
                <div class="col-6 col-md-4 item">
                  <div class="title text-blue-4">Рабочие часы</div>
                  <div class="subtitle">
                    <div>пн-пт c 9:00 до 18:00</div>
                    <div>сб c 9:00 до 15:00</div>
                    <div>вс выходной</div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                  <div class="title text-blue-4">Телефоны</div>
                  <div class="subtitle">8-(999) 999-99-99</div>
                  <div class="subtitle">8-(999) 999-99-99</div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                  <div class="title text-blue-4">Мессенджеры</div>
                  <q-btn flat round color="primary" icon="telegram" />
                  <q-btn flat round color="primary" icon="telegram" />
                  <q-btn flat round color="primary" icon="telegram" />
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                  <div class="title text-blue-4">Почта</div>
                  <div class="subtitle">example@gmail.com</div>
                </div>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>

      <h2 class="text-h3 text-weight-medium text-center">Наша команда</h2>
      <div class="row team-sec">

        <q-card class="my-card col-4" flat bordered>
          <img src="https://oir.mobi/uploads/posts/2019-12/1576865863_1-1.jpg">
          <q-card-section>
            <div class="text-h6">Татьяна Павловна</div>
            <div class="text-subtitle2">Менеджер</div>
          </q-card-section>
        </q-card>

        <q-card class="my-card col-4" flat bordered>
          <img src="https://img.freepik.com/premium-photo/a-young-guy-sits-at-a-table-in-the-office-and-works-at-a-computer-brunette-sits-at-a-computer-and-works-with-a-cup-of-coffee-in-her-hands_85574-14429.jpg">
          <q-card-section>
            <div class="text-h6">Имя Фамилия</div>
            <div class="text-subtitle2">Риелтор</div>
          </q-card-section>
        </q-card>

        <q-card class="my-card col-4" flat bordered>
          <img src="https://cdn-st3.rtr-vesti.ru/vh/pictures/hd/325/404/2.jpg">
          <q-card-section>
            <div class="text-h6">Павлик</div>
            <div class="text-subtitle2">It гигант</div>
          </q-card-section>
        </q-card>
      </div>
      
      <FormPerson />
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue'
import FormPerson from 'src/components/FormPerson'

export default defineComponent({
  components: {
    FormPerson
  },
  setup() {
    
    return {

    }
  },
})
</script>
