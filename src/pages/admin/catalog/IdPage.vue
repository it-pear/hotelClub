<template>
  <q-page class="catalog-single">
    <div class="text-h5 q-mb-xl">Создание нового объекта</div>

    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <div class="row">
        <div class="col-12 col-lg-6 q-pr-md">
          <q-input
            filled
            v-model="formData.name"
            label="Название объекта"
            lazy-rules
            class="q-mb-md"
            :rules="[
              (val) => (val && val.length > 0) || 'Поле не должно быть пустым',
            ]"
          />

          <div class="row">
            <div class="col-12 col-lg-6 q-pr-sm q-mb-lg">
              <div class="form-group">
                <div class="text-subtitle2 q-mb-sm">Главное изображение</div>
                <q-uploader
                  url="http://localhost:4444/upload"
                  label="Перетащите или выберите изображение"
                  style="max-width: 100%;width: 100%;"
                />
              </div>
            </div>
            <div class="col-12 col-lg-6 q-pl-sm q-mb-lg">
              <div class="form-group">
                <div class="text-subtitle2 q-mb-sm">Фото для галереи</div>
                <q-uploader
                  url="http://localhost:4444/upload"
                  label="Перетащите или выберите изображение"
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
            type="number"
            v-model="formData.square"
            label="Площадь помещения (00.00)"
            lazy-rules
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
            v-model="formData.layoutModel"
            :options="formData.layoutOptions"
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
                @update:model-value="formData.Modelregion = null"
                label="Город"
              />
            </div>
            <div class="col-12 col-lg-6 q-pl-sm q-mb-lg">
              <q-select
                filled
                v-model="formData.Modelregion"
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
            v-model="formData.finishingModel"
            :options="formData.finishingOptions"
            label="Отделка"
            class="q-mb-lg"
          />

          <div class="row">
            <div class="col-12 col-lg-9">
              <q-input
                filled
                type="number"
                v-model="formData.deadline"
                :disable="value"
                label="Срок сдачи (дд.мм.гггг)"
                lazy-rules
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

        </div>
      </div>

      <div>
        <q-btn
          unelevated
          rounded
          color="primary"
          label="Создать объект"
          class="q-mr-md"
          size="lg"
        />
        <q-btn
          rounded
          outline
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
import { useQuasar } from "quasar";
import { pagesApi } from 'src/api/pages'

export default defineComponent({
  setup() {
    const $q = useQuasar();

    const formData = ref({
      name: "",
      description: "",
      category_id: null,
      SrokModel: null,
      SrokOptions: ["Новостройка", "Вторичка", "Вилла", "Коммерция"],
      square: "",
      deadline: "",
      layoutModel: null,
      layoutOptions: ["1", "1+1", "2+1", "3+1"],
      floorthis: null,
      floorIs: null,
      finishingModel: null,
      finishingOptions: ["Чистовая", "Предчистовая", "Евроремонт"],
      price: '',
      city: [],
      Modelregion: null,
      Optionsregion: ["Авсаллар", "Аланья", "Бекташ", "Демирташ"],
      avatar: null,
      images: null,
    });
    const value = ref(false)

    const advantages = ref([])
    const categories = ref([])
    const citys = ref([])
    const properties = ref([])
    const types = ref([])

    function disable() {
      value.value = !value.value
      formData.value.deadline = ""
    }

    async function getData() {
      try {
        await pagesApi.getAll().then(resp => {
          advantages.value = resp.advantages
          categories.value = resp.categories
          citys.value = resp.citys
          properties.value = resp.properties
          types.value = resp.types
        })
      } catch (err) {
        console.log(err)
      }
    }

    onMounted(() => {
      getData()
    })

    return {
      formData,
      value,
      disable,
      advantages,
      categories,
      citys,
      properties,
      types,
    };
  },
});
</script>
