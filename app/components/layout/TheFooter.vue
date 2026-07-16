<script setup lang="ts">
const year = new Date().getFullYear()

const fallback = {
  tagline: 'Hareketin özgürlüğü, güvenilir ellerde.',
  legal: 'Bu site bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz; randevu için resmi hastane kanallarını (MHRS / Alo 182) kullanınız.'
}

const contactFallback = {
  phoneDisplay: '0 (212) 323 70 75',
  phoneHref: '+902123237075',
  instagramHandle: '@drkutalmisalbayrak',
  instagramUrl: 'https://www.instagram.com/drkutalmisalbayrak/'
}

const { data } = await useSiteContent()
const footer = computed(() => ({ ...fallback, ...(data.value?.footer ?? {}) }))
const contact = computed(() => ({ ...contactFallback, ...(data.value?.contact ?? {}) }))

const navLinks = [
  { label: 'Hakkımda', href: '#hakkimda' },
  { label: 'Uzmanlık Alanları', href: '#uzmanlik' },
  { label: 'Yaklaşımım', href: '#yaklasim' },
  { label: 'Yayınlar', href: '#yayinlar' }
]
</script>

<template>
  <footer class="footer">
    <div class="container footer__top">
      <div class="footer__brand">
        <span class="footer__mark">KA</span>
        <p class="footer__tagline">{{ footer.tagline }}</p>
      </div>

      <div class="footer__columns">
        <div class="footer__col">
          <h3>Gezinme</h3>
          <ul>
            <li v-for="link in navLinks" :key="link.label">
              <a :href="link.href" class="link-underline">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__col">
          <h3>İletişim</h3>
          <ul>
            <li><a :href="`tel:${contact.phoneHref}`" class="link-underline">{{ contact.phoneDisplay }}</a></li>
            <li><a href="#iletisim" class="link-underline">Adres ve harita</a></li>
          </ul>
        </div>

        <div class="footer__col">
          <h3>Sosyal Medya</h3>
          <ul>
            <li>
              <a :href="contact.instagramUrl" target="_blank" rel="noopener noreferrer" class="link-underline">
                {{ contact.instagramHandle }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container footer__legal">
      <p>© {{ year }} Op. Dr. Kutalmış Albayrak. Tüm hakları saklıdır.</p>
      <p class="footer__disclaimer">{{ footer.legal }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-ink);
  color: rgba(244, 242, 236, 0.85);
  padding-top: clamp(56px, 8vw, 96px);
}

.footer__top {
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-bottom: 56px;
  border-bottom: 1px solid rgba(244, 242, 236, 0.15);
}

@media (min-width: 900px) {
  .footer__top {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 320px;
}

.footer__mark {
  font-family: var(--font-display);
  font-size: 28px;
  color: #7fd9c2;
}

.footer__tagline {
  font-family: var(--font-display);
  font-size: 20px;
  color: rgba(244, 242, 236, 0.9);
}

.footer__columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

@media (min-width: 560px) {
  .footer__columns {
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
  }
}

.footer__col h3 {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #7fd9c2;
  margin-bottom: 18px;
}

.footer__col ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
}

.footer__legal {
  padding-block: 26px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12.5px;
  color: rgba(244, 242, 236, 0.55);
}

@media (min-width: 900px) {
  .footer__legal {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
