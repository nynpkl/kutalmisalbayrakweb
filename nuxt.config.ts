// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['nuxt-auth-utils'],

  components: [{ path: '~/components', pathPrefix: false }],

  css: ['~/assets/css/main.css'],

  // Kaldırılan / adı değişen sayfaların eski adresleri (paylaşılmış bağlantılar boşa düşmesin)
  routeRules: {
    '/yayinlar': { redirect: { to: '/akademik', statusCode: 301 } },
    '/yaklasim': { redirect: { to: '/', statusCode: 301 } },
    '/yorumlar': { redirect: { to: '/', statusCode: 301 } },
    '/en/publications': { redirect: { to: '/en/academic', statusCode: 301 } },
    '/en/approach': { redirect: { to: '/en', statusCode: 301 } },
    '/en/reviews': { redirect: { to: '/en', statusCode: 301 } }
  },

  nitro: {
    vercel: {
      config: {
        // Supabase'in duraklatılmaması için her gün 05:00 UTC (08:00 TR) veritabanına istek at
        crons: [{ path: '/api/cron/keepalive', schedule: '0 5 * * *' }]
      }
    }
  },

  runtimeConfig: {
    supabaseUrl: '',
    supabaseServiceKey: '',
    adminPassword: ''
  },

  app: {
    // Referanstaki gibi sayfalar arası yumuşak geçiş (opacity .375s)
    pageTransition: { name: 'page-fade', mode: 'out-in' },

    head: {
      htmlAttrs: { lang: 'tr' },
      // Sayfa başlığı ve açıklaması dile göre app/layouts/default.vue içinde ayarlanır
      meta: [
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400&display=swap'
        }
      ]
    }
  }
})
