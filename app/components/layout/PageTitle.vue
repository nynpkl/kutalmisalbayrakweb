<script setup lang="ts">
// Alt sayfaların en üstündeki sade sayfa başlığı ("Hakkımda", "Uzmanlık Alanları" …)
defineProps<{ title: string }>()
</script>

<template>
  <h1 class="page-title t-title center wrap-text">{{ title }}</h1>
</template>

<style scoped>
.page-title {
  padding-top: 60px;
  text-wrap: balance;
}

@media (min-width: 1170px) {
  .page-title {
    padding-top: 80px;
  }
}
</style>
