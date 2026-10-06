<script setup lang="ts">

const about = await useSection('about', aboutFallback)
const { t, pathTo } = useLang()

withDefaults(defineProps<{ mode?: 'intro' | 'full' }>(), { mode: 'full' })
</script>

<template>
  <!-- Ana sayfada kısa giriş (düğme + başlık + metin), Hakkımda sayfasında tamamı -->
  <section class="about">
    <template v-if="mode === 'intro'">
      <div class="center">
        <NuxtLink :to="pathTo('contact')" class="btn">{{ t('bookAppointment') }}</NuxtLink>
      </div>
      <h2 class="t-title center wrap-text about__title">{{ about.title }}</h2>
      <p class="t-text-big wrap-text about__text">{{ about.text }}</p>
      <div class="center about__more">
        <NuxtLink :to="pathTo('about')" class="t-main-menu link-underline">{{ t('readMore') }}</NuxtLink>
      </div>
    </template>

    <template v-else>
      <div class="frame about__portrait">
        <img :src="about.photoUrl" :alt="t('doctor')" width="1086" height="1448" />
      </div>

      <p class="t-text-big wrap-text block">{{ about.text }}</p>

      <div class="center block">
        <NuxtLink :to="pathTo('contact')" class="btn">{{ t('bookAppointment') }}</NuxtLink>
      </div>
    </template>
  </section>
</template>

<style scoped>
.about__title {
  margin-top: 64px;
}

.about__text {
  margin-top: 64px;
}

.about__more {
  margin-top: 48px;
}

.about__portrait {
  width: min(520px, 88.75vw);
  margin-inline: auto;
  aspect-ratio: 3 / 4;
}
</style>
