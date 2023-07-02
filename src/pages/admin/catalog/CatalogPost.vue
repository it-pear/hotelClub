<template>
  <q-page class="catalog-page">
    <div class="filter q-pb-lg">
      <div class="row q-mb-md items-center justify-between">
        <div class="text-h5 ">Фильтр по параметрам</div>
        <q-btn 
          outline 
          round 
          color="primary" 
          icon="add" 
          class="q-mr-md" 
          to="catalog/create" 
        />
      </div>
      <FilterCatalog />
    </div>

    <q-table
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      class="my-table"
    >

      <template v-slot:body-cell-name="props">
        <q-td :props="props" class="td-name">
          <div style="max-width: 10vw; overflow: hidden;">{{props.row.name}}</div>
        </q-td>
      </template>
      <template v-slot:body-cell-image="props">
        <q-td :props="props" class="td-image">
          <img :src="`http://127.0.0.1:8000/${props.row.image}`" alt="">
          <!-- <img :src="`http://62.217.177.152/${props.row.image}`" alt=""> -->
        </q-td>
      </template>
      <template v-slot:body-cell-custom="props">
        <q-td :props="props" class="td-custom">
          <div>
            <q-btn outline round color="primary" icon="edit" class="q-mr-md" :to="`catalog/${props.row.id}`" />
            <q-btn outline round color="negative" icon="delete" @click="delPost(props.row.id)" />
          </div>
        </q-td>
      </template>

      <template v-slot:bottom>
        
      </template>
    </q-table>
    
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { postsApi } from 'src/api/post'
import FilterCatalog from 'src/components/pages/admin/catalog/FilterCatalog'
 
const columns = ref([
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: 'id',
    sortable: true
  },
  { name: 'image', align: 'left', label: 'Картинка', field: 'image', sortable: false },
  { name: 'name', align: 'left', label: 'Название', field: 'name', sortable: false },
  // { name: 'apartType', align: 'left', label: 'Тип квартиры', field: row => row.type?.name, sortable: true, },
  { name: 'square', align: 'left', label: 'Площадь', field: 'square', sortable: true, },
  // { name: 'deadline', align: 'left', label: 'Срок сдачи', field: 'deadline' },
  { name: 'layout', align: 'left', label: 'планировка', field: row => row.layout?.name, sortable: true, },
  // { name: 'numberStoreys', align: 'left', label: 'Этажность', field: row => row.storeys, sortable: true, },
  { name: 'finishing', align: 'left', label: 'Отделка', field: 'finishing', sortable: true },
  { name: 'price', align: 'left', label: 'Цена', field: 'price', sortable: true, },
  { name: 'city', align: 'left', label: 'Город', field: row => row.city?.name },
  // { name: 'region', align: 'left', label: 'Район', field: row => row.region?.name, sortable: true, },
  // { name: 'distanceSea', align: 'left', label: 'Расстояние до моря', field: row => row.distance?.name, sortable: true, },
  { name: 'custom', align: 'left', label: '', field: 'custom', sortable: false },
])
const rows = ref([])

const visibleColumns = ref(['custom', 'id', 'image', 'name', 'square', 'layout', 'finishing', 'price', 'city'])
const selected = ref([])

async function getPosts() {
  try {
    await postsApi.getAll().then(resp => {
      rows.value = resp
      console.log(resp)
    })
  } catch (err) {
    console.log(err)
  }
}
async function delPost(id) {
  try {
    await postsApi.delPost(id).then(resp => {
      rows.value = rows.value.filter((item) => item.id !== id)
      console.log(resp)
    })
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getPosts()
})



</script>
