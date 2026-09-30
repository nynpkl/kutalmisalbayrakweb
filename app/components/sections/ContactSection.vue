<script setup lang="ts">
const fallback = {
  eyebrow: 'İletişim',
  title: 'Randevu ve iletişim bilgileri',
  lead: 'Muayene ve ameliyat randevuları, görev yaptığı kamu hastanesinin randevu sistemleri üzerinden alınmaktadır.',
  workplaceName: 'Metin Sabancı Baltalimanı Kemik Hastalıkları Eğitim ve Araştırma Hastanesi',
  workplaceDept: 'Ortopedi ve Travmatoloji Kliniği',
  address: 'Baltalimanı Mah. Rumeli Hisarı Cad. No: 57/1, 34470 Sarıyer / İstanbul',
  phoneDisplay: '0 (212) 323 70 75',
  phoneHref: '+902123237075',
  appointmentNote: 'MHRS (Merkezi Hastane Randevu Sistemi) veya Alo 182 üzerinden de randevu alınabilir.',
  instagramHandle: '@drkutalmisalbayrak',
  instagramUrl: 'https://www.instagram.com/drkutalmisalbayrak/',
  mapEmbedSrc: 'https://maps.google.com/maps?q=41.0956288,29.0538758&z=16&output=embed',
  mapUrl: 'https://maps.app.goo.gl/Pj9NxrLY83yANvtGA'
}

const contact = await useSection('contact', fallback)
const { t, pathTo } = useLang()
</script>

<template>
  <section class="contact">
    <p class="t-text-big wrap-text">{{ contact.lead }}</p>

    <div class="wrap-text block">
      <div class="result">
        <h3 class="result__title t-result-title">{{ t('contact.workplace') }}</h3>
        <p class="result__text t-result-text">{{ contact.workplaceName }}<br />{{ contact.workplaceDept }}</p>
      </div>
      <div class="result">
        <h3 class="result__title t-result-title">{{ t('contact.address') }}</h3>
        <p class="result__text t-result-text">
          {{ contact.address }}<br />
          <a :href="contact.mapUrl" target="_blank" rel="noopener noreferrer" class="link-underline">
            {{ t('contact.openMap') }}
          </a>
        </p>
      </div>
      <div class="result">
        <h3 class="result__title t-result-title">{{ t('contact.phone') }}</h3>
        <p class="result__text t-result-text">
          <a :href="`tel:${contact.phoneHref}`" class="link-underline">{{ contact.phoneDisplay }}</a><br />
          {{ contact.appointmentNote }}
        </p>
      </div>
      <div class="result">
        <h3 class="result__title t-result-title">{{ t('contact.social') }}</h3>
        <p class="result__text t-result-text">
          <a :href="contact.instagramUrl" target="_blank" rel="noopener noreferrer" class="link-underline">
            {{ contact.instagramHandle }}
          </a>
        </p>
      </div>
    </div>

    <div class="frame wrap-wide block contact__map">
      <iframe :src="contact.mapEmbedSrc" :title="t('contact.mapTitle')" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
    </div>

    <div class="center block">
      <a :href="`tel:${contact.phoneHref}`" class="btn">{{ t('contact.call') }}</a>
    </div>
  </section>
</template>

<style scoped>
.contact__map {
  height: 420px;
}

@media (min-width: 1170px) {
  .contact__map {
    height: 560px;
  }
}

.contact__map iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  filter: grayscale(1);
}
</style>
