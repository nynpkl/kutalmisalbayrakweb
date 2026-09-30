<script setup lang="ts">
const fallback = {
  eyebrow: 'Hakkımda',
  title: 'Her hasta, kendi hikâyesinin baş rolündedir.',
  text: 'Ortopedi ve Travmatoloji uzmanıyım; özellikle omuz ve dirsek cerrahisi, spor yaralanmaları ve artroskopik cerrahi alanında çalışıyorum. İyileşme sürecini kısaltmak için mümkün olan her durumda minimal invaziv artroskopik teknikleri tercih ediyor, güncel biyolojik tedavi yöntemlerini yakından takip ediyorum. 2018\'den bu yana İstanbul Tabip Odası basketbol takımının teknik direktörlüğünü de sürdürüyorum.',
  photoUrl: '/images/doktor-foto.png',
  timeline: [
    { year: '2006–2012', title: 'İstanbul Tıp Fakültesi', text: 'İstanbul Üniversitesi İstanbul Tıp Fakültesi\'nde tıp eğitimi' },
    { year: '2012–2017', title: 'Ortopedi ve Travmatoloji İhtisası', text: 'Metin Sabancı Baltalimanı Kemik Hastalıkları Eğitim ve Araştırma Hastanesi\'nde Ortopedi ve Travmatoloji ihtisası' },
    { year: '2017–2019', title: 'Artroskopi ve Spor Cerrahisi', text: 'Baltalimanı Artroskopi ve Spor Cerrahisi Kliniği\'nde çalıştı' },
    { year: '2019', title: "Omuz ve Dirsek Cerrahisi Fellowship'i — İsviçre", text: 'St. Gallen, İsviçre\'de Prof. Dr. Bernhard Jost ve Prof. Dr. Christian Spross mentorluğunda 6 aylık Omuz ve Dirsek Cerrahisi fellowship\'i' },
    { year: '2019–2022', title: 'Haseki, Van ve İstanbul Cerrahi Hastaneleri', text: 'Haseki Eğitim ve Araştırma Hastanesi, Van Eğitim ve Araştırma Hastanesi ve Özel İstanbul Cerrahi Hastanesi\'nde görev yaptı' },
    { year: '2023–halen', title: 'Baltalimanı Kemik Hastalıkları EAH', text: 'Metin Sabancı Baltalimanı Kemik Hastalıkları Eğitim ve Araştırma Hastanesi, Ortopedi ve Travmatoloji Kliniği' }
  ]
}

const about = await useSection('about', fallback)
const { t, pathTo } = useLang()

withDefaults(defineProps<{ mode?: 'intro' | 'full' }>(), { mode: 'full' })
</script>

<template>
  <!-- Ana sayfada kısa giriş (düğme + başlık + metin), Hakkımda sayfasında tamamı -->
  <section class="about">
    <template v-if="mode === 'intro'">
      <div class="center">
        <NuxtLink :to="pathTo('contact')" class="btn">{{ t('bookAppointment') }}</NuxtLink>
      </div>
      <h2 class="t-title center wrap-text about__title">{{ about.title }}</h2>
      <p class="t-text-big wrap-text about__text">{{ about.text }}</p>
      <div class="center about__more">
        <NuxtLink :to="pathTo('about')" class="t-main-menu link-underline">{{ t('readMore') }}</NuxtLink>
      </div>
    </template>

    <template v-else>
      <div class="frame about__portrait">
        <img :src="about.photoUrl" :alt="t('doctor')" width="1086" height="1448" />
      </div>

      <p class="t-text-big wrap-text block">{{ about.text }}</p>

      <!-- Akademik Yolculuk: solda nokta ve dikey çizgi, yanında yıl, sağda başlık + açıklama kartı -->
      <div class="journey wrap-wide block">
        <p class="t-main-menu center"><span class="underlined">{{ t('resume') }}</span></p>
        <h2 class="t-title center journey__title">{{ t('journey.first') }} <em>{{ t('journey.second') }}</em></h2>

        <ol class="journey__list">
          <li v-for="item in about.timeline" :key="item.year + item.text" class="journey__row">
            <span class="journey__dot" aria-hidden="true" />
            <span class="journey__year">
              <span v-for="(part, j) in item.year.split('–')" :key="j" class="journey__year-part">{{ part }}{{ j < item.year.split('–').length - 1 ? '–' : '' }}</span>
            </span>
            <div class="journey__card">
              <h3 v-if="item.title" class="journey__card-title t-result-title">{{ item.title }}</h3>
              <p class="journey__card-text t-result-text">{{ item.text }}</p>
            </div>
          </li>
        </ol>
      </div>

      <div class="center block">
        <NuxtLink :to="pathTo('contact')" class="btn">{{ t('bookAppointment') }}</NuxtLink>
      </div>
    </template>
  </section>
</template>

<style scoped>
.about__title {
  margin-top: 64px;
}

.about__text {
  margin-top: 64px;
}

.about__more {
  margin-top: 48px;
}

.about__portrait {
  width: min(520px, 88.75vw);
  margin-inline: auto;
  aspect-ratio: 3 / 4;
}

/* ---------- Akademik Yolculuk ---------- */
.journey__title {
  margin-top: 28px;
}

.journey__title em {
  font-style: italic;
  color: var(--color-green);
}

.journey__list {
  position: relative;
  margin-top: 80px;
}

/* Nokta sütunu ile yıl sütunu arasından geçen dikey çizgi */
.journey__list::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 104px;
  width: 1px;
  background: rgba(9, 134, 71, 0.45);
}

.journey__row {
  display: grid;
  grid-template-columns: 90px 110px 1fr;
  align-items: start;
  padding: 24px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.journey__dot {
  justify-self: center;
  width: 9px;
  height: 9px;
  margin-top: 13px;
  border: 1px solid var(--color-green);
  border-radius: 50%;
  background: #fff;
}

.journey__year {
  padding-top: 8px;
  padding-right: 22px;
  text-align: right;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: rgba(0, 0, 0, 0.6);
}

.journey__year-part {
  display: block;
}

.journey__card {
  padding: 22px 26px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: border-color var(--ease);
}

.journey__card:hover {
  border-color: var(--color-green);
}

.journey__card-text {
  color: rgba(0, 0, 0, 0.72);
}

.journey__card-title + .journey__card-text {
  margin-top: 8px;
}

@media (max-width: 743px) {
  .journey__list::before {
    left: 0;
  }

  .journey__row {
    grid-template-columns: 1fr;
    padding-left: 22px;
  }

  .journey__dot {
    position: absolute;
    left: -4px;
    margin-top: 0;
    transform: translateY(6px);
  }

  .journey__row {
    position: relative;
  }

  .journey__year {
    padding: 0 0 10px;
    text-align: left;
  }

  .journey__year-part {
    display: inline;
  }

  .journey__card {
    padding: 18px 18px;
  }
}
</style>
