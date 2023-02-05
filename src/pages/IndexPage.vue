<template>
  <q-page>
    <GeneralPage />
    <HotDeals />
    <PropertyRental />
    <BayRental />
    <DocumentsSec />
    <div class="container q-pt-lg">
      <FormPerson />
    </div>
    <TeamSec />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import GeneralPage from 'src/components/pages/home/GeneralPage'
import HotDeals from 'src/components/pages/home/HotDeals'
import PropertyRental from 'src/components/pages/home/PropertyRental'
import BayRental from 'src/components/pages/home/BayRental'
import DocumentsSec from 'src/components/pages/home/DocumentsSec'
import TeamSec from 'src/components/pages/home/TeamSec'
import FormPerson from 'src/components/FormPerson'

export default defineComponent({
  name: 'IndexPage',
  components: {
    GeneralPage,
    PropertyRental,
    HotDeals,
    BayRental,
    DocumentsSec,
    TeamSec,
    FormPerson
  }
})
</script>
