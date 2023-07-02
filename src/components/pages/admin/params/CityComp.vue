<template>
  <q-dialog v-model="modal" persistent>
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section>
        <div class="text-h6 row">
          <span v-if="data.id === null">Добавить {{ single }}</span>
          <span v-else>Изменить {{ single }}</span>
          
          <q-btn icon="close" flat round dense @click="clear" class="q-ml-auto" />
        </div>
      </q-card-section>

      <q-form @submit="switches">
        <q-card-section class="q-pt-none">
          <q-input
            square
            clearable
            v-model="data.name"
            type="text"
            lazy-rules
            :rules="[required]"
            label="Введите название"
          />    
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="data.id === null ? 'Добавить': 'Изменить'" color="primary" type="submit"/>
        </q-card-actions>
      </q-form>

    </q-card>
  </q-dialog>

  <q-list bordered class="rounded-borders q-mb-md">
    <q-expansion-item
      expand-separator
      :label="title"
      class="text-bold"
    >
      <q-card 
        class="my-card q-ma-md" 
        flat bordered
        v-for="el in list"
        :key="el.id"
      >
        <q-item>
          <q-item-section>
            <q-item-label style="font-weight: 500;">
              {{el.name}} 
            </q-item-label>
          </q-item-section>
          <q-item-section style="flex-direction: row;" class="items-center">

            <q-btn
              unelevated
              rounded
              no-caps
              color="primary"
              icon="edit"
              class="q-mr-sm q-ml-auto"
              padding="4px 0"
              size="sm"
              style="min-width: 26px;"
              @click="data.id = el.id; data.name = el.name; modal = true;"
            />
            <q-btn
              unelevated
              rounded
              no-caps
              color="negative"
              icon="delete"
              delete
              padding="4px 0"
              size="sm"
              style="min-width: 26px;"
              @click="del(el.id)"
            />
          </q-item-section>
        </q-item>
      </q-card>
      <div class="q-ma-md">
        <q-btn color="primary" label="Добавить" icon="add" @click="modal = true" />
      </div>
    </q-expansion-item>
  </q-list>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { paramsApi } from 'src/api/params'

const props = defineProps({
  list: Object,
  title: String,
  single: String,
  url: String, 
  city_id: Number
})

const emit = defineEmits(['create', 'update', 'del'])

const $q = useQuasar()

const data = ref({
  id: null,
  url: props.url,
  name: null, 
  city_id: props.city_id
})

const modal = ref(false)

const create = async () => {
  try { 
    const resp = await paramsApi.createCity(data.value)
    emit('create', resp.data)
    success()
    clear()
  } catch (err) {
    console.log(err)
    error()
  }
}
const update = async () => {
  try { 
    const resp = await paramsApi.update(data.value)
    emit('update', resp.data)
    success()
    clear()
  } catch (err) {
    console.log(err)
    error()
  }
}

const switches = async () => {
  if (data.value.id === null) await create()
  else await update()
}

const del = async (id) => {
  try { 
    const resp = await paramsApi.del(data.value, id)
    emit('del', id)
    success()
    clear()
  } catch (err) {
    console.log(err)
    error()
  }
}


const clear = () => {
  data.value = {
    id: null,
    url: props.url,
    name: null
  }
  modal.value = false
}
const success = () => {
  $q.notify({
    type: 'positive',
    message: 'Обновлено'
  })
}
const error = () => {
  $q.notify({
    type: 'negative',
    message: 'Произошла ошибка, попробуйте позже'
  })
}
const required = (val) => {
  return (val && val.length > 0) || "Поле должно быть заполнено"
}

</script>