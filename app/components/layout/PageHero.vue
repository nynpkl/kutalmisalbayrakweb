<script setup lang="ts">
// Ana sayfanın açılış alanı: ekranın kalanını kaplayan büyük slogan ve aşağı ok.
// İsim logosu ve menü sabit üst bölümde (TheHeader) olduğu için burada yer almaz.
const props = defineProps<{ lines: string[] }>()

const { t } = useLang()
const title = computed(() => props.lines.filter(Boolean))
const hero = ref<HTMLElement>()

function scrollToContent() {
  const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 0
  const bottom = hero.value ? hero.value.getBoundingClientRect().bottom + window.scrollY : window.innerHeight
  window.scrollTo({ top: bottom - header, behavior: 'smooth' })
}
</script>

<template>
  <section ref="hero" class="page-hero">
    <h1 class="page-hero__title t-carousel-title">
      <template v-for="(line, i) in title" :key="i">
        <br v-if="i > 0" />{{ line }}
      </template>
    </h1>

    <button class="page-hero__arrow" :aria-label="t('a11y.scrollDown')" @click="scrollToContent">
      <svg viewBox="0 0 58 30" width="58" height="30" aria-hidden="true">
        <polyline points="1,1 29,29 57,1" fill="none" stroke="currentColor" stroke-width="1" />
      </svg>
    </button>
  </section>
</template>

<style scoped>
/* Ekranın üst bölüm (masaüstü) / isim logosu (mobil) dışında kalan kısmını kaplar */
.page-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100svh - 130px);
  min-height: 420px;
  padding: 0 5vw 60px;
  text-align: center;
}

@media (min-width: 744px) {
  .page-hero {
    height: calc(100svh - 80px);
  }
}

@media (min-width: 1170px) {
  .page-hero {
    height: calc(100svh - var(--header-h));
  }
}

.page-hero__title {
  max-width: 1100px;
  text-wrap: balance;
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
