<template>
  <q-page class="catalog-page">
    <q-table
      bordered
      :rows="rows"
      :grid="tab"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
    >
      <template v-slot:top>
        <q-tabs
          v-model="tab"
          class="text-primary"
        >
          <q-tab :name="false" icon="svguse:icons/allIcons.svg#list" />
          <q-tab :name="true" icon="svguse:icons/allIcons.svg#kub" />
        </q-tabs>

        <q-space />

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
          style="min-width: 200px"
        />
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
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
      { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
      { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
      { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
      { name: 'protein', label: 'Protein (g)', field: 'protein' },
      { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
      { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
      { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
    ])

    const rows = ref([
      {
        id: 1,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
    ])
    const selected = ref([])

    const tab = ref(true)
    return {
      columns,
      selected,
      rows,
      tab,
      getSelectedString () {
        return selected.value.length === 0 ? '' : `${selected.value.length} объект${selected.value.length > 1 ? 's' : ''} выбран из ${rows.length}`
      }
    }
  },
})
</script>
