<template>
  <q-page class="catalog-single">
    <div class="text-h5 q-mb-xl">Изменение услуги "{{formData.name}}"</div>

    <q-form @submit="updateObject" @reset="onReset" class="q-gutter-md">
      <div class="row">
        <div class="col-12 col-lg-6 q-pr-md">
          
          <q-input
            filled
            v-model="formData.name"
            label="Название услуги"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Поле не должно быть пустым',
            ]"
          />
          <q-toggle v-model="formData.is_recommended"   label="Рекомендуемая услуга" class="q-mb-md" />

          <div class="row">
            <!-- <div class="col-12 q-pr-sm q-mb-lg">
              <img :src="`http://127.0.0.1:8000/${formData.image}`" alt="">
              <q-btn
                rounded
                outline
                no-caps
                label="Удалить"
                type="reset"
                color="primary"
                class="q-ml-sm"
                size="lg"
              />
            </div> -->
            <div class="col-12 q-pr-sm q-mb-lg">
              <div class="form-group">
                <div class="text-subtitle2 q-mb-sm">Заменить изображение</div>
                <img :src="`http://127.0.0.1:8000/${formData.image}`" alt="" style="max-width: 300px;">
                <q-uploader
                  @added="onFileChange"
                  accept=".jpg, .png, image/*"
                  label="Перетащите или выберите изображение"
                  style="max-width: 100%;width: 100%;"
                />
              </div>
            </div>
          </div>

          <div class="col-12 q-pr-sm q-mb-lg">
            <div class="form-group">
              <div class="text-subtitle2 q-mb-sm">Небольшое описание услуги</div>
              <q-input
                filled
                type="textarea"
                v-model="formData.prev_description"
                maxlength="100"
                label="описание для превью текста"
                lazy-rules
                class="q-mb-md"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Поле не должно быть пустым',
                ]"
              />

            </div>
          </div>
          
          
          <div class="col-12 q-pr-sm q-mb-lg">
            <div class="form-group">
              <div class="text-subtitle2 q-mb-sm">Описание услуги</div>
              <q-editor
                v-model="formData.description"
                :dense="$q.screen.lt.md"
                class="q-mb-lg"
                :toolbar="[
                  [
                    {
                      label: $q.lang.editor.align,
                      icon: $q.iconSet.editor.align,
                      fixedLabel: true,
                      list: 'only-icons',
                      options: ['left', 'center', 'right', 'justify']
                    },
                  ],
                  ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                  ['token', 'hr', 'custom_btn'],
                  ['fullscreen'],
                  [
                    {
                      label: 'формат',
                      icon: $q.iconSet.editor.formatting,
                      list: 'no-icons',
                      options: [
                        'p',
                        'h1',
                        'h2',
                        'h3',
                        'h4',
                        'h5',
                        'h6',
                        'code'
                      ]
                    },
                    {
                      label: $q.lang.editor.fontSize,
                      icon: $q.iconSet.editor.fontSize,
                      fixedLabel: true,
                      fixedIcon: true,
                      list: 'no-icons',
                      options: [
                        'size-1',
                        'size-2',
                        'size-3',
                        'size-4',
                        'size-5',
                        'size-6',
                        'size-7'
                      ]
                    },
                    {
                      label: $q.lang.editor.defaultFont,
                      icon: $q.iconSet.editor.font,
                      fixedIcon: true,
                      list: 'no-icons',
                      options: [
                        'default_font',
                        'arial',
                        'arial_black',
                        'comic_sans',
                        'courier_new',
                        'impact',
                        'lucida_grande',
                        'times_new_roman',
                        'verdana'
                      ]
                    },
                    'removeFormat'
                  ],
                  ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                  ['undo', 'redo'],
                  ['viewsource']
                ]"
                :fonts="{
                  arial: 'Arial',
                  arial_black: 'Arial Black',
                  comic_sans: 'Comic Sans MS',
                  courier_new: 'Courier New',
                  impact: 'Impact',
                  lucida_grande: 'Lucida Grande',
                  times_new_roman: 'Times New Roman',
                  verdana: 'Verdana'
                }"
              />
            </div>
          </div>
          

          <q-input
            filled
            type="number"
            v-model="formData.price"
            label="Цена (euro)"
            lazy-rules
            class="q-mb-md"
            
          />
        </div>

      </div>

      <div>
        <q-btn
          unelevated
          rounded
          no-caps
          color="primary"
          label="Обновить услугу"
          padding="9.5px 24px"
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
          to="/admin/services"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { useQuasar } from "quasar";
import { servicesApi } from 'src/api/services'

export default defineComponent({
  setup() {
    const $q = useQuasar()
    const route = useRoute()
    const router = useRouter()

    const formData = ref({
      name: '',
      prev_description: '',
      description: '',
      image: '',
      price: '',
      is_recommended: false,
    });

    const idService = ref(route.params.id)

    function onFileChange(file) {
      formData.value.image = file[0]
    }

    async function getService() {
      try {
        await servicesApi.getById(idService.value).then(resp => {
          formData.value = resp
          if (formData.value.is_recommended === 0) {
            formData.value.is_recommended = false
          } else {
            formData.value.is_recommended = true
          }
          console.log(resp)
        })
      } catch (err) {
        console.log(err)
      }
    }

    async function updateObject() {

      if (formData.value.is_recommended === true) {
        formData.value.is_recommended = 1
      } else {
        formData.value.is_recommended = 0
      }

      try {
        await servicesApi.updateService(formData.value).then(resp => {
          console.log(resp)
          router.push('/admin/services')
        })
      } catch (err) {
        console.log(err)
      } finally {
        formData.value.is_recommended = false
      }
    }

    onMounted(() => {
      getService()
    })


    return {
      idService,
      formData,
      onFileChange,
      updateObject,
    };
  },
});
</script>
