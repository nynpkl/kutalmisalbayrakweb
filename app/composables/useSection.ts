import contentEn from '~~/supabase/content-en.json'

// Dile göre bölüm içeriği. Türkçe: "<bölüm>" satırı; İngilizce: "<bölüm>_en" satırı.
// Veritabanına ulaşılamazsa bileşendeki Türkçe yedek / content-en.json'daki İngilizce yedek kullanılır.
// Fotoğraf, bağlantı ve telefon gibi dilden bağımsız alanlar her zaman Türkçe satırdan alınır;
// böylece admin panelinde yalnızca bir kez girilmeleri yeterlidir.
const SHARED_KEYS = [
  'photoUrl',
  'scholarUrl',
  'ratingUrl',
  'rating',
  'phoneHref',
  'instagramHandle',
  'instagramUrl',
  'mapEmbedSrc',
  'mapUrl'
]

export async function useSection<T extends Record<string, any>>(id: string, fallbackTr: T) {
  // useLang, await'ten önce çağrılmalı (sonrasında Nuxt bağlamı kaybolur)
  const { locale } = useLang()
  const { data } = await useSiteContent()

  return computed<T>(() => {
    const tr = (data.value?.[id] ?? {}) as Record<string, any>
    if (locale.value === 'tr') return { ...fallbackTr, ...tr }

    const en = (data.value?.[`${id}_en`] ?? {}) as Record<string, any>
    const shared = Object.fromEntries(SHARED_KEYS.filter((k) => tr[k] !== undefined && tr[k] !== '').map((k) => [k, tr[k]]))
    const enFallback = (contentEn as Record<string, any>)[id] ?? {}
    return { ...fallbackTr, ...enFallback, ...nonEmpty(en), ...shared } as T
  })
}

// Admin panelinde boş bırakılmış İngilizce alanlar yedek metni silmesin
function nonEmpty(obj: Record<string, any>) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== '' && v !== null && v !== undefined))
}
