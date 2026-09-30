<script setup lang="ts">
// Türkçe (/yorumlar) ve İngilizce (/en/reviews) sayfalar aynı içeriği kullanır; dil adresten belirlenir.
// Büyük başlık ve yeşil alt çizgili sayfa adı, admin panelindeki "testimonials" bölümünün başlık / üst başlık alanlarından gelir.
const section = await useSection('testimonials', { eyebrow: 'Hasta Değerlendirmeleri', title: 'Hasta değerlendirmelerinde öne çıkanlar' })
const { t } = useLang()

useHead({ title: () => `${section.value.eyebrow} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageHero :lines="[section.title]" :label="section.eyebrow" />
    <div class="page-body">
      <TestimonialsSection />
    </div>
  </div>
</template>
