<template>
  <q-page class="catalog-page">
    <div class="filter q-pb-lg">
      <div class="row q-mb-md items-center justify-between">
        <div class="text-h5 ">Услуги</div>
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
    <q-table
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
      class="my-table"
    >
      <template v-slot:body-cell-name="props">
        <q-td :props="props" class="td-name">
          <div style="max-width: 10vw; overflow: hidden;">{{props.row.name}}</div>
        </q-td>
      </template>
      <template v-slot:body-cell-image="props">
        <q-td :props="props" class="td-image">
          <img :src="`http://62.217.177.152/${props.row.image}`" alt="">
        </q-td>
      </template>
      <template v-slot:body-cell-custom="props">
        <q-td :props="props" class="td-custom">
          <div>
            <q-btn outline round color="primary" icon="edit" class="q-mr-md" :to="`services/${props.row.id}`" />
            <q-btn outline round color="negative" icon="delete" @click="delService(props.row.id)" />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-prev_description="props">
        <q-td :props="props" class="td-prevdesc">
          <div 
            style="max-width: 250px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;  
            overflow: hidden;
            white-space: normal;
            text-overflow: ellipsis;"
          >
            {{props.row.prev_description}}
          </div>
        </q-td>
      </template>

      <template v-slot:bottom>
        
      </template>
    </q-table>
    
  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted } from 'vue'
import { servicesApi } from 'src/api/services'
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
      {name: 'image',align: 'left',label: 'Картинка',field: 'image',sortable: false},
      {name: 'name',align: 'left',label: 'Название',field: 'name',sortable: false},
      {name: 'prev_description',align: 'left',label: 'Описание',field: 'prev_description',sortable: false},
      {name: 'price',align: 'left',label: 'Цена',field: 'price',sortable: true},
      {name: 'custom',align: 'left',label: '',field: 'custom',sortable: false}
    ]);

    const rows = ref([])

    const selected = ref([])

    async function getServices() {
      try {
        await servicesApi.getAll().then(resp => {
          rows.value = resp
          console.log(resp)
        })
      } catch (err) {
        console.log(err)
      }
    }
    async function delService(id) {
      try {
        await servicesApi.delService(id).then(resp => {
          rows.value = rows.value.filter((item) => item.id !== id)
          console.log(resp)
        })
      } catch (err) {
        console.log(err)
      }
    }

    onMounted(() => {
      getServices()
    })

    return {
      columns,
      selected,
      rows,
      getSelectedString () {
        return selected.value.length === 0 ? '' : `${selected.value.length} объект${selected.value.length > 1 ? 's' : ''} выбран из ${rows.length}`
      },
      getServices,
      delService,
    }
  },
})
</script>
