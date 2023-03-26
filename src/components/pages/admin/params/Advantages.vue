<template>
  <q-list bordered class="rounded-borders q-mb-md">
    <q-expansion-item
      expand-separator
      :label="title"
      class="text-bold"
    >
      <q-card 
        class="my-card q-ma-md" 
        flat bordered
        v-for="(el, index) in list"
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
              color="positive"
              icon="check"
              class="q-mr-sm q-ml-auto"
              padding="4px 0"
              size="sm"
              style="min-width: 26px;"
              @click="editAdvantage(el.id)"
              v-show="el.hideButton"
            />
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
              @click="el.hideButton = true"
              v-show="!el.hideButton"
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
              @click="delAdvantage(el.id)"
            />
          </q-item-section>
        </q-item>
      </q-card>
      <div class="q-ma-md">
        <q-btn color="primary" label="Добавить" icon="add" @click="alert" />
      </div>
    </q-expansion-item>
  </q-list>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  props: {
    list: Object,
    title: String,
    single: String,
  },
  setup(props, { emit }) {
    const $q = useQuasar()

    props.list.forEach(el => el.isHidden = false)
    function hideButton(el) {
      el.isHidden = true
    }

    const newElName = ref()
    function alert() {
      $q.dialog({
        title: `Добавить ${props.single}`,
        message: `Название`,
        prompt: {
          model: newElName,
          type: 'text',
          filled: true,
          placeholder: 'Введите значение'
        },
        cancel: 'Отмена',
        ok: 'Добавить'
      }).onOk(() => {
        const maxListId = props.list.reduce((prev, current) => (prev.id > current.id) ? prev : current)
        console.log(maxListId.id + ' ' + newElName.value)
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {})
    }

    function editAdvantage(id) {
      emit('editAdvantage', id)
    }
    function delAdvantage(id) {
      emit('delAdvantage', id)
    }

    return {
      alert,
      hideButton,
      editAdvantage,
      delAdvantage,
      newElName,
    }
  },
})
</script>