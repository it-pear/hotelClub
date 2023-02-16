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
      :grid="tab"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :visible-columns="visibleColumns"
      v-model:selected="selected"
      class="my-table"
    >
      <template v-slot:top>
        <q-tabs
          v-model="tab"
          class="text-primary"
        >
          <q-tab :name="false" icon="svguse:icons/allIcons.svg#list" />
          <q-tab :name="true" icon="svguse:icons/allIcons.svg#kub" />
        </q-tabs>
        <q-select
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          label="Выбор колонок"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          options-cover
          class="q-ml-auto"
          style="min-width: 200px;max-width: 300px;"
        />
      </template>

      <template v-slot:body-cell-name="props">
        <q-td :props="props" class="td-name">
          <div style="max-width: 10vw; overflow: hidden;">{{props.row.name}}</div>
        </q-td>
      </template>
      <template v-slot:body-cell-image="props">
        <q-td :props="props" class="td-image">
          <img :src="props.row.image" alt="">
        </q-td>
      </template>
      <template v-slot:body-cell-custom="props">
        <q-td :props="props" class="td-custom">
          <div>
            <q-btn outline round color="primary" icon="edit" class="q-mr-md" to="catalog/2" />
            <q-btn outline round color="negative" icon="delete" />
          </div>
        </q-td>
      </template>

      <template v-slot:bottom>
        
      </template>
    </q-table>
    {{data}}
  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted } from 'vue'
import { postsApi } from 'src/api/post'
import FilterCatalog from 'src/components/pages/admin/catalog/FilterCatalog'
 
export default defineComponent({
  components: {
    FilterCatalog,
  },
  setup() {
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
      { name: 'apartType', align: 'left', label: 'Тип квартиры', field: 'apartType', sortable: true, },
      { name: 'square', align: 'left', label: 'Площадь', field: 'square', sortable: true, },
      { name: 'deadline', align: 'left', label: 'Срок сдачи', field: 'deadline' },
      { name: 'layout', align: 'left', label: 'планировка', field: 'layout', sortable: true, },
      { name: 'numberStoreys', align: 'left', label: 'Этажность', field: 'numberStoreys', sortable: true, },
      { name: 'finishing', align: 'left', label: 'Отделка', field: 'finishing', sortable: true },
      { name: 'price', align: 'left', label: 'Цена', field: 'price', sortable: true, },
      { name: 'city', align: 'left', label: 'Город', field: 'city' },
      { name: 'area', align: 'left', label: 'Район', field: 'area', sortable: true, },
      { name: 'distanceSea', align: 'left', label: 'Расстояние до моря', field: 'distanceSea', sortable: true, },
      { name: 'custom', align: 'left', label: '', field: 'custom', sortable: false },
    ])

    const rows = ref([])

    const visibleColumns = ref(['custom', 'id', 'image', 'name', 'square', 'layout', 'finishing', 'price', 'city'])
    const selected = ref([])

    const tab = ref(false)

    async function getPosts() {
      try {
        await postsApi.getAll().then(resp => {
          rows.value = resp
        })
      } catch (err) {
        console.log(err)
      }
    }

    onMounted(() => {
      getPosts()
    })

    return {
      columns,
      selected,
      rows,
      tab,
      visibleColumns,
      getSelectedString () {
        return selected.value.length === 0 ? '' : `${selected.value.length} объект${selected.value.length > 1 ? 's' : ''} выбран из ${rows.length}`
      },
      getPosts,
    }
  },
})
</script>
