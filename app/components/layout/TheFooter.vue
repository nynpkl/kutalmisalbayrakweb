<script setup lang="ts">
// Referanstaki footer: "VISIT ALSO" başlığı altında iki büyük bağlantı, küçük amblem,
// ortalanmış iletişim bilgileri, sosyal medya ikonu ve en altta küçük telif satırı.
const year = new Date().getFullYear()

const fallback = {
  tagline: 'Hareketin özgürlüğü, güvenilir ellerde.',
  legal: 'Bu site bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz; randevu için resmi hastane kanallarını (MHRS / Alo 182) kullanınız.'
}

const contactFallback = {
  workplaceName: 'Metin Sabancı Baltalimanı Kemik Hastalıkları Eğitim ve Araştırma Hastanesi',
  address: 'Baltalimanı Mah. Rumeli Hisarı Cad. No: 57/1, 34470 Sarıyer / İstanbul',
  phoneDisplay: '0 (212) 323 70 75',
  phoneHref: '+902123237075',
  instagramHandle: '@drkutalmisalbayrak',
  instagramUrl: 'https://www.instagram.com/drkutalmisalbayrak/'
}

const publicationsFallback = {
  scholarUrl: 'https://scholar.google.com/citations?user=_pwBOwsAAAAJ&hl=tr'
}

const testimonialsFallback = {
  ratingUrl: 'https://www.doktortakvimi.com/kutalmis-albayrak/ortopedi-ve-travmatoloji/istanbul'
}

const { data } = await useSiteContent()
const footer = await useSection('footer', fallback)
const contact = await useSection('contact', contactFallback)
const { t } = useLang()
const scholarUrl = computed(() => data.value?.publications?.scholarUrl || publicationsFallback.scholarUrl)
const ratingUrl = computed(() => data.value?.testimonials?.ratingUrl || testimonialsFallback.ratingUrl)
</script>

<template>
  <footer class="footer t-footer">
    <p class="footer__visit-title t-main-menu">{{ t('footer.otherProfiles') }}</p>

    <div class="footer__visit">
      <a :href="scholarUrl" target="_blank" rel="noopener noreferrer" class="footer__big-link">
        <span>Google</span>
        <span>Scholar</span>
      </a>
      <span class="footer__divider" aria-hidden="true" />
      <a :href="ratingUrl" target="_blank" rel="noopener noreferrer" class="footer__big-link">
        <span>Doktor</span>
        <span>Takvimi</span>
      </a>
    </div>

    <div class="footer__info">
      <img class="footer__mark" src="/images/logo/ka-mark-black.png" alt="" width="720" height="615" />
      <p>{{ t('doctor') }}</p>
      <p>{{ contact.workplaceName }}</p>
      <p>{{ contact.address }}</p>
      <p><a :href="`tel:${contact.phoneHref}`" class="link-underline">{{ contact.phoneDisplay }}</a></p>
    </div>

    <div class="footer__social">
      <a
        :href="contact.instagramUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="footer__icon"
        :aria-label="`Instagram: ${contact.instagramHandle}`"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
          <path
            fill="currentColor"
            d="M3 3h18v18H3V3zm2 2v14h14V5H5zm7 3.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6zm0 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM16.6 6.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"
          />
        </svg>
      </a>
    </div>

    <div class="footer__legal t-mini">
      <p>© {{ year }} {{ t('doctor') }}, {{ t('footer.rights') }}</p>
      <p>{{ footer.legal }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 140px;
  padding-bottom: 60px;
  text-align: center;
}

.footer__visit-title {
  margin-bottom: 48px;
}

.footer__visit {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 0;
}

/* Referanstaki "The Rosenberg Journal" logosunu andıran, satır altları yeşil çizgili büyük bağlantılar */
.footer__big-link {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 40px;
  font-size: 30px;
  line-height: 1.2;
  text-align: left;
}

.footer__big-link span {
  border-bottom: 1px solid rgba(9, 134, 71, 0.55);
  transition: border-color var(--ease);
}

.footer__big-link:hover span {
  border-color: var(--color-green);
}

@media (min-width: 1170px) {
  .footer__big-link {
    padding: 0 80px;
    font-size: 38px;
  }
}

.footer__divider {
  width: 1px;
  background: rgba(0, 0, 0, 0.15);
}

.footer__info {
  margin-top: 130px;
}

.footer__mark {
  width: 34px;
  height: auto;
  margin: 0 auto 18px;
}

.footer__social {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.footer__icon {
  line-height: 0;
  transition: color var(--ease);
}

.footer__icon:hover {
  color: var(--color-green);
}

.footer__legal {
  width: min(560px, 88vw);
  margin: 70px auto 0;
}

.footer__legal p + p {
  margin-top: 6px;
}
</style>
