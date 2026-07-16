<script setup lang="ts">
const items = [
  {
    no: '01',
    title: 'Omuz Cerrahisi ve Artroskopisi',
    text: 'Omuz instabilitesi, rotator manşet yırtıkları ve sıkışma sendromlarında artroskopik (kapalı) cerrahi teknikler.'
  },
  {
    no: '02',
    title: 'Dirsek Cerrahisi',
    text: 'Dirsek kırık-çıkıkları, instabilite ve kompleks travma sonrası rekonstrüksiyonda ileri düzey cerrahi deneyim.'
  },
  {
    no: '03',
    title: 'Spor Yaralanmaları',
    text: 'Ön çapraz bağ (ÖÇB) ve menisküs yırtıklarında artroskopik onarım ile sporcuların sahaya güvenli dönüşü.'
  },
  {
    no: '04',
    title: 'Diz ve Kalça Protez Cerrahisi',
    text: 'İleri düzey artroz vakalarında protez cerrahisi ve karmaşık revizyon operasyonları.'
  },
  {
    no: '05',
    title: 'Kırık ve Travma Cerrahisi',
    text: 'Uzun kemik kırıklarında intramedüller çivileme ve plak-vida sistemleriyle güncel tedavi yöntemleri.'
  },
  {
    no: '06',
    title: 'Ayak ve Ayak Bileği Cerrahisi',
    text: 'Hallux valgus ve aşil tendon onarımı başta olmak üzere ayak-ayak bileği bölgesi cerrahi tedavileri.'
  }
]
</script>

<template>
  <section id="uzmanlik" class="section expertise">
    <div class="container">
      <p class="eyebrow">Uzmanlık Alanları</p>
      <h2 class="section-title">Odaklandığım cerrahi branşlar</h2>
      <p class="section-lead">
        Her vaka kendi özelinde değerlendirilir; tanı, ameliyat ve iyileşme sürecinin tamamında hastayla
        birlikte ilerleyen bir tedavi planı oluşturulur.
      </p>

      <div class="expertise__grid">
        <article v-for="item in items" :key="item.no" class="expertise__card">
          <span class="expertise__no">{{ item.no }}</span>
          <h3 class="expertise__title">{{ item.title }}</h3>
          <p class="expertise__text">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expertise__grid {
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background: var(--color-line);
  border: 1px solid var(--color-line);
}

@media (min-width: 700px) {
  .expertise__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1100px) {
  .expertise__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.expertise__card {
  background: var(--color-bg);
  padding: 40px 32px;
  transition: background-color 0.3s ease;
}

.expertise__card:hover {
  background: var(--color-accent-soft);
}

.expertise__no {
  font-family: var(--font-display);
  font-size: 15px;
  color: var(--color-accent);
}

.expertise__title {
  font-family: var(--font-display);
  font-size: 24px;
  margin-top: 18px;
}

.expertise__text {
  margin-top: 14px;
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--color-muted);
}
</style>
