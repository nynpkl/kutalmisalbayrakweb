<script setup lang="ts">
// Türkçe (/uzmanlik) ve İngilizce (/en/expertise) sayfalar aynı içeriği kullanır; dil adresten belirlenir.
// Sayfa başlığı, admin panelindeki "expertise" bölümünün "üst etiket" alanından gelir.
const section = await useSection('expertise', { eyebrow: 'Uzmanlık Alanları', title: 'Odaklandığım cerrahi branşlar' })
const { t } = useLang()

useHead({ title: () => `${section.value.eyebrow} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageTitle :title="section.eyebrow" />
    <div class="page-body">
      <ExpertiseSection mode="detail" />
    </div>
  </div>
</template>
