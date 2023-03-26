<template>
  <q-page class="params-list">
    <div class="row q-mb-md items-center justify-between">
      <div class="text-h5 ">Общие параметры</div>
    </div>

    <div class="row">
      <div class="col-12 col-lg-6 q-pr-md">
        <Advantages :list="advantages" title="Преимущества" single="Преимущество" />

        <q-list bordered class="rounded-borders q-mb-md">
          <q-expansion-item
            expand-separator
            label="Регионы"
            class="text-bold"
          >
            <q-card>
              <q-card-section style="font-weight: 400;">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>

        <q-list bordered class="rounded-borders q-mb-md">
          <q-expansion-item
            expand-separator
            label="Преимущества"
            class="text-bold"
          >
            <q-card>
              <q-card-section style="font-weight: 400;">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>

      <div class="col-12 col-lg-6 q-pr-md">
        <q-list bordered class="rounded-borders q-mb-md">
          <q-expansion-item
            expand-separator
            label="Дистанция до моря"
            class="text-bold"
          >
            <q-card>
              <q-card-section style="font-weight: 400;">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>

        <q-list bordered class="rounded-borders q-mb-md">
          <q-expansion-item
            expand-separator
            label="Инфраструктура"
            class="text-bold"
          >
            <q-card>
              <q-card-section style="font-weight: 400;">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>
    
  </q-page>
  
</template>

<script>
import { ref, defineComponent, onMounted } from 'vue'
import Advantages from 'src/components/pages/admin/params/Advantages'
import { pagesApi } from 'src/api/pages'

export default defineComponent({
  components: {
    Advantages,
  },
  setup() {
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

    return {
      advantages,
      categories,
      citys,
      properties,
      types,
      distances,
      layoutOptions,
    }
  },
})
</script>