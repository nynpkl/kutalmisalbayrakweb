<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'

const themes = [
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
</script>

<template>
  <section id="yorumlar" class="section testimonials">
    <div class="container">
      <p class="eyebrow">Hasta Değerlendirmeleri</p>
      <h2 class="section-title">Hasta değerlendirmelerinde öne çıkanlar</h2>
      <p class="section-lead">
        Aşağıdaki başlıklar, doktor randevu platformlarında paylaşılan hasta değerlendirmelerinde tekrar
        eden ortak temaları özetlemektedir; birebir alıntı değildir.
      </p>

      <div class="testimonials__rating">
        <span class="testimonials__rating-score">5/5</span>
        <div>
          <p class="testimonials__rating-label">DoktorTakvimi.com üzerinde paylaşılan hasta puanı</p>
          <a
            href="https://www.doktortakvimi.com/kutalmis-albayrak/ortopedi-ve-travmatoloji/istanbul"
            target="_blank"
            rel="noopener noreferrer"
            class="link-underline"
          >
            Tüm hasta değerlendirmelerini görüntüle →
          </a>
        </div>
      </div>

      <Swiper
        class="testimonials__slider"
        :modules="[Navigation]"
        :navigation="{ nextEl: '.t-next', prevEl: '.t-prev' }"
        :space-between="32"
        :slides-per-view="1"
        :breakpoints="{
          760: { slidesPerView: 2 },
          1180: { slidesPerView: 3 }
        }"
      >
        <SwiperSlide v-for="theme in themes" :key="theme.title">
          <article class="testimonial-card">
            <h3 class="testimonial-card__title">{{ theme.title }}</h3>
            <p class="testimonial-card__text">{{ theme.text }}</p>
          </article>
        </SwiperSlide>
      </Swiper>

      <div class="testimonials__nav">
        <button class="t-prev" type="button" aria-label="Önceki">←</button>
        <button class="t-next" type="button" aria-label="Sonraki">→</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials__rating {
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.testimonials__rating-score {
  font-family: var(--font-display);
  font-size: 44px;
  color: var(--color-accent);
}

.testimonials__rating-label {
  font-size: 14px;
  color: var(--color-muted);
  margin-bottom: 4px;
}

.testimonials__slider {
  margin-top: 40px;
  padding-bottom: 4px;
}

.testimonial-card {
  height: 100%;
  border: 1px solid var(--color-line);
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 220px;
}

.testimonial-card__title {
  font-family: var(--font-display);
  font-size: 22px;
}

.testimonial-card__text {
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--color-muted);
}

.testimonials__nav {
  margin-top: 28px;
  display: flex;
  gap: 14px;
}

.testimonials__nav button {
  width: 46px;
  height: 46px;
  border: 1px solid var(--color-line);
  border-radius: 50%;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.testimonials__nav button:hover {
  background: var(--color-accent);
  color: #fff;
}
</style>
