<script setup lang="ts">
// Türkçe (/yorumlar) ve İngilizce (/en/reviews) sayfalar aynı içeriği kullanır; dil adresten belirlenir.
// Sayfa başlığı, admin panelindeki "testimonials" bölümünün "üst etiket" alanından gelir.
const section = await useSection('testimonials', { eyebrow: 'Hasta Değerlendirmeleri', title: 'Hasta değerlendirmelerinde öne çıkanlar' })
const { t } = useLang()

useHead({ title: () => `${section.value.eyebrow} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageTitle :title="section.eyebrow" />
    <div class="page-body">
      <TestimonialsSection />
    </div>
  </div>
</template>
