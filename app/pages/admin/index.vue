<script setup lang="ts">
definePageMeta({ layout: 'blank', middleware: 'admin' })

type Item = Record<string, string>

const defaults: Record<string, any> = {
  hero: { kicker: '', titleLine1: '', titleLine2: '', subtitle: '', ctaPrimaryLabel: '', ctaSecondaryLabel: '' },
  about: { eyebrow: '', title: '', text: '', photoUrl: '', timeline: [] as Item[] },
  expertise: { eyebrow: '', title: '', lead: '', items: [] as Item[] },
  stats: { items: [] as Item[] },
  approach: { eyebrow: '', title: '', lead: '', steps: [] as Item[] },
  publications: { eyebrow: '', title: '', lead: '', scholarUrl: '', items: [] as Item[] },
  testimonials: { eyebrow: '', title: '', lead: '', rating: '', ratingLabel: '', ratingUrl: '', themes: [] as Item[] },
  contact: {
    eyebrow: '', title: '', lead: '', workplaceName: '', workplaceDept: '', address: '',
    phoneDisplay: '', phoneHref: '', appointmentNote: '', instagramHandle: '', instagramUrl: '',
    mapEmbedSrc: '', mapUrl: ''
  },
  journal: { eyebrow: '', title: '', posts: [] as Item[] },
  footer: { tagline: '', legal: '' }
}

const tabs = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'Hakkımda' },
  { id: 'expertise', label: 'Uzmanlık Alanları' },
  { id: 'stats', label: 'İstatistikler' },
  { id: 'approach', label: 'Yaklaşımım' },
  { id: 'publications', label: 'Yayınlar' },
  { id: 'testimonials', label: 'Hasta Değerlendirmeleri' },
  { id: 'contact', label: 'İletişim' },
  { id: 'journal', label: 'Blog Yazıları' },
  { id: 'footer', label: 'Footer' }
]

const activeTab = ref('hero')
const content = reactive<Record<string, any>>(structuredClone(defaults))
const status = reactive<Record<string, 'idle' | 'saving' | 'saved' | 'error'>>({})
const uploading = ref(false)

const { data } = await useFetch('/api/content')
for (const key of Object.keys(defaults)) {
  if (data.value?.[key]) {
    Object.assign(content[key], data.value[key])
  }
}

async function saveSection(id: string) {
  status[id] = 'saving'
  try {
    await $fetch(`/api/admin/content/${id}`, { method: 'PUT', body: content[id] })
    status[id] = 'saved'
    setTimeout(() => { if (status[id] === 'saved') status[id] = 'idle' }, 2500)
  } catch {
    status[id] = 'error'
  }
}

function addItem(section: string, key: string, shape: Item) {
  content[section][key].push({ ...shape })
}

function removeItem(section: string, key: string, index: number) {
  content[section][key].splice(index, 1)
}

async function onPhotoChange(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  uploading.value = true
  try {
    const form = new FormData()
    form.append('file', file)
    const res = await $fetch<{ url: string }>('/api/admin/upload', { method: 'POST', body: form })
    content.about.photoUrl = res.url
  } catch {
    alert('Fotoğraf yüklenemedi.')
  } finally {
    uploading.value = false
    input.value = ''
  }
}

async function logout() {
  await useUserSession().clear()
  await navigateTo('/admin/login')
}
</script>

