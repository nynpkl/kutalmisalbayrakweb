<script setup lang="ts">
const fallback = {
  eyebrow: 'İletişim',
  title: 'Randevu ve iletişim bilgileri',
  lead: 'Muayene ve ameliyat randevuları, görev yaptığı kamu hastanesinin randevu sistemleri üzerinden alınmaktadır.',
  workplaceName: 'Metin Sabancı Baltalimanı Kemik Hastalıkları Eğitim ve Araştırma Hastanesi',
  workplaceDept: 'Ortopedi ve Travmatoloji Kliniği',
  address: 'Baltalimanı Mah. Rumeli Hisarı Cad. No: 57/1, 34470 Sarıyer / İstanbul',
  phoneDisplay: '0 (212) 323 70 75',
  phoneHref: '+902123237075',
  appointmentNote: 'MHRS (Merkezi Hastane Randevu Sistemi) veya Alo 182 üzerinden de randevu alınabilir.',
  instagramHandle: '@drkutalmisalbayrak',
  instagramUrl: 'https://www.instagram.com/drkutalmisalbayrak/',
  mapEmbedSrc: 'https://maps.google.com/maps?q=41.0956288,29.0538758&z=16&output=embed',
  mapUrl: 'https://maps.app.goo.gl/Pj9NxrLY83yANvtGA'
}

const { data } = await useSiteContent()
const contact = computed(() => ({ ...fallback, ...(data.value?.contact ?? {}) }))

const submitted = ref(false)

function onSubmit() {
  submitted.value = true
}
</script>

<template>
  <section id="iletisim" class="section contact">
    <div class="container contact__grid">
      <div class="contact__info">
        <p class="eyebrow">{{ contact.eyebrow }}</p>
        <h2 class="section-title">{{ contact.title }}</h2>
        <p class="section-lead">{{ contact.lead }}</p>

        <dl class="contact__details">
          <div>
            <dt>Görev Yeri</dt>
            <dd>{{ contact.workplaceName }}<br />{{ contact.workplaceDept }}</dd>
          </div>
          <div>
            <dt>Adres</dt>
            <dd>{{ contact.address }}</dd>
          </div>
          <div>
            <dt>Randevu Hattı</dt>
            <dd>
              <a :href="`tel:${contact.phoneHref}`" class="link-underline">{{ contact.phoneDisplay }}</a> ·
              {{ contact.appointmentNote }}
            </dd>
          </div>
          <div>
            <dt>Sosyal Medya</dt>
            <dd>
              <a :href="contact.instagramUrl" target="_blank" rel="noopener noreferrer" class="link-underline">
                {{ contact.instagramHandle }}
              </a>
            </dd>
          </div>
        </dl>

        <div class="contact__map">
          <iframe
            :src="contact.mapEmbedSrc"
            title="Konum haritası"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          :href="contact.mapUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="contact__map-link link-underline"
        >
          Google Haritalar'da aç →
        </a>
      </div>

      <form class="contact__form" @submit.prevent="onSubmit">
        <div class="field">
          <label for="name">Ad Soyad</label>
          <input id="name" type="text" placeholder="Adınız Soyadınız" required />
        </div>
        <div class="field">
          <label for="phone">Telefon</label>
          <input id="phone" type="tel" placeholder="05xx xxx xx xx" required />
        </div>
        <div class="field">
          <label for="message">Mesajınız</label>
          <textarea id="message" rows="4" placeholder="Sorunuzu kısaca yazın" />
        </div>
        <button type="submit" class="btn btn-primary">Gönder</button>
        <p v-if="submitted" class="contact__success">
          Teşekkürler! Bu form şu an statiktir; randevu için lütfen yukarıdaki MHRS/Alo 182 kanallarını
          kullanın.
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 6vw, 90px);
}

@media (min-width: 900px) {
  .contact__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.contact__details {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact__details dt {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.contact__details dd {
  margin: 6px 0 0;
  font-size: 15.5px;
  line-height: 1.6;
}

.contact__map {
  margin-top: 40px;
  aspect-ratio: 16 / 9;
  background: var(--color-accent-soft);
  border: 1px solid var(--color-line);
  overflow: hidden;
}

.contact__map iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.contact__map-link {
  display: inline-block;
  margin-top: 14px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--color-accent);
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 22px;
  background: var(--color-surface);
  border: 1px solid var(--color-line);
  padding: clamp(28px, 4vw, 44px);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field label {
  font-size: 12.5px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.field input,
.field textarea {
  border: 1px solid var(--color-line);
  padding: 14px 16px;
  font-family: var(--font-body);
  font-size: 15px;
  background: transparent;
  color: var(--color-ink);
  resize: vertical;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.contact__success {
  font-size: 13.5px;
  color: var(--color-accent);
}
</style>
