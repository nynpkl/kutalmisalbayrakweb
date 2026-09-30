<script setup lang="ts">
// TR / EN dil seçici: bulunulan sayfanın diğer dildeki karşılığına götürür.
// Etkin dil yeşil alt çizgiyle, diğeri soluk gösterilir (referanstaki sol üst "EN" düğmesinin yerinde).
const route = useRoute()
const { locale, t } = useLang()

const options = computed(() =>
  (['tr', 'en'] as const).map((code) => ({
    code,
    label: code.toUpperCase(),
    to: switchLocalePath(route.path, code),
    active: locale.value === code
  }))
)
</script>

<template>
  <nav class="lang" :aria-label="t('a11y.language')">
    <NuxtLink
      v-for="option in options"
      :key="option.code"
      :to="option.to"
      :hreflang="option.code"
      :lang="option.code"
      class="lang__link link-underline"
      :class="{ 'lang__link--active': option.active }"
      :aria-current="option.active ? 'true' : undefined"
    >
      {{ option.label }}
    </NuxtLink>
  </nav>
</template>

<style scoped>
.lang {
  display: flex;
  gap: 16px;
  font-size: 21.5px;
  line-height: 32.25px;
}

@media (min-width: 1170px) {
  .lang {
    font-size: 24.75px;
  }
}

.lang__link {
  color: rgba(0, 0, 0, 0.35);
  transition: color var(--ease);
}

.lang__link:hover {
  color: #000;
}

.lang__link--active {
  color: #000;
}

.lang__link--active::after {
  opacity: 1;
  background-color: var(--color-green);
}
</style>