<template>
  <div class="admin">
    <aside class="admin__sidebar">
      <p class="admin__brand">KA — Yönetim</p>
      <nav class="admin__nav">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          class="admin__nav-item"
          :class="{ 'admin__nav-item--active': activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </nav>
      <div class="admin__sidebar-footer">
        <a href="/" target="_blank" class="admin__view-site">Siteyi görüntüle →</a>
        <button type="button" class="admin__logout" @click="logout">Çıkış Yap</button>
      </div>
    </aside>

    <main class="admin__content">
      <!-- HERO -->
      <section v-if="activeTab === 'hero'" class="panel">
        <h2>Hero</h2>
        <label>Üst etiket<input v-model="content.hero.kicker" type="text" /></label>
        <label>Başlık (1. satır)<input v-model="content.hero.titleLine1" type="text" /></label>
        <label>Başlık (2. satır)<input v-model="content.hero.titleLine2" type="text" /></label>
        <label>Alt başlık<input v-model="content.hero.subtitle" type="text" /></label>
        <label>Birincil buton metni<input v-model="content.hero.ctaPrimaryLabel" type="text" /></label>
        <label>İkincil buton metni<input v-model="content.hero.ctaSecondaryLabel" type="text" /></label>
        <button class="save" type="button" @click="saveSection('hero')">Kaydet</button>
        <span class="status" :class="status.hero">{{ status.hero === 'saved' ? 'Kaydedildi ✓' : status.hero === 'error' ? 'Hata oluştu' : '' }}</span>
      </section>

      <!-- ABOUT -->
      <section v-if="activeTab === 'about'" class="panel">
        <h2>Hakkımda</h2>
        <label>Üst etiket<input v-model="content.about.eyebrow" type="text" /></label>
        <label>Başlık<input v-model="content.about.title" type="text" /></label>
        <label>Metin<textarea v-model="content.about.text" rows="6" /></label>

        <label>Fotoğraf</label>
        <div class="photo-row">
          <img v-if="content.about.photoUrl" :src="content.about.photoUrl" class="photo-preview" alt="" />
          <input type="file" accept="image/*" :disabled="uploading" @change="onPhotoChange" />
          <span v-if="uploading">Yükleniyor…</span>
        </div>

        <h3>Eğitim / Kariyer Zaman Çizelgesi</h3>
        <div v-for="(item, i) in content.about.timeline" :key="i" class="list-item">
          <input v-model="item.year" placeholder="Yıl (örn. 2019–2022)" />
          <input v-model="item.text" placeholder="Açıklama" />
          <button type="button" class="remove" @click="removeItem('about', 'timeline', i)">Sil</button>
        </div>
        <button type="button" class="add" @click="addItem('about', 'timeline', { year: '', text: '' })">+ Satır Ekle</button>

        <button class="save" type="button" @click="saveSection('about')">Kaydet</button>
        <span class="status" :class="status.about">{{ status.about === 'saved' ? 'Kaydedildi ✓' : status.about === 'error' ? 'Hata oluştu' : '' }}</span>
      </section>

      <!-- EXPERTISE -->
      <section v-if="activeTab === 'expertise'" class="panel">
        <h2>Uzmanlık Alanları</h2>
        <label>Üst etiket<input v-model="content.expertise.eyebrow" type="text" /></label>
        <label>Başlık<input v-model="content.expertise.title" type="text" /></label>
        <label>Açıklama<textarea v-model="content.expertise.lead" rows="3" /></label>

        <h3>Kartlar</h3>
        <div v-for="(item, i) in content.expertise.items" :key="i" class="list-item list-item--stacked">
          <input v-model="item.title" placeholder="Başlık" />
          <textarea v-model="item.text" rows="2" placeholder="Açıklama" />
          <button type="button" class="remove" @click="removeItem('expertise', 'items', i)">Sil</button>
        </div>
        <button type="button" class="add" @click="addItem('expertise', 'items', { title: '', text: '' })">+ Kart Ekle</button>

        <button class="save" type="button" @click="saveSection('expertise')">Kaydet</button>
        <span class="status" :class="status.expertise">{{ status.expertise === 'saved' ? 'Kaydedildi ✓' : status.expertise === 'error' ? 'Hata oluştu' : '' }}</span>
      </section>

      <!-- STATS -->
      <section v-if="activeTab === 'stats'" class="panel">
        <h2>İstatistikler</h2>
        <div v-for="(item, i) in content.stats.items" :key="i" class="list-item">
          <input v-model="item.value" placeholder="Değer (örn. 9+)" />
          <input v-model="item.label" placeholder="Etiket" />
          <button type="button" class="remove" @click="removeItem('stats', 'items', i)">Sil</button>
        </div>
        <button type="button" class="add" @click="addItem('stats', 'items', { value: '', label: '' })">+ İstatistik Ekle</button>

        <button class="save" type="button" @click="saveSection('stats')">Kaydet</button>
        <span class="status" :class="status.stats">{{ status.stats === 'saved' ? 'Kaydedildi ✓' : status.stats === 'error' ? 'Hata oluştu' : '' }}</span>
      </section>

      <!-- APPROACH -->
      <section v-if="activeTab === 'approach'" class="panel">
        <h2>Yaklaşımım</h2>
        <label>Üst etiket<input v-model="content.approach.eyebrow" type="text" /></label>
        <label>Başlık<input v-model="content.approach.title" type="text" /></label>
        <label>Açıklama<textarea v-model="content.approach.lead" rows="3" /></label>

        <h3>Adımlar</h3>
        <div v-for="(item, i) in content.approach.steps" :key="i" class="list-item list-item--stacked">
          <input v-model="item.title" placeholder="Adım başlığı" />
          <textarea v-model="item.text" rows="2" placeholder="Açıklama" />
          <button type="button" class="remove" @click="removeItem('approach', 'steps', i)">Sil</button>
        </div>
        <button type="button" class="add" @click="addItem('approach', 'steps', { title: '', text: '' })">+ Adım Ekle</button>

        <button class="save" type="button" @click="saveSection('approach')">Kaydet</button>
        <span class="status" :class="status.approach">{{ status.approach === 'saved' ? 'Kaydedildi ✓' : status.approach === 'error' ? 'Hata oluştu' : '' }}</span>
      </section>

      <!-- PUBLICATIONS -->
      <section v-if="activeTab === 'publications'" class="panel">
        <h2>Yayınlar</h2>
        <label>Üst etiket<input v-model="content.publications.eyebrow" type="text" /></label>
        <label>Başlık<input v-model="content.publications.title" type="text" /></label>
        <label>Açıklama<textarea v-model="content.publications.lead" rows="3" /></label>
        <label>Google Scholar linki<input v-model="content.publications.scholarUrl" type="text" /></label>

        <h3>Yayın Listesi</h3>
        <div v-for="(item, i) in content.publications.items" :key="i" class="list-item list-item--stacked">
          <input v-model="item.year" placeholder="Yıl" style="max-width: 100px" />
          <textarea v-model="item.title" rows="2" placeholder="Makale başlığı" />
          <input v-model="item.venue" placeholder="Dergi adı" />
          <button type="button" class="remove" @click="removeItem('publications', 'items', i)">Sil</button>
        </div>
        <button type="button" class="add" @click="addItem('publications', 'items', { year: '', title: '', venue: '' })">+ Yayın Ekle</button>

        <button class="save" type="button" @click="saveSection('publications')">Kaydet</button>
        <span class="status" :class="status.publications">{{ status.publications === 'saved' ? 'Kaydedildi ✓' : status.publications === 'error' ? 'Hata oluştu' : '' }}</span>
      </section>

      <!-- TESTIMONIALS -->
      <section v-if="activeTab === 'testimonials'" class="panel">
        <h2>Hasta Değerlendirmeleri</h2>
        <label>Üst etiket<input v-model="content.testimonials.eyebrow" type="text" /></label>
        <label>Başlık<input v-model="content.testimonials.title" type="text" /></label>
        <label>Açıklama<textarea v-model="content.testimonials.lead" rows="3" /></label>
        <label>Puan (örn. 5/5)<input v-model="content.testimonials.rating" type="text" /></label>
        <label>Puan açıklaması<input v-model="content.testimonials.ratingLabel" type="text" /></label>
        <label>Değerlendirme platformu linki<input v-model="content.testimonials.ratingUrl" type="text" /></label>

        <h3>Öne Çıkan Temalar</h3>
        <div v-for="(item, i) in content.testimonials.themes" :key="i" class="list-item list-item--stacked">
          <input v-model="item.title" placeholder="Tema başlığı" />
          <textarea v-model="item.text" rows="2" placeholder="Açıklama" />
          <button type="button" class="remove" @click="removeItem('testimonials', 'themes', i)">Sil</button>
        </div>
        <button type="button" class="add" @click="addItem('testimonials', 'themes', { title: '', text: '' })">+ Tema Ekle</button>

        <button class="save" type="button" @click="saveSection('testimonials')">Kaydet</button>
        <span class="status" :class="status.testimonials">{{ status.testimonials === 'saved' ? 'Kaydedildi ✓' : status.testimonials === 'error' ? 'Hata oluştu' : '' }}</span>
      </section>

      <!-- CONTACT -->
      <section v-if="activeTab === 'contact'" class="panel">
        <h2>İletişim</h2>
        <label>Üst etiket<input v-model="content.contact.eyebrow" type="text" /></label>
        <label>Başlık<input v-model="content.contact.title" type="text" /></label>
        <label>Açıklama<textarea v-model="content.contact.lead" rows="2" /></label>
        <label>Görev yeri (kurum adı)<input v-model="content.contact.workplaceName" type="text" /></label>
        <label>Görev yeri (bölüm)<input v-model="content.contact.workplaceDept" type="text" /></label>
        <label>Adres<input v-model="content.contact.address" type="text" /></label>
        <label>Telefon (görünen)<input v-model="content.contact.phoneDisplay" type="text" /></label>
        <label>Telefon (arama linki, örn. +902123237075)<input v-model="content.contact.phoneHref" type="text" /></label>
        <label>Randevu notu<input v-model="content.contact.appointmentNote" type="text" /></label>
        <label>Instagram kullanıcı adı<input v-model="content.contact.instagramHandle" type="text" /></label>
        <label>Instagram linki<input v-model="content.contact.instagramUrl" type="text" /></label>
        <label>Harita gömme linki (embed src)<input v-model="content.contact.mapEmbedSrc" type="text" /></label>
        <label>Google Haritalar linki<input v-model="content.contact.mapUrl" type="text" /></label>

        <button class="save" type="button" @click="saveSection('contact')">Kaydet</button>
        <span class="status" :class="status.contact">{{ status.contact === 'saved' ? 'Kaydedildi ✓' : status.contact === 'error' ? 'Hata oluştu' : '' }}</span>
      </section>

      <!-- JOURNAL -->
      <section v-if="activeTab === 'journal'" class="panel">
        <h2>Blog Yazıları</h2>
        <label>Üst etiket<input v-model="content.journal.eyebrow" type="text" /></label>
        <label>Başlık<input v-model="content.journal.title" type="text" /></label>

        <h3>Yazılar</h3>
        <div v-for="(item, i) in content.journal.posts" :key="i" class="list-item list-item--stacked">
          <input v-model="item.date" placeholder="Tarih (örn. 12 Haziran 2026)" />
          <input v-model="item.title" placeholder="Yazı başlığı" />
          <textarea v-model="item.excerpt" rows="2" placeholder="Kısa özet" />
          <button type="button" class="remove" @click="removeItem('journal', 'posts', i)">Sil</button>
        </div>
        <button type="button" class="add" @click="addItem('journal', 'posts', { date: '', title: '', excerpt: '' })">+ Yazı Ekle</button>

        <button class="save" type="button" @click="saveSection('journal')">Kaydet</button>
        <span class="status" :class="status.journal">{{ status.journal === 'saved' ? 'Kaydedildi ✓' : status.journal === 'error' ? 'Hata oluştu' : '' }}</span>
      </section>

      <!-- FOOTER -->
      <section v-if="activeTab === 'footer'" class="panel">
        <h2>Footer</h2>
        <label>Slogan<input v-model="content.footer.tagline" type="text" /></label>
        <label>Yasal metin<textarea v-model="content.footer.legal" rows="3" /></label>

        <button class="save" type="button" @click="saveSection('footer')">Kaydet</button>
        <span class="status" :class="status.footer">{{ status.footer === 'saved' ? 'Kaydedildi ✓' : status.footer === 'error' ? 'Hata oluştu' : '' }}</span>
      </section>
    </main>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.admin {
  min-height: 100vh;
  display: flex;
  background: #f4f2ec;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
  color: #1b1c19;
}

