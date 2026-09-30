<script setup lang="ts">
const fallback = {
  eyebrow: 'Yaklaşımım',
  title: 'Şeffaf, sakin ve hasta odaklı bir süreç',
  lead: 'Cerrahi bir karar genellikle hastanın hayatında endişeyle anılan bir dönemdir. Bu süreci olabildiğince anlaşılır ve öngörülebilir kılmak için her aşamada açık iletişimi önceliklendiriyorum.',
  steps: [
    {
      title: 'Değerlendirme',
      text: 'İlk muayenede şikayetiniz, görüntüleme tetkikleriniz (MR/röntgen) birlikte incelenir, sorularınıza zaman ayrılır.'
    },
    {
      title: 'Tedavi Planı',
      text: 'Konservatif tedavi mi yoksa cerrahi mi gerektiği netleştirilir; alternatif yöntemler açıkça anlatılır.'
    },
    {
      title: 'Ameliyat',
      text: 'Mümkün olan her durumda minimal invaziv artroskopik teknikler tercih edilerek iyileşme süresi kısaltılır.'
    },
    {
      title: 'Rehabilitasyon',
      text: 'Fizyoterapi ve kontrollerle desteklenen bir süreçle günlük yaşama ve spora güvenli dönüş hedeflenir.'
    }
  ]
}

const approach = await useSection('approach', fallback)
const { t, pathTo } = useLang()

withDefaults(defineProps<{ showTitle?: boolean }>(), { showTitle: true })
</script>

<template>
  <!-- Referanstaki numaralı iki sütunlu listenin ("1. Age-Neutral Learning: ...") karşılığı -->
  <section class="approach">
    <h2 v-if="showTitle" class="t-title center wrap-text approach__title">{{ approach.title }}</h2>
    <p class="t-text-big wrap-text" :class="{ approach__lead: showTitle }">{{ approach.lead }}</p>
    <ol class="num-list t-list wrap-list approach__steps">
      <li v-for="(step, i) in approach.steps" :key="step.title">
        {{ i + 1 }}. <strong>{{ step.title }}:</strong> {{ step.text }}
      </li>
    </ol>
  </section>
</template>

<style scoped>
.approach__lead {
  margin-top: 64px;
}

.approach__steps {
  margin-top: 64px;
}
</style>
