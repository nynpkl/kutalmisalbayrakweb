// Etkin dil adresten okunur: /en ile başlayan sayfalar İngilizce, diğerleri Türkçe.
export function useLang() {
  const route = useRoute()
  const locale = computed<Locale>(() => localeFromPath(route.path))

  const t = (key: UiKey) => ui[locale.value][key]
  const pathTo = (page: PageKey) => pagePaths[locale.value][page]
  const nav = computed(() => navOrder.map((key) => ({ key, label: ui[locale.value][`nav.${key}`], to: pagePaths[locale.value][key] })))

  return { locale, t, pathTo, nav }
}