.admin__sidebar {
  width: 260px;
  flex-shrink: 0;
  background: #10130f;
  color: #f4f2ec;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
}

.admin__brand {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #7fd9c2;
  padding: 0 12px 20px;
}

.admin__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  overflow-y: auto;
}

.admin__nav-item {
  text-align: left;
  padding: 10px 12px;
  border-radius: 6px;
  border: 0;
  background: transparent;
  color: rgba(244, 242, 236, 0.75);
  font-size: 14px;
  cursor: pointer;
}

.admin__nav-item:hover {
  background: rgba(255, 255, 255, 0.06);
}

.admin__nav-item--active {
  background: #0f6f5c;
  color: #fff;
}

.admin__sidebar-footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 16px;
  border-top: 1px solid rgba(244, 242, 236, 0.15);
}

.admin__view-site,
.admin__logout {
  font-size: 13px;
  color: rgba(244, 242, 236, 0.75);
  text-align: left;
  background: none;
  border: 0;
  cursor: pointer;
  padding: 6px 12px;
}

.admin__logout:hover,
.admin__view-site:hover {
  color: #fff;
}

.admin__content {
  flex: 1;
  padding: 40px;
  max-width: 760px;
}

.panel {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.panel h2 {
  font-size: 22px;
  margin-bottom: 6px;
}

.panel h3 {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6f6d66;
  margin-top: 14px;
}

.panel label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  color: #6f6d66;
}

