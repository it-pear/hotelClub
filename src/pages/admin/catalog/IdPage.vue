<template>
  <q-page class="catalog-single">
    <div class="text-h5 q-mb-xl">Создание нового объекта</div>

    <q-form @submit="createObject" @reset="onReset" class="q-gutter-md">
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
          <q-toggle v-model="formData.is_recommended"   label="Рекомендуемый товар" class="q-mb-md" />

          <div class="row">
            <div class="col-12 col-lg-6 q-pr-sm q-mb-lg">
              <div class="form-group">
                <div class="text-subtitle2 q-mb-sm">Главное изображение</div>
                <q-uploader
                  @added="onFileChange"
                  accept=".jpg, .png, image/*"
                  label="Перетащите или выберите изображение"
                  style="max-width: 100%;width: 100%;"
                />
              </div>
            </div>
            <div class="col-12 col-lg-6 q-pl-sm q-mb-lg">
              <div class="form-group">
                <div class="text-subtitle2 q-mb-sm">Фото для галереи</div>
                <q-uploader
                  @added="onMoreFileChange"
                  accept=".jpg, .png, image/*"
                  label="Перетащите или выберите несколько изображений"
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
            label="Площадь помещения (00.00)"
            lazy-rules
            mask="##.##"
            :rules="[
              (val) => (val && val.length > 0) || 'Поле не должно быть пустым',
            ]"
            class="q-mb-lg"
          />

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
              (val) =>
                (val && val.length > 0) || 'Поле не должно быть пустым',
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
                v-model="formData.city"
                :options="citys"
                option-value="id"
                option-label="name"
                @update:model-value="formData.region_id = null"
                label="Город"
              />
            </div>
            <div class="col-12 col-lg-6 q-pl-sm q-mb-lg">
              <q-select
                filled
                v-model="formData.region_id"
                :options="formData.city.region"
                :disable="formData.city.length === 0"
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

        </div>
      </div>

      <div>
        <q-btn
          unelevated
          rounded
          no-caps
          color="primary"
          label="Создать объект"
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
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";
import { useRouter } from 'vue-router'
import { useQuasar } from "quasar";
import { pagesApi } from 'src/api/pages'
import { postsApi } from 'src/api/post'

export default defineComponent({
  setup() {
    const $q = useQuasar()
    const router = useRouter()

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
      storeys: '',
      city: [],
      city_id: null,
      region_id: null,
      avatar: null,
      image: null,
      is_recommended: false,
      distance_id: null,
    });
    const value = ref(false)
    const images = ref(null)
    const image = ref(null)

    const advantages = ref([])
    const categories = ref([])
    const citys = ref([])
    const properties = ref([])
    const types = ref([])
    const distances = ref([])
    const finishingOptions = ref(["Чистовая", "Предчистовая", "Евроремонт"])
    const layoutOptions = ref([])

    function disable() {
      value.value = !value.value
      formData.value.deadline = ""
    }

    function onFileChange(file) {
      formData.value.image = file[0]
    }
    function onMoreFileChange(file) {
      formData.value.images = file
      console.log(formData.value.images)
    }

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
      } 
    }

    async function createObject() {
      formData.value.city_id = formData.value.city.id
      formData.value.storeys = `${formData.value.floorthis} из ${formData.value.floorIs}`

      if (formData.value.is_recommended === true) {
        formData.value.is_recommended = 1
      } else {
        formData.value.is_recommended = 0
      }

      try {
        await postsApi.createPost(formData.value).then(resp => {
          console.log(resp)
          router.push('/admin/catalog')
        })
      } catch (err) {
        console.log(err)
      } finally {
        formData.value.is_recommended = false
      }
    }

    onMounted(() => {
      getData()
    })

    return {
      getData,
      formData,
      value,
      disable,
      advantages,
      categories,
      citys,
      properties,
      types,
      images,
      finishingOptions,
      layoutOptions,
      distances,
      onFileChange,
      onMoreFileChange,
      createObject,
    };
  },
});
</script>
