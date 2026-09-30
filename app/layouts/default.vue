<script setup lang="ts">
// Sayfanın dili: <html lang> (büyük harfe çevirmede "i/İ" doğru olsun diye önemli), başlık/açıklama
// ve arama motorları için iki dil arasındaki hreflang bağlantıları.
const route = useRoute()
const { locale, t } = useLang()

useHead({
  htmlAttrs: { lang: locale },
  titleTemplate: (title) => title || t('meta.title'),
  meta: [
    { name: 'description', content: () => t('meta.description') },
    { property: 'og:locale', content: () => (locale.value === 'en' ? 'en_US' : 'tr_TR') }
  ],
  link: () => [
    { rel: 'alternate', hreflang: 'tr', href: switchLocalePath(route.path, 'tr') },
    { rel: 'alternate', hreflang: 'en', href: switchLocalePath(route.path, 'en') },
    { rel: 'alternate', hreflang: 'x-default', href: switchLocalePath(route.path, 'tr') }
  ]
})
</script>

<template>
  <div>
    <IntroLoader />
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
