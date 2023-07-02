<template>
  <q-page class="params-list">
    <div class="row q-mb-md items-center justify-between">
      <div class="text-h5 ">Общие параметры</div>
    </div>

    <div class="row">
      <div class="col-12 col-lg-4 q-pr-md">
        <ParamComp 
          :list="layoutOptions" 
          title="Планировки" 
          single="планировку" 
          url="layout"
          @create="val => layoutOptions.push(val)"
          @update="(val) => {
            layoutOptions = layoutOptions.map(item => 
              item.id === val.id 
                ? {...item, name: val.name} 
                : item
            )
          }"
          @del="val => layoutOptions = layoutOptions.filter((item) => item.id !== val)"
        />
        <ParamComp 
          :list="categories" 
          title="Виды недвижимости" 
          single="вид" 
          url="type"
          @create="val => categories.push(val)"
          @update="(val) => {
            categories = categories.map(item => 
              item.id === val.id 
                ? {...item, name: val.name} 
                : item
            )
          }"
          @del="val => categories = categories.filter((item) => item.id !== val)"
        />

        <ParamComp 
          :list="types" 
          title="Типы квартир" 
          single="тип" 
          url="type"
          @create="val => types.push(val)"
          @update="(val) => {
            types = types.map(item => 
              item.id === val.id 
                ? {...item, name: val.name} 
                : item
            )
          }"
          @del="val => types = types.filter((item) => item.id !== val)"
        />
      </div>

      <div class="col-12 col-lg-4 q-pr-md">
        <ParamComp 
          :list="advantages" 
          title="Преимущества" 
          single="преимущество" 
          url="advantages"
          @create="val => advantages.push(val)"
          @update="(val) => {
            advantages = advantages.map(item => 
              item.id === val.id 
                ? {...item, name: val.name} 
                : item
            )
          }"
          @del="val => advantages = advantages.filter((item) => item.id !== val)"
        />

        <ParamComp 
          :list="properties" 
          title="Инфраструктура" 
          single="параметр" 
          url="property"
          @create="val => properties.push(val)"
          @update="(val) => {
            properties = properties.map(item => 
              item.id === val.id 
                ? {...item, name: val.name} 
                : item
            )
          }"
          @del="val => properties = properties.filter((item) => item.id !== val)"
        />
      </div>

      <div class="col-12 col-lg-4 q-pr-md">       
        <RegionsCities 
          :list="citys" 
          title="Регионы" 
          single="регион" 
          url="city"
          @create="val => citys.push({...val, region: []})"
          @update="(val) => {
            citys = citys.map(item => 
              item.id === val.id 
                ? {...item, name: val.name} 
                : item
            )
          }"
          @del="val => citys = citys.filter((item) => item.id !== val)"
        />
        
        <ParamComp 
          :list="distances" 
          title="Дистанция до моря (метры)" 
          single="дистанцию" 
          url="distance"
          @create="val => distances.push(val)"
          @update="(val) => {
            distances = distances.map(item => 
              item.id === val.id 
                ? {...item, name: val.name} 
                : item
            )
          }"
          @del="val => distances = distances.filter((item) => item.id !== val)"
        />
      </div>

    </div>

  </q-page>
  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ParamComp from 'src/components/pages/admin/params/ParamComp'
import RegionsCities from 'src/components/pages/admin/params/RegionsCities'
import { pagesApi } from 'src/api/pages'

const advantages = ref([])
const categories = ref([])
const citys = ref([])
const properties = ref([])
const types = ref([])
const distances = ref([])
const layoutOptions = ref([])

async function getData() {
  try {
    await pagesApi.getAll().then(resp => {
      advantages.value = resp.advantages
      categories.value = resp.categories
      citys.value = resp.citys
      properties.value = resp.properties
      types.value = resp.types
      distances.value = resp.distances
      layoutOptions.value = resp.layouts
    })
  } catch (err) {
    console.log(err)
  } 
}

onMounted(() => {
  getData()
})

</script>