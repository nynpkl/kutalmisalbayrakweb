<script setup lang="ts">
// Türkçe (/tedaviler) ve İngilizce (/en/treatments) sayfalar aynı içeriği kullanır; dil adresten belirlenir.
// Sayfa başlığı, admin panelindeki "treatments" bölümünün "üst etiket" alanından gelir.
const section = await useSection('treatments', { eyebrow: 'Tedaviler', title: 'Tedavi ve cerrahi girişimler' })
const { t } = useLang()

useHead({ title: () => `${section.value.eyebrow} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageTitle :title="section.eyebrow" />
    <div class="page-body">
      <TreatmentsSection />
    </div>
  </div>
</template>
