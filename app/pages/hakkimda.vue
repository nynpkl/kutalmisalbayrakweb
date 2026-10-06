<script setup lang="ts">
// Türkçe (/hakkimda) ve İngilizce (/en/about) sayfalar aynı içeriği kullanır; dil adresten belirlenir.
// Sayfa başlığı, admin panelindeki "about" bölümünün "üst etiket" alanından gelir.
const section = await useSection('about', { eyebrow: 'Hakkımda', title: 'Her hasta, kendi hikâyesinin baş rolündedir.' })
const { t } = useLang()

useHead({ title: () => `${section.value.eyebrow} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageTitle :title="section.eyebrow" />
    <div class="page-body">
      <AboutSection />
    </div>
  </div>
</template>
