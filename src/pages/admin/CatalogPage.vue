<template>
  <q-page class="catalog-page">
    <div class="filter q-pb-lg">
      <div class="text-h5 q-mb-md">Фильтр по параметрам</div>
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

      <template v-slot:body-cell-image="props">
        <q-td :props="props" class="td-image">
          <img :src="props.row.image" alt="">
        </q-td>
      </template>

      <template v-slot:bottom>
        
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue'
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
      { name: 'seadline', align: 'left', label: 'Срок сдачи', field: 'deadline' },
      { name: 'layout', align: 'left', label: 'планировка', field: 'layout', sortable: true, },
      { name: 'numberStoreys', align: 'left', label: 'Этажность', field: 'numberStoreys', sortable: true, },
      { name: 'finishing', align: 'left', label: 'Отделка', field: 'finishing', sortable: true },
      { name: 'price', align: 'left', label: 'Цена', field: 'price', sortable: true, },
      { name: 'city', align: 'left', label: 'Город', field: 'city' },
      { name: 'area', align: 'left', label: 'Район', field: 'area', sortable: true, },
      { name: 'distanceSea', align: 'left', label: 'Расстояние до моря', field: 'distanceSea', sortable: true, },
    ])

    const rows = ref([
      {
        id: 1,
        image: 'https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-personal-personalization-profile-user-line-icon-vector-png-image_1984805.jpg',
        name: 'Роскошные апартаменты в районе Авсаллар',
        apartType: 'Новостройка',
        square: '55.00 м2',
        seadline: 'Сдана',
        layout: '1+1',
        numberStoreys: '1 из 9',
        finishing: 'Чистовая',
        price: 80000,
        city: 'Аланья',
        area: 'Авсаллар',
        distanceSea: 1300,
      },
    ])

    const visibleColumns = ref(['id', 'image', 'name', 'apartType', 'square', 'layout', 'finishing', 'numberStoreys', 'price', 'city', 'area'])
    const selected = ref([])

    const tab = ref(false)
    return {
      columns,
      selected,
      rows,
      tab,
      visibleColumns,
      getSelectedString () {
        return selected.value.length === 0 ? '' : `${selected.value.length} объект${selected.value.length > 1 ? 's' : ''} выбран из ${rows.length}`
      }
    }
  },
})
</script>
