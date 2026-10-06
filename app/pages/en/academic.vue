<script setup lang="ts">
// Türkçe (/akademik) ve İngilizce (/en/academic) sayfalar aynı içeriği kullanır; dil adresten belirlenir.
// Sayfa başlığı, admin panelindeki "publications" bölümünün "üst etiket" alanından gelir.
const section = await useSection('publications', { eyebrow: 'Yayınlar & Akademik Çalışmalar', title: 'Bilimsel katkılar' })
const { t } = useLang()

useHead({ title: () => `${section.value.eyebrow} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageTitle :title="section.eyebrow" />
    <div class="page-body">
      <PublicationsSection />
    </div>
  </div>
</template>
