<script setup lang="ts">
const fallback = {
  eyebrow: 'Uzmanlık Alanları',
  title: 'Odaklandığım cerrahi branşlar',
  lead: 'Her vaka kendi özelinde değerlendirilir; tanı, ameliyat ve iyileşme sürecinin tamamında hastayla birlikte ilerleyen bir tedavi planı oluşturulur.',
  items: [
    {
      title: 'Omuz Cerrahisi ve Artroskopisi',
      text: 'Omuz instabilitesi, rotator manşet yırtıkları ve sıkışma sendromlarında artroskopik (kapalı) cerrahi teknikler.'
    },
    {
      title: 'Dirsek Cerrahisi',
      text: 'Dirsek kırık-çıkıkları, instabilite ve kompleks travma sonrası rekonstrüksiyonda ileri düzey cerrahi deneyim.'
    },
    {
      title: 'Spor Yaralanmaları',
      text: 'Ön çapraz bağ (ÖÇB) ve menisküs yırtıklarında artroskopik onarım ile sporcuların sahaya güvenli dönüşü.'
    },
    {
      title: 'Diz ve Kalça Protez Cerrahisi',
      text: 'İleri düzey artroz vakalarında protez cerrahisi ve karmaşık revizyon operasyonları.'
    },
    {
      title: 'Kırık ve Travma Cerrahisi',
      text: 'Uzun kemik kırıklarında intramedüller çivileme ve plak-vida sistemleriyle güncel tedavi yöntemleri.'
    },
    {
      title: 'Ayak ve Ayak Bileği Cerrahisi',
      text: 'Hallux valgus ve aşil tendon onarımı başta olmak üzere ayak-ayak bileği bölgesi cerrahi tedavileri.'
    }
  ]
}

const expertise = await useSection('expertise', fallback)
const { t, pathTo } = useLang()

withDefaults(defineProps<{ mode?: 'list' | 'detail' }>(), { mode: 'list' })
</script>

<template>
  <!-- Ana sayfada iki sütunlu noktalı liste; Uzmanlık sayfasında yeşil başlıklı bloklar -->
  <section class="expertise">
    <template v-if="mode === 'list'">
      <h2 class="t-main-menu center wrap-list">{{ expertise.eyebrow }}:</h2>
      <ul class="dot-list t-list wrap-list expertise__list">
        <li v-for="item in expertise.items" :key="item.title">
          <strong>{{ item.title }}:</strong> {{ item.text }}
        </li>
      </ul>
      <p class="t-text-big wrap-text expertise__lead">{{ expertise.lead }}</p>
    </template>

    <template v-else>
      <p class="t-text-big wrap-text">{{ expertise.lead }}</p>
      <div class="wrap-text block">
        <div v-for="item in expertise.items" :key="item.title" class="result">
          <h3 class="result__title t-result-title">{{ item.title }}</h3>
          <p class="result__text t-result-text">{{ item.text }}</p>
        </div>
      </div>
      <div class="center block">
        <NuxtLink :to="pathTo('contact')" class="btn">{{ t('bookAppointment') }}</NuxtLink>
      </div>
    </template>
  </section>
</template>

<style scoped>
.expertise__list {
  margin-top: 48px;
  columns: 2;
  column-gap: 70px;
}

.expertise__list li {
  break-inside: avoid;
}

@media (max-width: 743px) {
  .expertise__list {
    columns: 1;
  }
}

.expertise__lead {
  margin-top: 80px;
}
</style>
