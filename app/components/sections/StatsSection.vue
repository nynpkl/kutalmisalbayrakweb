<script setup lang="ts">
const fallback = {
  items: [
    { value: '9+', label: 'Yıl Ortopedi ve Travmatoloji Uzmanlığı' },
    { value: '6 Ay', label: 'İsviçre\'de Omuz-Dirsek Cerrahisi Fellowship\'i' },
    { value: '10+', label: 'Uluslararası İndeksli Bilimsel Yayın' },
    { value: '5', label: 'Ulusal ve Uluslararası Dernek Üyeliği' }
  ]
}

const stats = await useSection('stats', fallback)
const { t, pathTo } = useLang()
</script>

<template>
  <!-- Referanstaki "Results that Speak Volumes." bölümünün karşılığı -->
  <section class="stats">
    <h2 class="t-title center wrap-text">{{ t('byNumbers') }}</h2>
    <div class="wrap-text stats__list">
      <div v-for="item in stats.items" :key="item.label" class="result">
        <h3 class="result__title t-result-title">{{ item.value }}</h3>
        <p class="result__text t-result-text">{{ item.label }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats__list {
  margin-top: 80px;
}
</style>
