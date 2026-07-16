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

const { data } = await useSiteContent()
const approach = computed(() => ({ ...fallback, ...(data.value?.approach ?? {}) }))
</script>

<template>
  <section id="yaklasim" class="section approach">
    <div class="container approach__grid">
      <div class="approach__intro">
        <p class="eyebrow">{{ approach.eyebrow }}</p>
        <h2 class="section-title">{{ approach.title }}</h2>
        <p class="section-lead">{{ approach.lead }}</p>
      </div>

      <ol class="approach__steps">
        <li v-for="(step, index) in approach.steps" :key="step.title" class="approach__step">
          <span class="approach__index">{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h3 class="approach__title">{{ step.title }}</h3>
            <p class="approach__text">{{ step.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.approach__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 6vw, 80px);
}

@media (min-width: 900px) {
  .approach__grid {
    grid-template-columns: 0.9fr 1.1fr;
  }
}

.approach__intro {
  position: sticky;
  top: 120px;
  align-self: start;
}

.approach__steps {
  display: flex;
  flex-direction: column;
}

.approach__step {
  display: flex;
  gap: 26px;
  padding-block: 30px;
  border-top: 1px solid var(--color-line);
}

.approach__step:last-child {
  border-bottom: 1px solid var(--color-line);
}

.approach__index {
  font-family: var(--font-display);
  font-size: 22px;
  color: var(--color-accent);
  min-width: 40px;
}

.approach__title {
  font-family: var(--font-display);
  font-size: 22px;
}

.approach__text {
  margin-top: 10px;
  color: var(--color-muted);
  font-size: 14.5px;
  line-height: 1.65;
  max-width: 46ch;
}

@media (max-width: 899px) {
  .approach__intro {
    position: static;
  }
}
</style>
