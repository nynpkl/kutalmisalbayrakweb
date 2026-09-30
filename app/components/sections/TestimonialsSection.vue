<script setup lang="ts">
const fallback = {
  eyebrow: 'Hasta Değerlendirmeleri',
  title: 'Hasta değerlendirmelerinde öne çıkanlar',
  lead: 'Aşağıdaki başlıklar, doktor randevu platformlarında paylaşılan hasta değerlendirmelerinde tekrar eden ortak temaları özetlemektedir; birebir alıntı değildir.',
  rating: '5/5',
  ratingLabel: 'DoktorTakvimi.com üzerinde paylaşılan hasta puanı',
  ratingUrl: 'https://www.doktortakvimi.com/kutalmis-albayrak/ortopedi-ve-travmatoloji/istanbul',
  themes: [
    {
      title: 'Detaylı Bilgilendirme',
      text: 'Hasta değerlendirmelerinde en sık öne çıkan konu, ameliyat öncesi süreç ve tedavi alternatifleri hakkında yapılan ayrıntılı bilgilendirme.'
    },
    {
      title: 'Yakın Ameliyat Sonrası Takip',
      text: 'Kontrol randevularında gösterilen özen ve erişilebilirlik, hastalar tarafından sıkça vurgulanan bir diğer nokta.'
    },
    {
      title: 'Minimal İnvaziv Yaklaşım',
      text: 'Artroskopik tekniklerin iyileşme sürecini kısaltmasına dair olumlu geri bildirimler yer alıyor.'
    },
    {
      title: 'Rehabilitasyon Sürecinde Yönlendirme',
      text: 'Özellikle spor yaralanması hastaları, sahaya/güncel yaşama dönüş sürecindeki yönlendirmeyi değerli buluyor.'
    }
  ]
}

const testimonials = await useSection('testimonials', fallback)
const { t, pathTo } = useLang()
</script>

<template>
  <section class="testimonials">
    <div class="center">
      <p class="testimonials__score t-carousel-title">{{ testimonials.rating }}</p>
      <p class="testimonials__label t-main-menu">{{ testimonials.ratingLabel }}</p>
      <a
        :href="testimonials.ratingUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn testimonials__btn"
      >
        {{ t('viewAllReviews') }}
      </a>
    </div>

    <p class="t-text-big wrap-text block">{{ testimonials.lead }}</p>

    <div class="wrap-text block">
      <div v-for="theme in testimonials.themes" :key="theme.title" class="result">
        <h3 class="result__title t-result-title">{{ theme.title }}</h3>
        <p class="result__text t-result-text">{{ theme.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials__score {
  color: var(--color-green);
}

.testimonials__label {
  width: var(--text);
  margin: 28px auto 0;
}

.testimonials__btn {
  margin-top: 40px;
}
</style>
