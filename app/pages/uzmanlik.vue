<script setup lang="ts">
// Türkçe (/uzmanlik) ve İngilizce (/en/expertise) sayfalar aynı içeriği kullanır; dil adresten belirlenir.
// Büyük başlık ve yeşil alt çizgili sayfa adı, admin panelindeki "expertise" bölümünün başlık / üst başlık alanlarından gelir.
const section = await useSection('expertise', { eyebrow: 'Uzmanlık Alanları', title: 'Odaklandığım cerrahi branşlar' })
const { t } = useLang()

useHead({ title: () => `${section.value.eyebrow} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageHero :lines="[section.title]" :label="section.eyebrow" />
    <div class="page-body">
      <ExpertiseSection mode="detail" />
    </div>
  </div>
</template>
