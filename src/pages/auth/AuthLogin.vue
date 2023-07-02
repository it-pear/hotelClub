<template>
  <q-page class="auth-page">
    <div class="column q-pa-lg">
      <div class="row">
        
        <q-card  bordered>
          <q-card-section style="border-bottom: 1px solid rgba(0, 0, 0, 0.12)">
            <h4 class="text-h5 text-dark q-my-md" >Вход</h4>
          </q-card-section>

          <q-form @submit="onSubmit">
            <q-card-section>
              <!-- @click="switchTypeForm" -->
              <div class="q-px-sm q-pt-xl">

                <q-input
                  square
                  clearable
                  v-model="email"
                  type="email"
                  lazy-rules
                  :rules="[required, isEmail, short]"
                  label="Email"
                >
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                
                <q-input
                  square
                  clearable
                  v-model="password"
                  :type="passwordFieldType"
                  lazy-rules
                  :rules="[required, short]"
                  label="Пароль"
                >
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                  <template v-slot:append>
                    <q-icon
                      :name="visibilityIcon"
                      @click="switchVisibility"
                      class="cursor-pointer icon-pr"
                    />
                  </template>
                </q-input>

              </div>
            </q-card-section>

            <q-card-actions class="q-px-lg">
              <q-btn
                unelevated
                rounded
                size="lg"
                color="primary"
                class="full-width text-white"
                label="Войти"
                type="submit"
              />
            </q-card-actions>
          </q-form>

          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Нет аккаунта? <q-btn flat padding="0" to="/register">Зарегистрироваться</q-btn></p>
          </q-card-section>
        </q-card>
      
      </div>
    </div>
  </q-page>
</template>

<script setup>
  import { ref } from "vue"
  import { authApi } from "src/api/auth"
  import { useQuasar } from 'quasar'
  import { useRouter } from 'vue-router'

  const $q = useQuasar()
  const router = useRouter()

  const visibility = ref(false)
  const visibilityIcon = ref('visibility')
  const passwordFieldType = ref('password')

  const email = ref(null)
  const password = ref(null)

  const required = (val) => {
    return (val && val.length > 0) || "Поле должно быть заполнено"
  }
  const onSubmit = async () => {
    try {
      const resp = await authApi.doLogin(email.value, password.value)
      
      if (resp === 'admin') {
        $q.notify({
          icon: "done",
          color: "positive",
          message: "Вы успешно вошли",
        })
        router.push('/admin')
      }
      else {
        $q.notify({
          color: "negative",
          message: "Нет прав доступа",
        })
      }
    } catch (error) {
      console.log(error)
      $q.notify({
        color: "negative",
        message: "Произошла ошибка",
      })
    }
  }

  const switchVisibility = () => {
    visibility.value = !visibility.value
    passwordFieldType.value = visibility.value ? "text" : "password"
    visibilityIcon.value = visibility.value ? "visibility_off" : "visibility"
  }
  const isEmail = (val) => {
    const emailPattern =
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
    return emailPattern.test(val) || "Введите корректный email"
  }
  const short = (val) => {
    return (val && val.length > 3) || "Значение слишком короткое"
  }

</script>