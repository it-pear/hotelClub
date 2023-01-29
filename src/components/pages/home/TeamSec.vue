<template>
  <section class="team-sec">
    <div class="container column">
      <h2 class="text-h3 text-weight-medium text-center">О нас</h2>
      <div class="row cards-sec">

        <q-card class="my-card col-4">
          <img src="https://oir.mobi/uploads/posts/2019-12/1576865863_1-1.jpg">
          <q-card-section>
            <div class="text-h6">Татьяна Павловна</div>
            <div class="text-subtitle2">Менеджер</div>
          </q-card-section>
        </q-card>

        <q-card class="my-card col-4">
          <img src="https://img.freepik.com/premium-photo/a-young-guy-sits-at-a-table-in-the-office-and-works-at-a-computer-brunette-sits-at-a-computer-and-works-with-a-cup-of-coffee-in-her-hands_85574-14429.jpg">
          <q-card-section>
            <div class="text-h6">Имя Фамилия</div>
            <div class="text-subtitle2">Риелтор</div>
          </q-card-section>
        </q-card>

        <q-card class="my-card col-4">
          <img src="https://cdn-st3.rtr-vesti.ru/vh/pictures/hd/325/404/2.jpg">
          <q-card-section>
            <div class="text-h6">Павлик</div>
            <div class="text-subtitle2">It гигант</div>
          </q-card-section>
        </q-card>

        <q-card flat bordered class="my-card col-12" >
          <q-card-section>
            <div class="text-h6">Подробнее о нас...</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.<br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.<br>
          </q-card-section>
        </q-card>

      </div>
    </div>
  </section>
</template>

<script>
import {ref, defineComponent} from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>
