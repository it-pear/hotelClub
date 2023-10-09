<template>
  <section class="general-page">

    <div class="column container">
      <h1 class="text-h1 text-weight-medium text-white text-center">Недвижимость в Турции</h1>
      <h3 class="text-h4 text-white text-center">Покупка, Аренда недвижимости в Турции от звонка до покупки</h3>
    </div>
    <div class="column container">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-tabs
          v-model="formData.sale"
          inline-label
          class="bg-blue-grey-1 text-blue-grey-13 shadow-2"
        >
          <q-tab name="sale" icon="home" label="Покупка" />
          <q-tab name="rent" icon="money" label="Аренда" />
        </q-tabs>
        <div class="row content bg-blue-grey-1">
          <div class="col-xs-6 col-md-3 col-3 q-pa-sm">
            <q-input
              type="number"
              v-model="formData.id"
              label="ID Объекта"
              lazy-rules
            />
          </div>

          <div class="col-xs-6 col-md-3 col-3 q-pa-sm">
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
          </div>
          <div class="col-xs-6 col-md-3 col-3 q-pa-sm">
            <q-input
              type="number"
              v-model="formData.price_from"
              label="Цена От"
              lazy-rules
            />
          </div>
          <div class="col-xs-6 col-md-3 col-3 q-pa-sm">
            <q-input
              type="number"
              v-model="formData.price_to"
              label="Цена до"
              lazy-rules
            />
          </div>

          <div class="row col-12 additation q-pt-sm">
            <!-- <q-toggle
              v-model="accept"
              label="Дополнительные параметры"
            /> -->
            <q-btn label="Поиск" unelevated rounded type="submit" color="primary" />
            <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm" />
          </div>

        </div>

      </q-form>
    </div>
  </section>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import {ref} from 'vue'

const props = defineProps({
  layouts: Array
})

const router = useRouter()
const $q = useQuasar()

const formData = ref({
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
  price_to: null,
  price_from: 0,
  sale: 'sale'
})

const model = ref(null)

const buildQuery = (params) => {
  let queryParams = new URLSearchParams()
  for (let key in params) {
    let value = params[key]
    if (key === 'id' && value !== null && value !== '') {
      value = Number(value)
    }
    if (Array.isArray(value)) {
      value.forEach(val => queryParams.append(`${key}[]`, val))
    } else if (value !== null && value !== '') {
      queryParams.append(key, value)
    }
  }
  return queryParams.toString()
}

const onSubmit = async () => {
  let query = await buildQuery(formData.value)
  window.location.href = `/catalog?${query}`
}

const onReset = () => {
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
    sale: 'sale'
  }
}

</script>
