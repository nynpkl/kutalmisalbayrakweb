<script setup lang="ts">
// Her sayfanın açılışındaki tam ekran başlık alanı (referanstaki "header"):
// üstte ortada isim logosu, ekranın ortasında büyük başlık, alt sayfalarda yeşil alt çizgili sayfa adı,
// altta menü ve aşağı ok.
const props = defineProps<{
  lines: string[]
  label?: string
}>()

function scrollToContent() {
  const hero = document.querySelector('.page-hero') as HTMLElement | null
  window.scrollTo({ top: hero ? hero.offsetHeight - 90 : window.innerHeight, behavior: 'smooth' })
}

const title = computed(() => props.lines.filter(Boolean))

const { t, pathTo, locale } = useLang()

// İsim logosu: İngilizcede "ASSOC. PROF. DR." yazan sürüm (daha uzun olduğu için genişliği oranında büyür)
const wordmark = computed(() =>
  locale.value === 'en'
    ? { src: '/images/logo/ka-wordmark-en-black.png', width: 1785, height: 167 }
    : { src: '/images/logo/ka-wordmark-black.png', width: 1400, height: 165 }
)
</script>

<template>
  <section class="page-hero">
    <NuxtLink
      :to="pathTo('home')"
      class="page-hero__wordmark"
      :style="{ '--wordmark-ratio': wordmark.width / 1400 }" :aria-label="`${t('doctor')} — ${t('a11y.home')}`">
      <img
        :src="wordmark.src"
        :alt="`${t('doctor')} — Shoulder · Elbow · Sports Surgery`"
        :width="wordmark.width"
        :height="wordmark.height"
      />
    </NuxtLink>

    <div class="page-hero__center">
      <h1 class="page-hero__title t-carousel-title">
        <template v-for="(line, i) in title" :key="i">
          <br v-if="i > 0" />{{ line }}
        </template>
      </h1>
      <p v-if="label" class="page-hero__label t-main-menu">
        <span class="underlined">{{ label }}</span>
      </p>
    </div>

    <MainNav class="page-hero__nav" />

    <button class="page-hero__arrow" :aria-label="t('a11y.scrollDown')" @click="scrollToContent">
      <svg viewBox="0 0 58 30" width="58" height="30" aria-hidden="true">
        <polyline points="1,1 29,29 57,1" fill="none" stroke="currentColor" stroke-width="1" />
      </svg>
    </button>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  height: 100vh;
  height: 100svh;
  min-height: 560px;
}

/* Genişlik × --wordmark-ratio: İngilizce logo daha uzun, harfler aynı büyüklükte kalsın */
.page-hero__wordmark {
  position: absolute;
  left: 50%;
  top: 92px;
  width: min(calc(300px * var(--wordmark-ratio, 1)), 92vw);
  transform: translateX(-50%);
}

.page-hero__wordmark img {
  width: 100%;
  height: auto;
}

@media (min-width: 744px) {
  .page-hero__wordmark {
    top: 40px;
    width: calc(340px * var(--wordmark-ratio, 1));
  }
}

@media (min-width: 1170px) {
  .page-hero__wordmark {
    top: 48px;
    width: calc(390px * var(--wordmark-ratio, 1));
  }
}

.page-hero__center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(1100px, 90vw);
  transform: translate(-50%, -50%);
  text-align: center;
}

.page-hero__title {
  text-wrap: balance;
}

.page-hero__label {
  margin-top: 36px;
}

/* Menü, referanstaki gibi ekranın alt kısmında (top: calc(97% - 145px)) */
.page-hero__nav {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(97% - 145px);
  height: 100px;
}

@media (min-width: 1440px) {
  .page-hero__nav {
    height: 120px;
  }
}

@media (max-width: 1169px) {
  .page-hero__nav {
    display: none;
  }
}

.page-hero__arrow {
  position: absolute;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  color: rgba(0, 0, 0, 0.6);
  line-height: 0;
  transition: color var(--ease);
}

.page-hero__arrow:hover {
  color: #000;
}
</style>
