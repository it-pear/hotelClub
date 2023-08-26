<template>
  <q-page class="catalog-single">
    <div class="text-h5 q-mb-xl">Создание нового объекта</div>

    <q-form @submit="updateObject" class="q-gutter-md">
      <div class="row">
        <div class="col-12 col-lg-6 q-pr-md">
          
          <q-input
            filled
            v-model="formData.name"
            label="Название объекта"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Поле не должно быть пустым',
            ]"
          />
          <q-select
            filled
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
            label="Направленность недвижимости"
            class="q-mb-md"
          />
          <q-toggle v-model="formData.is_recommended"   label="Рекомендуемый товар" class="q-mb-md" />

          <div class="row">
            <div class="col-12 col-lg-6 q-pr-sm q-mb-lg">
              <div class="form-group">
                <div class="text-subtitle2 q-mb-sm">Главное изображение</div>
                <div>
                  <img :src="`https://back.vivamentehome.com/${formData.image}`" alt="" class="full-width"> 
                </div>
                <q-uploader
                  @added="onFileChange"
                  accept=".jpg, .png, image/*"
                  label="Перетащите или выберите изображение для замены главного изображения"
                  style="max-width: 100%;width: 100%;"
                />
              </div>
            </div>
            <div class="col-12 col-lg-6 q-pl-sm q-mb-lg">
              <div class="form-group">
                <div class="text-subtitle2 q-mb-sm">Фото для галереи</div>
                <div class="row">
                  <div 
                    class="col-12 col-lg-4 q-pa-xs"
                    v-for="image in formData.images"
                    :key="image.id"
                  >
                    <div class="image-section">
                      <q-icon 
                        name="close" 
                        size="18px" 
                        color="white" 
                        style="cursor: pointer;" 
                        @click="delImageGallery(image.id)" 
                      />
                      <img :src="`https://back.vivamentehome.com/${image.url}`" alt="" class="full-width"> 
                    </div>
                  </div>
                </div>
                <q-uploader
                  @added="onMoreFileChange"
                  accept=".jpg, .png, image/*"
                  label="Добавьте одну или несколько фото к галереи"
                  style="max-width: 100%;width: 100%;"
                  multiple
                />
              </div>
            </div>
          </div>

          <q-input
            v-model="formData.description"
            filled
            label="Описание"
            type="textarea"
            class="q-mb-lg"
          />

          <q-select
            filled
            v-model="formData.category_id"
            :options="categories"
            option-value="id"
            option-label="name"
            emit-value
            map-options
            label="Тип объекта"
            class="q-mb-lg"
          />

          <q-input
            filled
            v-model="formData.square"
            label="Площадь помещения м"
            lazy-rules
            type="number"
            :rules="[
              (val) => (val && val.length > 0) || 'Поле не должно быть пустым',
            ]"
            class="q-mb-xs"
          />

          <q-select
            filled
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
                  <q-item-label v-html="opt.name" />
                </q-item-section>
                <q-item-section side>
                  <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                </q-item-section>
              </q-item>
            </template>
          </q-select>

        </div>

        <div class="col-12 col-lg-6 q-pl-md">
          <q-input
            filled
            type="number"
            v-model="formData.price"
            label="Цена (euro)"
            lazy-rules
            class="q-mb-md"
            :rules="[
              val => val || 'Поле не должно быть пустым',
            ]"
          />
            
          <q-select
            filled
            v-model="formData.layout_id"
            :options="layoutOptions"
            option-value="id"
            option-label="name"
            emit-value
            map-options
            label="Планировка"
            class="q-mb-lg"
          />

          <div class="row">
            <div class="col-12 col-lg-6 q-pr-sm q-mb-md">
              <q-input
                filled
                type="number"
                v-model="formData.floorthis"
                label="Номер этажа"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Поле не должно быть пустым',
                ]"
              />
            </div>
            <div class="col-12 col-lg-6 q-pl-sm q-mb-md">
              <q-input
                filled
                type="number"
                v-model="formData.floorIs"
                label="Количество этажей в доме"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Поле не должно быть пустым',
                ]"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-lg-6 q-pr-sm q-mb-lg">
              <q-select
                filled
                v-model="formData.city_id"
                :options="citys"
                option-value="id"
                option-label="name"
                emit-value
                map-options
                @update:model-value="formData.region_id = null"
                label="Город"
              />
            </div>

            <div class="col-12 col-lg-6 q-pl-sm q-mb-lg">
              <q-select
                filled
                v-model="formData.region_id"
                :options="regions"
                :disable="formData.city?.length === 0"
                option-value="id"
                option-label="name"
                emit-value
                map-options
                label="Район"
              />
            </div>
          </div>

          <q-select
            filled
            v-model="formData.finishing"
            :options="finishingOptions"
            label="Отделка"
            class="q-mb-lg"
          />

          <div class="row">
            <div class="col-12 col-lg-9">
              <q-input
                filled
                v-model="formData.deadline"
                :disable="value"
                label="Срок сдачи (дд.мм.гггг)"
                lazy-rules
                mask="##.##.####"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Поле не должно быть пустым',
                ]"
              />
            </div>

            <div class="col-12 col-lg-3">
              <q-toggle v-model="value" @update="disable" label="Объект сдан" />
            </div>
          </div>

          <q-select
            filled
            v-model="formData.type_id"
            :options="types"
            option-value="id"
            option-label="name"
            emit-value
            map-options
            :disable="formData.category_id !== 1 && formData.category_id !== 2"
            label="Тип квартиры"
            class="q-mb-lg"
          />
          <q-select
            filled
            v-model="formData.distance_id"
            :options="distances"
            option-value="id"
            option-label="name"
            emit-value
            map-options
            label="Расстояние до моря"
            class="q-mb-lg"
          />

          <q-select
            filled
            v-model="formData.properties"
            :options="properties"
            label="Инфраструктура"
            multiple
            emit-value
            map-options
            option-value="id"
            option-label="name"
            class="q-mb-lg"
          >
            <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
              <q-item v-bind="itemProps">
                <q-item-section>
                  <q-item-label v-html="opt.name" />
                </q-item-section>
                <q-item-section side>
                  <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                </q-item-section>
              </q-item>
            </template>
          </q-select>

        </div>
      </div>

      <div>
        <q-btn
          unelevated
          rounded
          no-caps
          color="primary"
          label="Обновить объект"
          class="q-mr-md"
          size="lg"
          type="submit"
        />
        <q-btn
          rounded
          outline
          no-caps
          label="Отмена"
          type="reset"
          color="primary"
          class="q-ml-sm"
          size="lg"
          to="/admin/catalog"
        />
      </div>
    </q-form>

  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar"
