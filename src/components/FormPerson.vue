<template>
  <div class="form-call">
    <div class="title">Оставьте свои контакты</div>
    <div class="subtitle">Оставьте свои контакты, и мы свяжемся с вами в ближайшее время</div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="bg-blue-grey-1"
    >
      <div class="row">
        <div class="col-12 col-md-3">
          <q-input
            outlined 
            v-model="name"
            label="Ваше имя"
            type="text"
          />
        </div>
        <div class="col-12 col-md-3">
          <q-input
            outlined 
            v-model="name"
            label="Ваш E-mail"
            type="text"
          />
        </div>
        <div class="col-12 col-md-3">
          <q-input
            outlined 
            v-model="name"
            label="Ваш номер"
            type="number"
          />
        </div>
        <div class="col-12 col-md-3">
          <div class="btn-sec">
            <q-btn label="Отправить" type="submit" unelevated rounded  color="primary"/>
          </div>
        </div>
      </div>
      <div class="text-subtitle1 text-blue-grey-3 text-center q-mt-md" style="width: 100%;">Нажимая «Отправить», вы соглашаетесь с условиями политики конфиденциальности</div>
    </q-form>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  setup() {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      name,
      age,

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
})
</script>
