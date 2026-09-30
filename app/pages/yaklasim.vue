<script setup lang="ts">
// Türkçe (/yaklasim) ve İngilizce (/en/approach) sayfalar aynı içeriği kullanır; dil adresten belirlenir.
// Büyük başlık ve yeşil alt çizgili sayfa adı, admin panelindeki "approach" bölümünün başlık / üst başlık alanlarından gelir.
const section = await useSection('approach', { eyebrow: 'Yaklaşımım', title: 'Şeffaf, sakin ve hasta odaklı bir süreç' })
const { t } = useLang()

useHead({ title: () => `${section.value.eyebrow} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageHero :lines="[section.title]" :label="section.eyebrow" />
    <div class="page-body">
      <ApproachSection :show-title="false" />
    </div>
  </div>
</template>
