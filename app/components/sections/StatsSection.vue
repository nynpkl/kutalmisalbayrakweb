<script setup lang="ts">
const stats = [
  { value: '9+', label: 'Yıl Ortopedi ve Travmatoloji Uzmanlığı' },
  { value: '6 Ay', label: 'İsviçre\'de Omuz-Dirsek Cerrahisi Fellowship\'i' },
  { value: '10+', label: 'Uluslararası İndeksli Bilimsel Yayın' },
  { value: '5', label: 'Ulusal ve Uluslararası Dernek Üyeliği' }
]
</script>

<template>
  <section class="section stats">
    <div class="container stats__grid">
      <div v-for="stat in stats" :key="stat.label" class="stats__item">
        <span class="stats__value">{{ stat.value }}</span>
        <span class="stats__label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  background: var(--color-ink);
  color: #f4f2ec;
  padding-block: clamp(56px, 8vw, 100px);
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

@media (min-width: 800px) {
  .stats__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stats__item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  border-left: 1px solid rgba(244, 242, 236, 0.15);
  padding-left: 20px;
}

.stats__item:first-child {
  border-left: none;
}

@media (max-width: 799px) {
  .stats__item:nth-child(odd) {
    border-left: none;
  }
}

.stats__value {
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 56px);
  color: #7fd9c2;
}

.stats__label {
  font-size: 13px;
  letter-spacing: 0.04em;
  color: rgba(244, 242, 236, 0.65);
  text-transform: uppercase;
}
</style>
