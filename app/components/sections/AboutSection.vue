<script setup lang="ts">
const credentials = [
  { year: '2006–2012', text: 'İstanbul Üniversitesi İstanbul Tıp Fakültesi\'nde tıp eğitimi' },
  { year: '2012–2017', text: 'Metin Sabancı Baltalimanı Kemik Hastalıkları Eğitim ve Araştırma Hastanesi\'nde Ortopedi ve Travmatoloji ihtisası' },
  { year: '2017–2019', text: 'Baltalimanı Artroskopi ve Spor Cerrahisi Kliniği\'nde çalıştı' },
  { year: '2019', text: 'St. Gallen, İsviçre\'de Prof. Dr. Bernhard Jost ve Prof. Dr. Christian Spross mentorluğunda 6 aylık Omuz ve Dirsek Cerrahisi fellowship\'i' },
  { year: '2019–2022', text: 'Haseki Eğitim ve Araştırma Hastanesi, Van Eğitim ve Araştırma Hastanesi ve Özel İstanbul Cerrahi Hastanesi\'nde görev yaptı' },
  { year: '2023–halen', text: 'Metin Sabancı Baltalimanı Kemik Hastalıkları Eğitim ve Araştırma Hastanesi, Ortopedi ve Travmatoloji Kliniği' }
]
</script>

<template>
  <section id="hakkimda" class="section about">
    <div class="container about__grid">
      <div class="about__portrait">
        <img src="/images/kutalmis-albayrak.jpg" alt="Op. Dr. Kutalmış Albayrak" />
      </div>

      <div class="about__content">
        <p class="eyebrow">Hakkımda</p>
        <h2 class="section-title">Her hasta, kendi hikâyesinin baş rolündedir.</h2>
        <p class="section-lead">
          Ortopedi ve Travmatoloji uzmanıyım; özellikle omuz ve dirsek cerrahisi, spor yaralanmaları ve
          artroskopik cerrahi alanında çalışıyorum. İyileşme sürecini kısaltmak için mümkün olan her
          durumda minimal invaziv artroskopik teknikleri tercih ediyor, güncel biyolojik tedavi
          yöntemlerini yakından takip ediyorum. 2018'den bu yana İstanbul Tabip Odası basketbol
          takımının teknik direktörlüğünü de sürdürüyorum.
        </p>

        <ul class="about__timeline">
          <li v-for="item in credentials" :key="item.year" class="about__timeline-item">
            <span class="about__year">{{ item.year }}</span>
            <span class="about__text">{{ item.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 6vw, 90px);
  align-items: start;
}

@media (min-width: 900px) {
  .about__grid {
    grid-template-columns: 0.85fr 1.15fr;
  }
}

.about__portrait {
  aspect-ratio: 4 / 5;
  border-radius: 4px;
  background: var(--color-accent-soft);
  overflow: hidden;
}

.about__portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about__timeline {
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: 1px solid var(--color-line);
}

.about__timeline-item {
  display: flex;
  gap: 24px;
  padding-top: 20px;
  border-top: 1px solid transparent;
}

.about__timeline-item + .about__timeline-item {
  border-top-color: var(--color-line);
}

.about__year {
  font-family: var(--font-display);
  font-size: 17px;
  color: var(--color-accent);
  min-width: 96px;
  flex-shrink: 0;
}

.about__text {
  color: var(--color-muted);
  font-size: 15px;
  line-height: 1.6;
  padding-top: 2px;
}
</style>
