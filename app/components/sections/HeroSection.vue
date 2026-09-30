<script setup lang="ts">
const fallback = {
  kicker: 'Doç. Dr. Kutalmış Albayrak',
  titleLine1: 'Hareketin özgürlüğü,',
  titleLine2: 'güvenilir ellerde.',
  subtitle: 'Ortopedi ve Travmatoloji — Omuz ve Dirsek Cerrahisi Uzmanı, İstanbul',
  ctaPrimaryLabel: 'İletişime Geç',
  ctaSecondaryLabel: 'Hakkımda'
}

const hero = await useSection('hero', fallback)
</script>

<template>
  <PageHero :lines="[hero.titleLine1, hero.titleLine2]" />
</template>
