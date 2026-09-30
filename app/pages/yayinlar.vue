<script setup lang="ts">
// Türkçe (/yayinlar) ve İngilizce (/en/publications) sayfalar aynı içeriği kullanır; dil adresten belirlenir.
// Büyük başlık ve yeşil alt çizgili sayfa adı, admin panelindeki "publications" bölümünün başlık / üst başlık alanlarından gelir.
const section = await useSection('publications', { eyebrow: 'Yayınlar & Akademik Çalışmalar', title: 'Bilimsel katkılar' })
const { t } = useLang()

useHead({ title: () => `${section.value.eyebrow} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageHero :lines="[section.title]" :label="section.eyebrow" />
    <div class="page-body">
      <PublicationsSection />
    </div>
  </div>
</template>
