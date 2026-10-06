<script setup lang="ts">
// İsim logosu (isim + çizgi + "Shoulder · Elbow · Sports Surgery"). İngilizcede "ASSOC. PROF." yazan
// sürüm kullanılır; daha uzun olduğu için genişliği oranında büyür, harfler aynı boyda kalır.
const { t, pathTo, locale } = useLang()

const wordmark = computed(() =>
  locale.value === 'en'
    ? { src: '/images/logo/ka-wordmark-en-black.png', width: 1597, height: 167 }
    : { src: '/images/logo/ka-wordmark-black.png', width: 1400, height: 165 }
)
</script>

<template>
  <NuxtLink
    :to="pathTo('home')"
    class="wordmark"
    :style="{ '--wordmark-ratio': wordmark.width / 1400 }"
    :aria-label="`${t('doctor')} — ${t('a11y.home')}`"
  >
    <img
      :src="wordmark.src"
      :alt="`${t('doctor')} — Shoulder · Elbow · Sports Surgery`"
      :width="wordmark.width"
      :height="wordmark.height"
    />
  </NuxtLink>
</template>

<style scoped>
.wordmark {
  display: block;
  width: min(calc(300px * var(--wordmark-ratio, 1)), 92vw);
}

.wordmark img {
  width: 100%;
  height: auto;
}

@media (min-width: 744px) {
  .wordmark {
    width: calc(340px * var(--wordmark-ratio, 1));
  }
}

@media (min-width: 1170px) {
  .wordmark {
    width: calc(390px * var(--wordmark-ratio, 1));
  }
}
</style>
