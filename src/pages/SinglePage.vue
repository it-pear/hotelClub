<template>
  <q-dialog
    v-model="accept"
  >
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section>
        <div class="text-h6">Medium</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Click/Tap on the backdrop.
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="OK" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-page class="single">
    <div class="container column">
      <h1 class="text-h4 text-weight-bold text-left">Стильный трёхкомнатный пентхаус с мебелью</h1>
      <div class="row">
        <div class="col-12 col-md-6">
          <q-carousel
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
            class="my-carousel"
          >
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
          </q-carousel>
        </div>
        <div class="col-12 col-md-6">
          <div class="content-single">
            <div class="content-single__price">189 200 €</div>
            <div class="content-single__info text-blue-4">Вторичка  <span class="id">ID 110733SH-3P</span></div>
            <span class="content-single__location">
              <q-icon size="25px" name="svguse:icons/allIcons.svg#location" color="primary" />
              <div class="text">Газипаша , Газипаша</div>
              <div class="text-blue-4 more">1000 метров до моря</div>
            </span>
            <div class="row prems">
              <div class="col-6 col-md-4 item">
                <div class="title text-blue-4">Общая площадь</div>
                <div class="subtitle">155,00 м2</div>
              </div>
              <div class="col-6 col-md-4 item">
                <div class="title text-blue-4">Этаж</div>
                <div class="subtitle">9 из 9</div>
              </div>
              <div class="col-6 col-md-4 item">
                <div class="title text-blue-4">Срок сдачи</div>
                <div class="subtitle">Сдан</div>
              </div>
              <div class="col-6 col-md-4 item">
                <div class="title text-blue-4">Отделка</div>
                <div class="subtitle">Чистовая</div>
              </div>
              <div class="col-6 col-md-4 item">
                <div class="title text-blue-4">Планировка</div>
                <div class="subtitle">3+1 , Пентхаус</div>
              </div>
              <div class="col-6 col-md-4 item">
                <div class="title text-blue-4">Район</div>
                <div class="subtitle">Газипаша</div>
              </div>
            </div>
            <q-btn 
              label="Позвоните мне" 
              unelevated 
              rounded 
              color="primary" 
              size="md"
              padding="10px 24px"
              @click="accept = true"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container column">
      <q-list padding class="rounded-borders list-more">
        <q-expansion-item
          dense
          expand-separator
          default-opened
          label="Описание объекта"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.<br>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.<br>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          dense
          expand-separator
          label="Инфраструктура"
          class="infrastructure"
        >
          <q-card>
            <q-card-section>

              <q-card
                class="my-card text-dark"
                bordered
              >
                <q-card-section>
                  <div class="text">Открытый бассейн</div>
                </q-card-section>
              </q-card>
              <q-card
                class="my-card text-dark"
                bordered
              >
                <q-card-section>
                  <div class="text">Открытая парковка</div>
                </q-card-section>
              </q-card>
              <q-card
                class="my-card text-dark"
                bordered
              >
                <q-card-section>
                  <div class="text">Охрана 7/24</div>
                </q-card-section>
              </q-card>
              <q-card
                class="my-card text-dark"
                bordered
              >
                <q-card-section>
                  <div class="text">Тренажерный зал</div>
                </q-card-section>
              </q-card>

            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          dense
          expand-separator
          label="Преимущества"
          class="infrastructure"
        >
          <q-card>
            <q-card-section>
              <q-card
                class="my-card text-dark"
                bordered
              >
                <q-card-section>
                  <div class="text">Район открыт для ВНЖ</div>
                </q-card-section>
              </q-card>
              <q-card
                class="my-card text-dark"
                bordered
              >
                <q-card-section>
                  <div class="text">От собственников</div>
                </q-card-section>
              </q-card>
              <q-card
                class="my-card text-dark"
                bordered
              >
                <q-card-section>
                  <div class="text">С мебелью</div>
                </q-card-section>
              </q-card>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <FormPerson />
      <MoreObjects />

    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue'
import FormPerson from 'src/components/FormPerson'
import MoreObjects from 'src/components/pages/single/MoreObjects'

export default defineComponent({
  components: {
    FormPerson,
    MoreObjects
  },
  setup() {
    const slide = ref(1)
    const accept = ref(false)

    return {
      slide,
      accept
    }
  },
})
</script>
