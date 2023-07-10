<template>
  <section class="general-page">
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
          v-model="tab"
          inline-label
          class="bg-blue-grey-1 text-blue-grey-13 shadow-2"
        >
          <q-tab name="1" icon="home" label="Покупка" />
          <q-tab name="2" icon="money" label="Аренда" />
        </q-tabs>
        <div class="row content bg-blue-grey-1">
          <div class="col-xs-6 col-md-3 col-3 q-pa-sm">
            <q-input
              type="number"
              v-model="form.id"
              label="ID Объекта"
              lazy-rules
            />
          </div>
          <div class="col-xs-6 col-md-3 col-3 q-pa-sm">
            <q-select
              v-model="model"
              :options="options"
              label="Кол-во комнат"
              multiple
              emit-value
              map-options
            >
              <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                <q-item v-bind="itemProps">
                  <q-item-section>
                    <q-item-label v-html="opt.label" />
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
              v-model="form.priceTo"
              label="Цена От"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Пожалуйста заполните это поле',
              ]"
            />
          </div>
          <div class="col-xs-6 col-md-3 col-3 q-pa-sm">
            <q-input
              type="number"
              v-model="form.PriceFor"
              label="Цена до"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Пожалуйста заполните это поле',
              ]"
            />
          </div>

          <div class="row col-12 additation">
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

<script>
import { useQuasar } from 'quasar'
import {ref} from 'vue'

export default {
  setup() {
    const $q = useQuasar()

    const form = ref({
      id: '',
      priceTo: '',
      PriceFor: '',
    })
    const accept = ref(false)

    const model = ref(null)
    const options = ref([
      {
        label: '1 км.',
        value: 1
      },
      {
        label: '2 км.',
        value: 2
      },
      {
        label: '3 км.',
        value: 3
      },
      {
        label: '4 км.',
        value: 4
      },
      {
        label: '5 км.',
        value: 5
      },
      {
        label: '6 км.',
        value: 6
      },
    ])
    

    return {
      form,
      accept,
      tab: ref('1'),
      model,
      options,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  },
}
</script>