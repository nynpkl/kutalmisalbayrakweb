// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  components: [{ path: '~/components', pathPrefix: false }],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'tr' },
      title: 'Op. Dr. Kutalmış Albayrak | Ortopedi ve Travmatoloji — Omuz ve Dirsek Cerrahisi',
      meta: [
        {
          name: 'description',
          content:
            'Op. Dr. Kutalmış Albayrak — Ortopedi ve Travmatoloji uzmanı; omuz ve dirsek cerrahisi, spor yaralanmaları ve artroskopik cerrahi alanında İstanbul\'da hizmet vermektedir.'
        },
        { name: 'theme-color', content: '#0f6f5c' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  }
})
