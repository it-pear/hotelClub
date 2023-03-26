<template>
  <q-page class="catalog-page">
    <div class="filter q-pb-lg">
      <div class="row q-mb-md items-center justify-between">
        <div class="text-h5 ">Пользователи</div>
        <q-btn 
          outline 
          round 
          color="primary" 
          icon="add" 
          class="q-mr-md" 
          to="services/create" 
        />
      </div>
    </div>
    
    <q-card
      class="my-card q-mb-md"
      flat
      bordered
      v-for="user in users"
      :key="user.id"
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{user.name}}</q-item-label>
          <q-item-label caption>
            {{user.email}}
          </q-item-label>
        </q-item-section>

        <q-item-section>
          <span v-if="user.role === 1">Администратор</span>
          <span v-if="user.role === 0">Пользователь</span>
        </q-item-section>

        <q-item-section style="flex-direction: row">
          <q-btn outline round color="primary" icon="edit" class="q-mr-md" style="max-width: 32px;" :to="`users/${user.id}`" />
          <q-btn outline round color="negative" icon="delete" style="max-width: 32px;" @click="delUser(user.id)" />
        </q-item-section>

      </q-item>
    </q-card>
    
  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted } from 'vue'
import { userApi } from 'src/api/users'
 
export default defineComponent({
  components: {
    
  },
  setup() {

    const users = ref([])
    async function getUsers() {
      try {
        await userApi.getAll().then(resp => {
          users.value = resp
          console.log(resp)
        })
      } catch (err) {
        console.log(err)
      }
    }

    async function delUser(id) {
      try {
        await userApi.delUser(id).then(resp => {
          users.value = users.value.filter((item) => item.id !== id)
          console.log(resp)
        })
      } catch (err) {
        console.log(err)
      }
    }

    onMounted(() => {
      getUsers()
    })

    return {
      users,
      getUsers,
      delUser,
    }
  },
})
</script>
