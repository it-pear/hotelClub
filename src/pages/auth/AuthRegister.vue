<template>
  <q-page class="auth-page">
    <div class="column q-pa-lg">
      <div class="row">
        
        <q-card  bordered>
          <q-card-section style="border-bottom: 1px solid rgba(0, 0, 0, 0.12)">
            <h4 class="text-h5 text-dark q-my-md" >Регистрация</h4>
          </q-card-section>

          <q-form @submit="onSubmit">
            <q-card-section>
              <!-- @click="switchTypeForm" -->
              <div class="q-px-sm q-pt-xl">

                <q-input
                  square
                  clearable
                  v-model="formData.email"
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
                  v-model="formData.username"
                  lazy-rules
                  :rules="[required, short]"
                  type="username"
                  label="Никнейм"
                >
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
                
                <q-input
                  square
                  clearable
                  v-model="formData.password"
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

                <q-input
                  square
                  clearable
                  v-model="formData.repassword"
                  :type="passwordFieldType"
                  lazy-rules
                  :rules="[required, short]"
                  label="Повторить пароль"
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
                label="Зарегистрироваться"
                type="submit"
              />
            </q-card-actions>
          </q-form>

          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">
              Есть аккаунт? 
              <q-btn flat padding="0" to="/login">Войти</q-btn>
            </p>
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

  const $q = useQuasar()

  const visibility = ref(false)
  const visibilityIcon = ref('visibility')
  const passwordFieldType = ref('password')

  const formData = ref({
    email: null,
    username: null,
    password: null,
    repassword: null,
  })

  const onSubmit = async () => {
    if (formData.value.password === formData.value.repassword) {
      try {
        const resp = await authApi.doRegister(formData.value)
        $q.notify({
          icon: "done",
          color: "positive",
          message: "Вы успешно Зарегистрировались",
        })
        if (resp === 'admin') router.push('/admin')
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
    } else {
      $q.notify({
        color: "negative",
        message: "Пароли не совпадают",
      })
    }
  }

  function switchVisibility() {
    visibility.value = !visibility.value
    passwordFieldType.value = visibility.value ? "text" : "password"
    visibilityIcon.value = visibility.value ? "visibility_off" : "visibility"
  }

  const required = (val) => {
    return (val && val.length > 0) || "Поле должно быть заполнено"
  }
  const short = (val) => {
    return (val && val.length > 3) || "Значение слишком короткое"
  }
  const isEmail = (val) => {
    const emailPattern =
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
    return emailPattern.test(val) || "Введите корректный email"
  }

</script>

