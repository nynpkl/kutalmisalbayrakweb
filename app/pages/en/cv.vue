<script setup lang="ts">
// Türkçe (/ozgecmis) ve İngilizce (/en/cv): Akademik Yolculuk zaman çizelgesi
const { t } = useLang()

useHead({ title: () => `${t('cv.title')} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageTitle :title="t('cv.title')" />
    <div class="page-body">
      <CvSection />
    </div>
  </div>
</template>
