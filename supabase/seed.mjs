// Bu script, sitede halihazırda yer alan gerçek içeriği Supabase 'sections' tablosuna yükler.
// Çalıştırma: node --env-file=.env supabase/seed.mjs

import { createClient } from '@supabase/supabase-js'

const url = process.env.NUXT_SUPABASE_URL
const serviceKey = process.env.NUXT_SUPABASE_SERVICE_KEY

if (!url || !serviceKey) {
  console.error('NUXT_SUPABASE_URL ve NUXT_SUPABASE_SERVICE_KEY .env içinde tanımlı olmalı.')
  process.exit(1)
}

const supabase = createClient(url, serviceKey)

const sections = {
  hero: {
    kicker: 'Op. Dr. Kutalmış Albayrak',
    titleLine1: 'Hareketin özgürlüğü,',
    titleLine2: 'güvenilir ellerde.',
    subtitle: 'Ortopedi ve Travmatoloji — Omuz ve Dirsek Cerrahisi Uzmanı, İstanbul',
    ctaPrimaryLabel: 'İletişime Geç',
    ctaSecondaryLabel: 'Hakkımda'
  },
  about: {
    eyebrow: 'Hakkımda',
    title: 'Her hasta, kendi hikâyesinin baş rolündedir.',
    text: 'Ortopedi ve Travmatoloji uzmanıyım; özellikle omuz ve dirsek cerrahisi, spor yaralanmaları ve artroskopik cerrahi alanında çalışıyorum. İyileşme sürecini kısaltmak için mümkün olan her durumda minimal invaziv artroskopik teknikleri tercih ediyor, güncel biyolojik tedavi yöntemlerini yakından takip ediyorum. 2018\'den bu yana İstanbul Tabip Odası basketbol takımının teknik direktörlüğünü de sürdürüyorum.',
    photoUrl: '/images/kutalmis-albayrak.jpg',
    timeline: [
      { year: '2006–2012', text: 'İstanbul Üniversitesi İstanbul Tıp Fakültesi\'nde tıp eğitimi' },
      { year: '2012–2017', text: 'Metin Sabancı Baltalimanı Kemik Hastalıkları Eğitim ve Araştırma Hastanesi\'nde Ortopedi ve Travmatoloji ihtisası' },
      { year: '2017–2019', text: 'Baltalimanı Artroskopi ve Spor Cerrahisi Kliniği\'nde çalıştı' },
      { year: '2019', text: 'St. Gallen, İsviçre\'de Prof. Dr. Bernhard Jost ve Prof. Dr. Christian Spross mentorluğunda 6 aylık Omuz ve Dirsek Cerrahisi fellowship\'i' },
      { year: '2019–2022', text: 'Haseki Eğitim ve Araştırma Hastanesi, Van Eğitim ve Araştırma Hastanesi ve Özel İstanbul Cerrahi Hastanesi\'nde görev yaptı' },
      { year: '2023–halen', text: 'Metin Sabancı Baltalimanı Kemik Hastalıkları Eğitim ve Araştırma Hastanesi, Ortopedi ve Travmatoloji Kliniği' }
    ]
  },
  expertise: {
    eyebrow: 'Uzmanlık Alanları',
    title: 'Odaklandığım cerrahi branşlar',
    lead: 'Her vaka kendi özelinde değerlendirilir; tanı, ameliyat ve iyileşme sürecinin tamamında hastayla birlikte ilerleyen bir tedavi planı oluşturulur.',
    items: [
      { title: 'Omuz Cerrahisi ve Artroskopisi', text: 'Omuz instabilitesi, rotator manşet yırtıkları ve sıkışma sendromlarında artroskopik (kapalı) cerrahi teknikler.' },
      { title: 'Dirsek Cerrahisi', text: 'Dirsek kırık-çıkıkları, instabilite ve kompleks travma sonrası rekonstrüksiyonda ileri düzey cerrahi deneyim.' },
      { title: 'Spor Yaralanmaları', text: 'Ön çapraz bağ (ÖÇB) ve menisküs yırtıklarında artroskopik onarım ile sporcuların sahaya güvenli dönüşü.' },
      { title: 'Diz ve Kalça Protez Cerrahisi', text: 'İleri düzey artroz vakalarında protez cerrahisi ve karmaşık revizyon operasyonları.' },
      { title: 'Kırık ve Travma Cerrahisi', text: 'Uzun kemik kırıklarında intramedüller çivileme ve plak-vida sistemleriyle güncel tedavi yöntemleri.' },
      { title: 'Ayak ve Ayak Bileği Cerrahisi', text: 'Hallux valgus ve aşil tendon onarımı başta olmak üzere ayak-ayak bileği bölgesi cerrahi tedavileri.' }
    ]
  },
  stats: {
    items: [
      { value: '9+', label: 'Yıl Ortopedi ve Travmatoloji Uzmanlığı' },
      { value: '6 Ay', label: 'İsviçre\'de Omuz-Dirsek Cerrahisi Fellowship\'i' },
      { value: '10+', label: 'Uluslararası İndeksli Bilimsel Yayın' },
      { value: '5', label: 'Ulusal ve Uluslararası Dernek Üyeliği' }
    ]
  },
  approach: {
    eyebrow: 'Yaklaşımım',
    title: 'Şeffaf, sakin ve hasta odaklı bir süreç',
    lead: 'Cerrahi bir karar genellikle hastanın hayatında endişeyle anılan bir dönemdir. Bu süreci olabildiğince anlaşılır ve öngörülebilir kılmak için her aşamada açık iletişimi önceliklendiriyorum.',
    steps: [
      { title: 'Değerlendirme', text: 'İlk muayenede şikayetiniz, görüntüleme tetkikleriniz (MR/röntgen) birlikte incelenir, sorularınıza zaman ayrılır.' },
      { title: 'Tedavi Planı', text: 'Konservatif tedavi mi yoksa cerrahi mi gerektiği netleştirilir; alternatif yöntemler açıkça anlatılır.' },
      { title: 'Ameliyat', text: 'Mümkün olan her durumda minimal invaziv artroskopik teknikler tercih edilerek iyileşme süresi kısaltılır.' },
      { title: 'Rehabilitasyon', text: 'Fizyoterapi ve kontrollerle desteklenen bir süreçle günlük yaşama ve spora güvenli dönüş hedeflenir.' }
    ]
  },
  publications: {
    eyebrow: 'Yayınlar & Akademik Çalışmalar',
    title: 'Bilimsel katkılar',
    lead: 'Klinik pratiğinin yanı sıra akademik çalışmalarını sürdürerek uluslararası indeksli dergilerde ortopedi ve travmatoloji literatürüne katkıda bulunuyor.',
    scholarUrl: 'https://scholar.google.com/citations?user=_pwBOwsAAAAJ&hl=tr',
    items: [
      { year: '2025', title: 'Long-term clinical comparison of three different femoral stems in Total Hip Arthroplasty with femoral shortening in patients with high-riding hips', venue: 'Journal of Orthopaedic Surgery and Research' },
      { year: '2025', title: 'The Montecranon classification — a comprehensive treatment strategy for complex proximal ulna fracture dislocations', venue: 'JSES International' },
      { year: '2025', title: 'Increased lateral, but not medial, posterior tibial slope is associated with early graft failure following anterior cruciate ligament reconstruction', venue: 'BMC Musculoskeletal Disorders' },
      { year: '2023', title: 'Effect of fracture level on the residual fracture gap during tibial intramedullary nailing for tibial shaft fractures', venue: 'SICOT-J' },
      { year: '2022', title: 'Overlapping repair and epitenon healing are more stable biomechanically than side to side repair and endotenon healing in achilles tendon lengthening with Z plasty', venue: 'Foot and Ankle Surgery' },
      { year: '2021', title: 'Leaving the stable ramp lesion unrepaired does not negatively affect clinical and functional outcomes as well as return to sports rates after ACL reconstruction', venue: 'Knee Surgery, Sports Traumatology, Arthroscopy' },
      { year: '2020', title: 'Early clinical and radiographic results of fixation with the TightRope device for Rockwood type V acromioclavicular joint dislocation: a retrospective review of 15 patients', venue: 'Acta Orthopaedica et Traumatologica Turcica' }
    ]
  },
  testimonials: {
    eyebrow: 'Hasta Değerlendirmeleri',
    title: 'Hasta değerlendirmelerinde öne çıkanlar',
    lead: 'Aşağıdaki başlıklar, doktor randevu platformlarında paylaşılan hasta değerlendirmelerinde tekrar eden ortak temaları özetlemektedir; birebir alıntı değildir.',
    rating: '5/5',
    ratingLabel: 'DoktorTakvimi.com üzerinde paylaşılan hasta puanı',
    ratingUrl: 'https://www.doktortakvimi.com/kutalmis-albayrak/ortopedi-ve-travmatoloji/istanbul',
    themes: [
      { title: 'Detaylı Bilgilendirme', text: 'Hasta değerlendirmelerinde en sık öne çıkan konu, ameliyat öncesi süreç ve tedavi alternatifleri hakkında yapılan ayrıntılı bilgilendirme.' },
      { title: 'Yakın Ameliyat Sonrası Takip', text: 'Kontrol randevularında gösterilen özen ve erişilebilirlik, hastalar tarafından sıkça vurgulanan bir diğer nokta.' },
      { title: 'Minimal İnvaziv Yaklaşım', text: 'Artroskopik tekniklerin iyileşme sürecini kısaltmasına dair olumlu geri bildirimler yer alıyor.' },
      { title: 'Rehabilitasyon Sürecinde Yönlendirme', text: 'Özellikle spor yaralanması hastaları, sahaya/güncel yaşama dönüş sürecindeki yönlendirmeyi değerli buluyor.' }
    ]
  },
  contact: {
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
  },
  journal: {
    eyebrow: 'Sağlık Notları',
    title: 'Güncel yazılar',
    posts: [
      { date: '12 Haziran 2026', title: 'Omuz artroskopisi sonrası iyileşme süreci nasıl işler?', excerpt: 'Ameliyat sonrası ilk haftalar, fizyoterapi takvimi ve günlük yaşama dönüş hakkında bilinmesi gerekenler.' },
      { date: '3 Mayıs 2026', title: 'Ön çapraz bağ (ÖÇB) yırtığında ameliyat şart mı?', excerpt: 'Konservatif tedavi ile cerrahi arasındaki karar sürecini etkileyen faktörler.' },
      { date: '21 Mart 2026', title: 'Donuk omuz (frozen shoulder) ile omuz sıkışma sendromu arasındaki fark', excerpt: 'Benzer belirtilere sahip bu iki durumun tanı ve tedavi yaklaşımındaki farklılıklar.' }
    ]
  },
  footer: {
    tagline: 'Hareketin özgürlüğü, güvenilir ellerde.',
    legal: 'Bu site bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz; randevu için resmi hastane kanallarını (MHRS / Alo 182) kullanınız.'
  }
}

const rows = Object.entries(sections).map(([id, data]) => ({ id, data }))

const { error } = await supabase.from('sections').upsert(rows)

if (error) {
  console.error('Seed başarısız:', error.message)
  process.exit(1)
}

console.log(`✔ ${rows.length} bölüm başarıyla yüklendi:`, rows.map((r) => r.id).join(', '))
