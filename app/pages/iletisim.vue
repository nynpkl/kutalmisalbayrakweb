<script setup lang="ts">
// Türkçe (/iletisim) ve İngilizce (/en/contact) sayfalar aynı içeriği kullanır; dil adresten belirlenir.
// Büyük başlık ve yeşil alt çizgili sayfa adı, admin panelindeki "contact" bölümünün başlık / üst başlık alanlarından gelir.
const section = await useSection('contact', { eyebrow: 'İletişim', title: 'Randevu ve iletişim bilgileri' })
const { t } = useLang()

useHead({ title: () => `${section.value.eyebrow} | ${t('doctor')}` })
</script>

<template>
  <div>
    <PageHero :lines="[section.title]" :label="section.eyebrow" />
    <div class="page-body">
      <ContactSection />
    </div>
  </div>
</template>
