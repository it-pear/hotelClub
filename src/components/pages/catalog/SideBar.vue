<template>
  <q-card flat class="my-sidebar ">
    <q-card-section class="q-pt-none" style="padding-left: 0;padding-right: 0;">
      <div class="text-h6">Фильтр по критериям</div>
    </q-card-section>

    <q-card-section class="q-pt-none" style="padding-left: 0;padding-right: 0;">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-expansion-item
          style="border-radius: 4px; border: 1px solid rgba(0, 0, 0, 0.12) !important;"
          icon="explore"
          label="Овновное"
          :model-value="true"
          header-class="text-primary"
          expand-icon-class="text-dark"
        >
          <q-card>
            <q-card-section class="q-pt-none">
              <div class="row">
                <div class="col q-pr-sm">
                  <q-input
                    v-model="formData.id"
                    label="ID объекта"
                    lazy-rules
                    type="number"
                  />
                </div>
                <div class="col q-pl-sm">
                  <q-select
                    v-model="formData.category"
                    :options="formData.categoryOptions"
                    label="Вид"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col q-pr-sm">
                  <q-input
                    v-model="formData.priceTo"
                    label="Цена от"
                    lazy-rules
                    type="number"
                  />
                </div>
                <div class="col q-pl-sm">
                  <q-input
                    v-model="formData.PriceFor"
                    label="Цена до"
                    lazy-rules
                    type="number"
                  />
                </div>
              </div>

              <q-select
                v-model="formData.rooms"
                :options="formData.roomsOptions"
                label="Кол-во комнат"
                multiple
                emit-value
                map-options
              >
                <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                  <q-item v-bind="itemProps">
                    <q-item-section>
                      <q-item-label v-html="opt.label" />
                    </q-item-section>
                    <q-item-section side>
                      <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          style="border-radius: 4px; border: 1px solid rgba(0, 0, 0, 0.12) !important;"
          icon="explore"
          label="Местоположение"
          header-class="text-primary"
          expand-icon-class="text-dark"
        >
          <q-card>
            <q-card-section class="q-pt-none">
              <q-select
                v-model="formData.city"
                :options="formData.cityOptions"
                label="Выберите город"
              />
              <q-select
                v-model="formData.region"
                :options="formData.regionOptions"
                label="Выберите район"
                multiple
                emit-value
                map-options
              >
                <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                  <q-item v-bind="itemProps">
                    <q-item-section>
                      <q-item-label v-html="opt.label" />
                    </q-item-section>
                    <q-item-section side>
                      <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <q-select
                v-model="formData.sea"
                :options="formData.seaOptions"
                label="Расстояние до моря"
                multiple
                emit-value
                map-options
              >
                <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                  <q-item v-bind="itemProps">
                    <q-item-section>
                      <q-item-label v-html="opt.label" />
                    </q-item-section>
                    <q-item-section side>
                      <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        
        <q-expansion-item
          style="border-radius: 4px; border: 1px solid rgba(0, 0, 0, 0.12) !important;"
          icon="explore"
          label="Дополнительно"
          header-class="text-primary"
          expand-icon-class="text-dark"
        >
          <q-card>
            <q-card-section class="q-pt-none">
              <q-select
                v-model="formData.infa"
                :options="formData.infaOptions"
                label="Инфраструктура"
                multiple
                emit-value
                map-options
              >
                <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                  <q-item v-bind="itemProps">
                    <q-item-section>
                      <q-item-label v-html="opt.label" />
                    </q-item-section>
                    <q-item-section side>
                      <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

              <q-select
                v-model="formData.prem"
                :options="formData.premOptions"
                label="Преимущества"
                multiple
                emit-value
                map-options
              >
                <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                  <q-item v-bind="itemProps">
                    <q-item-section>
                      <q-item-label v-html="opt.label" />
                    </q-item-section>
                    <q-item-section side>
                      <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

              <q-select
                v-model="formData.type"
                :options="formData.typeOptions"
                label="Тип квартиры"
                multiple
                emit-value
                map-options
              >
                <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                  <q-item v-bind="itemProps">
                    <q-item-section>
                      <q-item-label v-html="opt.label" />
                    </q-item-section>
                    <q-item-section side>
                      <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

            </q-card-section>
          </q-card>
        </q-expansion-item>
        
        <div>
          <q-btn 
            unelevated 
            rounded 
            label="Поиск" 
            type="submit" 
            color="primary"
          />
          <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm" />
        </div>

      </q-form>
    </q-card-section>

  </q-card>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const formData = ref({
      category: null,
      categoryOptions: [
        {
          label: 'Аренда',
          value: 1
        },
        {
          label: 'Покупка',
          value: 2
        },
      ],
      rooms: null,
      roomsOptions: [
        {
          label: '1 км.',
          value: 1
        },
        {
          label: '2 км.',
          value: 2
        },
        {
          label: '3 км.',
          value: 3
        },
        {
          label: '4 км.',
          value: 4
        },
        {
          label: '5 км.',
          value: 5
        },
        {
          label: '6 км.',
          value: 6
        },
      ],
      city: null,
      cityOptions: [
        {
          label: 'Все города',
          value: 1
        },
        {
          label: 'Алания',
          value: 2
        },
        {
          label: 'Город 2',
          value: 3
        },
      ],
      region: null,
      regionOptions: [
        {
          label: 'Район 1',
          value: 1
        },
        {
          label: 'Район 2',
          value: 2
        },
        {
          label: 'Район 3',
          value: 3
        },
        {
          label: 'Район 4',
          value: 4
        },
        {
          label: 'Район 5',
          value: 5
        },
      ],
      sea: null,
      seaOptions: [
        {
          label: '0-150 м.',
          value: 1
        },
        {
          label: '150-500 м.',
          value: 2
        },
        {
          label: '500-1000 м.',
          value: 3
        },
        {
          label: '1000+ м.',
          value: 4
        },
      ],
      infa: null,
      infaOptions: [
        {
          label: 'Бар у бассейна',
          value: 1
        },
        {
          label: 'Детская площадка',
          value: 2
        },
        {
          label: 'Мини-гольф',
          value: 3
        },
        {
          label: 'Открытый бассейн',
          value: 4
        },
        {
          label: 'Прогулочные дорожки',
          value: 5
        },
        {
          label: 'Cолнечные батареи',
          value: 6
        },
        {
          label: 'Барбекю',
          value: 7
        },
        {
          label: 'Баскетбольная площадка',
          value: 8
        },
      ],
      prem: null,
      premOptions: [
        {
          label: 'Гражданство Турции',
          value: 1
        },
        {
          label: 'Район открыт для ВНЖ',
          value: 2
        },
        {
          label: 'От застройщика',
          value: 3
        },
        {
          label: 'От собственников',
          value: 4
        },
        {
          label: 'Первая линия',
          value: 5
        },
        {
          label: 'С отдельной кухней',
          value: 6
        },
      ],
      type: null,
      typeOptions: [
        {
          label: 'Лофт',
          value: 1
        },
        {
          label: 'Пентхаус',
          value: 2
        },
        {
          label: 'Садовый дуплекс',
          value: 3
        },
        {
          label: 'Дуплекс',
          value: 4
        },
      ],
      id: '',
      priceTo: '',
      PriceFor: '',
    })

    return {
      formData
    }
  },
})
</script>
