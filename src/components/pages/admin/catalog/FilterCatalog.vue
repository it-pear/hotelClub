<template>
  <q-form
    @submit="getPosts"
    @reset="onReset"
    class="q-gutter-md"
  >
    <div class="row q-pt-md">
        <div class="col-12 col-lg-6 q-pb-md q-pr-sm">
          <q-expansion-item
              style="border-radius: 4px; border: 1px solid rgba(0, 0, 0, 0.12) !important;"
              icon="explore"
              label="Овновное"
              header-class="text-primary"
              expand-icon-class="text-dark"
            >
              <q-card>
                <q-card-section class="q-pt-none">
                  <div class="row">
                    <div class="col q-pr-sm">
                      <q-input
                        v-model="formData.id"
                        label="ID объекта"
                        lazy-rules
                        type="number"
                      />
                    </div>
                    <div class="col q-pl-sm">
                      <q-select
                        v-model="formData.sale"
                        :options="[
                          {
                            value: 'sale',
                            label: 'Продажа'
                          },
                          {
                            value: 'rent',
                            label: 'Аренда'
                          },
                        ]"
                        emit-value
                        map-options
                        label="Тип объекта"
                        class="q-mb-md"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col q-pr-sm">
                      <q-input
                        v-model="formData.price_from"
                        label="Цена от"
                        lazy-rules
                        type="number"
                      />
                    </div>
                    <div class="col q-pl-sm">
                      <q-input
                        v-model="formData.price_to"
                        label="Цена до"
                        lazy-rules
                        type="number"
                      />
                    </div>
                  </div>

                  <q-select
                    v-model="formData.category"
                    :options="categories"
                    label="Вид недвижимости"
                    multiple
                    emit-value
                    map-options
                    option-value="id"
                    option-label="name"
                  >
                    <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                      <q-item v-bind="itemProps">
                        <q-item-section>
                          <q-item-label>{{ opt.name }}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                  
                  <q-select
                    v-model="formData.layouts"
                    :options="layouts"
                    label="Планировка"
                    multiple
                    emit-value
                    map-options
                    option-value="id"
                    option-label="name"
                  >
                    <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                      <q-item v-bind="itemProps">
                        <q-item-section>
                          <q-item-label>{{ opt.name }}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </q-card-section>
              </q-card>
          </q-expansion-item>
        </div>
        <div class="col-12 col-lg-6 q-pb-md q-pl-sm">
          <q-expansion-item
            style="border-radius: 4px; border: 1px solid rgba(0, 0, 0, 0.12) !important;"
            icon="explore"
            label="Местоположение"
            header-class="text-primary"
            expand-icon-class="text-dark"
          >
            <q-card>
              <q-card-section class="q-pt-none">
                
                <q-select
                  v-model="city"
                  :options="citys"
                  label="Выберите город"
                  emit-value
                  map-options
                  option-label="name"
                />
                <q-select
                  v-model="formData.region"
                  :options="city?.region"
                  label="Выберите район"
                  :disable="!city"
                  emit-value
                  map-options
                  option-value="id"
                  option-label="name"
                />
                <q-select
                  v-model="formData.distances"
                  :options="distances"
                  label="Расстояние до моря"
                  multiple
                  emit-value
                  map-options
                  option-value="id"
                  option-label="name"
                >
                  <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                    <q-item v-bind="itemProps">
                      <q-item-section>
                        <q-item-label>{{ opt.name }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
        <div class="col-12 col-lg-6 q-pr-sm">
          <q-expansion-item
            style="border-radius: 4px; border: 1px solid rgba(0, 0, 0, 0.12) !important;"
            icon="explore"
            label="Дополнительно"
            header-class="text-primary"
            expand-icon-class="text-dark"
          >
            <q-card>
              <q-card-section class="q-pt-none">
                <q-select
                  v-model="formData.properties"
                  :options="properties"
                  label="Инфраструктура"
                  multiple
                  emit-value
                  map-options
                  option-value="id"
                  option-label="name"
                >
                  <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                    <q-item v-bind="itemProps">
                      <q-item-section>
                        <q-item-label>{{ opt.name }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>

                <q-select
                  v-model="formData.advantages"
                  :options="advantages"
                  label="Преимущества"
                  multiple
                  emit-value
                  option-value="id"
                  option-label="name"
                  map-options
                >
                  <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                    <q-item v-bind="itemProps">
                      <q-item-section>
                        <q-item-label>{{ opt.name }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>

                <q-select
                  v-model="formData.types"
                  :options="types"
                  label="Тип квартиры"
                  multiple
                  emit-value
                  map-options
                  option-value="id"
                  option-label="name"
                >
                  <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                    <q-item v-bind="itemProps">
                      <q-item-section>
                        <q-item-label>{{ opt.name }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>

              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
    </div>
    <div>
      <q-btn 
        unelevated 
        rounded 
        label="Поиск" 
        type="submit" 
        color="primary"
      />
      <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { pagesApi } from 'src/api/pages'
import { postsApi } from 'src/api/post'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const props = defineProps({
  updatePagination: Number,
})

const emit = defineEmits(['getPosts'])

const defaultData = {
  sale: null,
  advantages: [],
  layouts: [],
  properties: [],
  region: null,
  distances: [],
  page: 1,
  per_page: 10,
  last_page: null,
  category: [],
  types: [],
  id: '',
  price_to: '',
  price_from: '',
}

const formData = ref({ ...defaultData })

const city = ref(null)
const citys = ref(null)
const categories = ref(null)
const layouts = ref(null)
const types = ref(null)
const distances = ref(null)
const advantages = ref(null)
const properties = ref(null)

async function getData() {
  try {
    const resp = await pagesApi.getAll()
    advantages.value = resp.advantages
    categories.value = resp.categories
    citys.value = resp.citys
    properties.value = resp.properties
    types.value = resp.types
    distances.value = resp.distances
    layouts.value = resp.layouts
    
  } catch (err) {
    console.log(err)
  } 
}

const getPosts = async () => {
  const resp = await postsApi.getFilterPosts(formData.value)
  emit('getPosts', {posts: resp.data, pagination: resp.pagination})
  router.replace({ query: formData.value })
}

watch(() => props.updatePagination, (newVal, oldVal) => {
  if (Number(formData.value.page) !== newVal) {
    formData.value.page = newVal
    getPosts()
  }
})

const onReset = async () => {
  formData.value = {
    sale: null,
    advantages: [],
    layouts: [],
    properties: [],
    region: null,
    distances: [],
    page: 1,
    per_page: 10,
    last_page: null,
    category: [],
    types: [],
    id: '',
    price_to: '',
    price_from: '',
  }
  getPosts()
}

onMounted(async () => {
  await getData()

  for (let key in defaultData) {
    if (route.query[key]) {
      if (Array.isArray(defaultData[key])) {
        formData.value[key] = route.query[key]
      } else {
        formData.value[key] = route.query[key]
      }
    }
  }
  
  await getPosts()
  formData.value = {
    sale: null,
    advantages: [],
    layouts: [],
    properties: [],
    region: null,
    distances: [],
    page: 1,
    per_page: 10,
    last_page: null,
    category: [],
    types: [],
    id: '',
    price_to: '',
    price_from: '',
  }
})

</script>
