<template>
  <q-page class="auth-page">
    <div class="column q-pa-lg">
      <div class="row">
        <q-form @submit="submit">
          <q-card  bordered>
            <q-card-section style="border-bottom: 1px solid rgba(0, 0, 0, 0.12)">
              <h4 class="text-h5 text-dark q-my-md" >{{ title }}</h4>
            </q-card-section>
            <q-card-section>
              <!-- @click="switchTypeForm" -->
              <q-fab
                color="primary"
                
                icon="add"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
              >
                <q-tooltip> Регистрация нового пользователя </q-tooltip>
              </q-fab>
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
                  v-model="username"
                  lazy-rules
                  :rules="[required, short]"
                  type="username"
                  label="Пользователь"
                >
                  <template v-slot:prepend>
                    <q-icon name="person" />
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

                <q-input
                  square
                  clearable
                  v-model="repassword"
                  :type="passwordFieldType"
                  lazy-rules
                  :rules="[required, short, diffPassword]"
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
                :label="btnLabel"
              />
            </q-card-actions>
            <q-card-section v-if="!register" class="text-center q-pa-sm">
              <p class="text-grey-6">Забыли пароль?</p>
            </q-card-section>
          </q-card>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent, computed } from "vue";
import { useQuasar } from 'quasar'

export default defineComponent({
  name: "AuthPage",
  components: {},
  setup() {
    const $q = useQuasar()

    const register = ref(false)
    const visibility = ref(false)
    const visibilityIcon = ref('visibility')
    const passwordFieldType = ref('password')

    const title = computed(() => {
      if (register.value) return 'Регистрация'
      else return 'Вход'
    })

    const email = ref('')
    const username = ref('')
    const password = ref('')
    const repassword = ref('')

    function submit() {
      // if () {
      //   console.log('регистрация')
      // } else {
      //   console.log('вход')
      // }

      // if (!register.value)
      //   if (!email.value.hasError && !password.value.hasError) {
      //     $q.notify({
      //       icon: "done",
      //       color: "positive",
      //       message: "Авторизация",
      //     });
      //   }
    }
    // function switchTypeForm() {
    //   register.value = !register.value;
    //   title.value = register.value ? "Новый пользователь" : "Авторизация";
    //   btnLabel.value = register.value ? "Регистрация" : "Вход";
    // }
    function switchVisibility() {
      visibility.value = !visibility.value;
      passwordFieldType.value = visibility.value ? "text" : "password";
      visibilityIcon.value = visibility.value ? "visibility_off" : "visibility";
    }

    // function required(val) {
    //   return (val && val.length > 0) || "Поле должно быть заполнено";
    // }
    // function diffPassword(val) {
    //   const val2 = password.value;
    //   return (val && val === val2) || "Пароль не совпадает!";
    // }
    // function short(val) {
    //   return (val && val.length > 3) || "Значение слишком короткое";
    // }
    // function isEmail(val) {
    //   const emailPattern =
    //     /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    //   return emailPattern.test(val) || "Введите корректный email";
    // }

    return {
      register,
      email,
      username,
      password,
      repassword,
      visibility,
      visibilityIcon,
      title,
      submit,
      switchVisibility,
    };
  },
});
</script>

