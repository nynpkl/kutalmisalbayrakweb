<script setup lang="ts">
const year = new Date().getFullYear()

const columns = [
  {
    title: 'Gezinme',
    links: [
      { label: 'Hakkımda', href: '#hakkimda' },
      { label: 'Uzmanlık Alanları', href: '#uzmanlik' },
      { label: 'Yaklaşımım', href: '#yaklasim' },
      { label: 'Yayınlar', href: '#yayinlar' }
    ]
  },
  {
    title: 'İletişim',
    links: [
      { label: '0 (212) 323 70 75', href: 'tel:+902123237075' },
      { label: 'Baltalimanı EAH, Sarıyer / İstanbul', href: '#iletisim' }
    ]
  }
]

const socials = [{ label: 'Instagram', href: 'https://www.instagram.com/drkutalmisalbayrak/' }]
</script>

<template>
  <footer class="footer">
    <div class="container footer__top">
      <div class="footer__brand">
        <span class="footer__mark">KA</span>
        <p class="footer__tagline">Hareketin özgürlüğü, güvenilir ellerde.</p>
      </div>

      <div class="footer__columns">
        <div v-for="col in columns" :key="col.title" class="footer__col">
          <h3>{{ col.title }}</h3>
          <ul>
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href" class="link-underline">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__col">
          <h3>Sosyal Medya</h3>
          <ul>
            <li v-for="s in socials" :key="s.label">
              <a :href="s.href" target="_blank" rel="noopener noreferrer" class="link-underline">{{ s.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container footer__legal">
      <p>© {{ year }} Op. Dr. Kutalmış Albayrak. Tüm hakları saklıdır.</p>
      <p class="footer__disclaimer">
        Bu site bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz; randevu için resmi hastane
        kanallarını (MHRS / Alo 182) kullanınız.
      </p>
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