import { imagesApi } from 'src/api/images'
import { pagesApi } from 'src/api/pages'
import { postsApi } from 'src/api/post'
import { computed, onMounted, ref } from "vue"
import { useRoute, useRouter } from 'vue-router'

const $q = useQuasar()
const route = useRoute()
const router = useRouter()
const idPost = ref(route.params.id)

const formData = ref({
  name: "",
  description: "",
  category_id: null,
  square: "",
  deadline: "",
  layout_id: null,
  type_id: null,
  floorthis: null,
  floorIs: null,
  finishing: null,
  price: '',
  sale: null,
  storeys: '',
  city: [],
  city_id: null,
  region_id: null,
  avatar: null,
  image: null,
  is_recommended: false,
  distance_id: null,
  properties: null,
  advantages: null
})


const value = ref(false)
const images = ref([])
const advantages = ref([])
const categories = ref([])
const citys = ref([])

const regions = computed(() => {
  const region = citys.value.find(city => city.id === formData.value.city_id);
  return region ? region.region : [];
})

const properties = ref([])
const types = ref([])
const distances = ref([])
const finishingOptions = ref(["Чистовая", "Предчистовая", "Евроремонт"])
const layoutOptions = ref([])

async function getData() {
  try {
    await pagesApi.getAll().then(resp => {
      advantages.value = resp.advantages
      categories.value = resp.categories
      citys.value = resp.citys
      properties.value = resp.properties
      types.value = resp.types
      distances.value = resp.distances
      layoutOptions.value = resp.layouts
    })
  } catch (err) {
    console.log(err)
    alertError()
  } 
}

const getPost = async () => {
  try {
    const resp = await postsApi.getById(idPost.value)
    formData.value = resp

    if (formData.value.is_recommended === 0) {
      formData.value.is_recommended = false
    } else {
      formData.value.is_recommended = true
    }

    formData.value.floorthis = formData.value.storeys.split(' из ')[0]
    formData.value.floorIs = formData.value.storeys.split(' из ')[1]
    
    if (formData.value.deadline === null) value.value = true
  } catch (err) {
    console.log(err)
    alertError()
  }
}

const updateObject = async () => {
  formData.value.storeys = `${formData.value.floorthis} из ${formData.value.floorIs}`

  if (formData.value.is_recommended === true) {
    formData.value.is_recommended = 1
  } else {
    formData.value.is_recommended = 0
  }

  try {
    await postsApi.updatePost(formData.value, images.value).then(resp => {
      router.push('/admin/catalog')
    })
  } catch (err) {
    console.log(err)
    alertError()
  } finally {
    formData.value.is_recommended = false
  }
}

const delImageGallery = async (id) => {
  try {
    await imagesApi.delImage(id)
    $q.notify({
      color: "positive",
      message: "Картинка удалена",
    })
    getPost()
  } catch (err) {
    console.log(err)
  }
}

const alertError = () => {
  $q.notify({
    color: "negative",
    message: "Произошла ошибка, попробуйте позже",
  })
}
function disable() {
  value.value = !value.value
  formData.value.deadline = ""
}
function onFileChange(file) {
  formData.value.image = file[0]
}
function onMoreFileChange(file) {
  images.value = file
  console.log(images.value)
}

onMounted(() => {
  getData()
  getPost()
})

</script>
