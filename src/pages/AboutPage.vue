<template>
  <q-page class="about">
    <div class="container column">
      <h2 class="text-h3 text-weight-medium text-center">Контакты</h2>
      
      <div class="content">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25643.40929726009!2d31.995142423367618!3d36.54383619860756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dca27b822cd5fb%3A0xd160c1c8b3dc170b!2z0JDQu9Cw0L3RjNGPLCDQkNC90YLQsNC70LjRjywg0KLRg9GA0YbQuNGP!5e0!3m2!1sru!2sru!4v1675632591122!5m2!1sru!2sru" width="50%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <q-card-section class="info">
              <div class="text-overline">Турция, Аланья</div>
              <div class="text-h5 q-mt-sm q-mb-xs text-weight-medium">
                Кадипаша Мах. Культура САПР. Günaydın Hotel No: 2/A 07400 Аланья/АНТАЛИЯ
              </div>
              <div class="row work-sec">
                <div class="col-6 col-md-4 item">
                  <div class="title text-blue-4">Рабочие часы</div>
                  <div class="subtitle">
                    <div>пн-пт c 9:00 до 18:00</div>
                    <div>сб c 9:00 до 15:00</div>
                    <div>вс выходной</div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                  <div class="title text-blue-4">Телефоны</div>
                  <div class="subtitle">+90536-336-9711</div>
                  <div class="subtitle">+90531 829 9735</div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                  <div class="title text-blue-4">Мессенджеры</div>
                  <q-btn flat round color="primary" icon="phone" type="a" href="tel:+905335024004" />
                  <q-btn flat round color="primary" icon="fab fa-whatsapp" type="a" target="_blank" href="https://wa.me/905335024004" />
                  <q-btn flat round color="primary" icon="fab fa-telegram" type="a" target="_blank" href="https://t.me/vivamente_alanya" />
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                  <div class="title text-blue-4">Почта</div>
                  <div class="subtitle">info@vivamente.com</div>
                  <div class="subtitle">sales@vivamente.com</div>
                </div>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>

      <TeamSec />

      <FormPerson class="q-mt-lg" />
    </div>
  </q-page>
</template>

<script setup>
import FormPerson from 'src/components/FormPerson'
import TeamSec from 'src/components/pages/home/TeamSec'
</script>