.panel input,
.panel textarea {
  font-family: inherit;
  font-size: 14.5px;
  padding: 10px 12px;
  border: 1px solid #e4dfd5;
  border-radius: 4px;
  color: #1b1c19;
  background: #fff;
  resize: vertical;
}

.panel input:focus,
.panel textarea:focus {
  outline: none;
  border-color: #0f6f5c;
}

.list-item {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 10px;
  background: #fff;
  border: 1px solid #e4dfd5;
  border-radius: 6px;
}

.list-item--stacked {
  flex-direction: column;
  align-items: stretch;
}

.list-item input,
.list-item textarea {
  flex: 1;
}

.add,
.save {
  align-self: flex-start;
  padding: 10px 18px;
  border-radius: 4px;
  border: 0;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
}

.add {
  background: #e7efec;
  color: #0f6f5c;
}

.save {
  background: #0f6f5c;
  color: #fff;
  margin-top: 10px;
}

.save:hover {
  background: #0b4f42;
}

.remove {
  align-self: flex-end;
  background: none;
  border: 0;
  color: #973547;
  font-size: 12.5px;
  cursor: pointer;
}

.status {
  font-size: 13px;
  color: #0f6f5c;
}

.status.error {
  color: #973547;
}

.photo-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.photo-preview {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #e4dfd5;
}
</style>
