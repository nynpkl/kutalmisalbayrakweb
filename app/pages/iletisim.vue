<script setup lang="ts">
// Türkçe (/iletisim) ve İngilizce (/en/contact) sayfalar aynı içeriği kullanır; dil adresten belirlenir.
// Sayfa başlığı, admin panelindeki "contact" bölümünün "üst etiket" alanından gelir.
const section = await useSection('contact', { eyebrow: 'İletişim', title: 'Randevu ve iletişim bilgileri' })
const { t } = useLang()

useHead({ title: () => `${section.value.eyebrow} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageTitle :title="section.eyebrow" />
    <div class="page-body">
      <ContactSection />
    </div>
  </div>
</template>
