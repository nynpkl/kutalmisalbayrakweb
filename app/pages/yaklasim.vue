<script setup lang="ts">
// Türkçe (/yaklasim) ve İngilizce (/en/approach) sayfalar aynı içeriği kullanır; dil adresten belirlenir.
// Sayfa başlığı, admin panelindeki "approach" bölümünün "üst etiket" alanından gelir.
const section = await useSection('approach', { eyebrow: 'Yaklaşımım', title: 'Şeffaf, sakin ve hasta odaklı bir süreç' })
const { t } = useLang()

useHead({ title: () => `${section.value.eyebrow} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageTitle :title="section.eyebrow" />
    <div class="page-body">
      <ApproachSection :show-title="false" />
    </div>
  </div>
</template>
