<template>
  <q-page class="user-single">
    <div class="text-h5 q-mb-xl">Редактировать пользователя </div>
    <q-form @submit="updateUser" @reset="onReset" class="q-gutter-md">
      <div class="row">
        <div class="col-12 col-lg-6 q-pr-md">
          <q-input
            filled
            v-model="formData.name"
            label="Имя пользователя"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Поле не должно быть пустым',
            ]"
          />
          <q-select 
            filled 
            v-model="formData.role" 
            :options="optionsUsers" 
            label="Роль пользователя (админ может изменять контент)" 
            emit-value
            map-options
          />

          <div class="q-mt-lg">
            <q-btn
              unelevated
              rounded
              no-caps
              color="primary"
              label="Обновить Пользователя"
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
              to="/admin/users"
            />
          </div>
          
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { userApi } from 'src/api/users'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()

    const formData = ref({
      name: '',
      role: ''
    })

    const optionsUsers = ref([
      {
        label: 'Администратор',
        value: 1
      },
      {
        label: 'Пользователь',
        value: 0
      },
    ])

    const idUser = ref(route.params.id)

    async function getUser() {
      try {
        await userApi.getById(idUser.value).then(resp => {
          formData.value.name = resp.name
          formData.value.role = resp.role
          console.log(resp)
        })
      } catch (err) {
        console.log(err)
      }
    }

    onMounted(() => {
      getUser()
    })

    return {
      formData,
      optionsUsers,
    }
  },
})
</script>