<template>
  <q-dialog
    v-model="accept"
  >
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section>
        <div class="text-h6">Статус заявки</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Ваша заявка принята, в ближайшее время с вами свяжется наш менеджер
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="ОК" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-page class="single">
    <div class="container column">
      <h1 class="text-h4 text-weight-bold text-left">{{ post.name }}</h1>
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
            <q-carousel-slide :name="1" :img-src="`https://back.vivamentehome.com/${post.image}`" />
            <q-carousel-slide
            v-for="image in post.images"
            :key="image.id"
              :name="image.id"
              :img-src="`https://back.vivamentehome.com/${image.url}`"
            />
          </q-carousel>
        </div>
        <div class="col-12 col-md-6">
          <div class="content-single">
            <div class="content-single__price">€ {{ post.price }}</div>
            <div class="content-single__info text-blue-4">
              {{ post.category?.name }}
              <span class="id" v-if="post.sale === 'sale'">Продажа</span>
              <span class="id" v-if="post.sale === 'rent'">Аренда</span>
              <span class="id">ID {{ post.id }}</span></div>
            <span class="content-single__location">
              <q-icon size="25px" name="svguse:icons/allIcons.svg#location" color="primary" />
              <div class="text">{{ post.city?.name }} , {{ post.region?.name }}</div>
              <div class="text-blue-4 more">{{ post.distance?.name }} метров до моря</div>
            </span>
            <div class="row prems">
              <div class="col-6 col-md-4 item">
                <div class="title text-blue-4">Общая площадь</div>
                <div class="subtitle">{{ post.square }} м<sup></sup>2</div>
              </div>
              <div class="col-6 col-md-4 item">
                <div class="title text-blue-4">Этаж</div>
                <div class="subtitle">{{ post.storeys }}</div>
              </div>
              <div class="col-6 col-md-4 item">
                <div class="title text-blue-4">Срок сдачи</div>
                <div class="subtitle" v-if="post.deadline === null">Сдан</div>
                <div class="subtitle" v-else>{{ post.deadline }}</div>
              </div>
              <div class="col-6 col-md-4 item">
                <div class="title text-blue-4">Отделка</div>
                <div class="subtitle">{{ post.finishing }}</div>
              </div>
              <div class="col-6 col-md-4 item">
                <div class="title text-blue-4">Планировка</div>
                <div class="subtitle">{{ post.layout?.name }} , {{ post.type?.name }}</div>
              </div>
              <div class="col-6 col-md-4 item">
                <div class="title text-blue-4">Район</div>
                <div class="subtitle">{{ post.region?.name }}</div>
              </div>
            </div>
            <q-btn
              label="Оставить заявку"
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
              <span v-html="post.description"></span>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          dense
          expand-separator
          label="Инфраструктура"
          class="infrastructure"
        >
          <q-card class="q-pb-md q-pt-md">
            <q-card-section>
              <q-card
                v-for="property in post.properties"
                :key="property.id"
                class="my-card text-dark q-mb-none"
                bordered
              >
                <q-card-section>
                  <div class="text">{{ property.name }}</div>
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
          <q-card class="q-pb-md q-pt-md">
            <q-card-section>
              <q-card
                v-for="advantage in post.advantages"
                :key="advantage.id"
                class="my-card text-dark"
                bordered
              >
                <q-card-section>
                  <div class="text">{{ advantage.name }}</div>
                </q-card-section>
              </q-card>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <FormPerson />
      <MoreObjects :posts="posts" v-if="posts" />

    </div>
  </q-page>
</template>

<script setup>
import { postsApi } from 'src/api/post'
import FormPerson from 'src/components/FormPerson'
import MoreObjects from 'src/components/pages/single/MoreObjects'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const post = ref({})

const getPost = async () => {
  try {
    const resp = await postsApi.getById(id)
    post.value = resp

  } catch (err) {
    console.log(err)
  }
}

const posts = ref([])

const getPosts = async () => {
  const resp = await postsApi.getFilterPosts({
    sale: post.value.sale,
    advantages: [],
    layouts: [],
    properties: [],
    region: null,
    distances: [],
    page: 1,
    per_page: 4,
    last_page: null,
    category: [post.value.category_id],
    types: [],
    id: '',
    price_to: post.value.price + 20000,
    price_from: 0,
  })
  posts.value = resp.data
}

const slide = ref(1)
const accept = ref(false)

onMounted(async () => {
  await getPost()
  await getPosts()
})
</script>
