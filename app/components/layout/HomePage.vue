<script setup lang="ts">
// Ana sayfa içeriği; Türkçe (/) ve İngilizce (/en) ana sayfalar bu bileşeni kullanır.
const { t, pathTo } = useLang()
const contact = await useSection('contact', { title: 'Randevu ve iletişim bilgileri' })
</script>

<template>
  <div>
    <HeroSection />
    <div class="page-body">
      <AboutSection mode="intro" />
      <ExpertiseSection class="block" mode="list" />
      <StatsSection class="block" />
      <ApproachSection class="block" />

      <!-- Referanstaki "FAQ: What makes Rosenberg unique?" kapanışının karşılığı -->
      <div class="block center">
        <NuxtLink :to="pathTo('contact')" class="btn">{{ t('bookAppointment') }}</NuxtLink>
        <p class="t-main-menu home-closing__label">{{ t('contactLabel') }}</p>
        <NuxtLink :to="pathTo('contact')" class="t-title home-closing__link link-underline">{{ contact.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-closing__label {
  margin-top: 100px;
}

.home-closing__link {
  display: inline-block;
  margin-top: 18px;
}
</style>
