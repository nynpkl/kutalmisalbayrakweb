<script setup lang="ts">
// Türkçe (/hakkimda) ve İngilizce (/en/about) sayfalar aynı içeriği kullanır; dil adresten belirlenir.
// Büyük başlık ve yeşil alt çizgili sayfa adı, admin panelindeki "about" bölümünün başlık / üst başlık alanlarından gelir.
const section = await useSection('about', { eyebrow: 'Hakkımda', title: 'Her hasta, kendi hikâyesinin baş rolündedir.' })
const { t } = useLang()

useHead({ title: () => `${section.value.eyebrow} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageHero :lines="[section.title]" :label="section.eyebrow" />
    <div class="page-body">
      <AboutSection />
    </div>
  </div>
</template>
