// Site iki dilli: Türkçe varsayılan (/, /hakkimda …), İngilizce /en altında (/en, /en/about …).
export type Locale = 'tr' | 'en'

export type PageKey = 'home' | 'about' | 'expertise' | 'approach' | 'publications' | 'reviews' | 'contact'

export const pagePaths: Record<Locale, Record<PageKey, string>> = {
  tr: {
    home: '/',
    about: '/hakkimda',
    expertise: '/uzmanlik',
    approach: '/yaklasim',
    publications: '/yayinlar',
    reviews: '/yorumlar',
    contact: '/iletisim'
  },
  en: {
    home: '/en',
    about: '/en/about',
    expertise: '/en/expertise',
    approach: '/en/approach',
    publications: '/en/publications',
    reviews: '/en/reviews',
    contact: '/en/contact'
  }
}

// Ana menü sırası (referans sitedeki gibi her başlık kendi sayfasına gider)
export const navOrder: PageKey[] = ['about', 'expertise', 'approach', 'publications', 'reviews', 'contact']

export const ui = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.expertise': 'Uzmanlık',
    'nav.approach': 'Yaklaşım',
    'nav.publications': 'Yayınlar',
    'nav.reviews': 'Yorumlar',
    'nav.contact': 'İletişim',
    'a11y.mainMenu': 'Ana menü',
    'a11y.openMenu': 'Menüyü aç',
    'a11y.closeMenu': 'Menüyü kapat',
    'a11y.scrollDown': 'Aşağı kaydır',
    'a11y.home': 'Ana sayfa',
    'a11y.loading': 'Yükleniyor',
    'a11y.language': 'Dil seçimi',
    'doctor': 'Doç. Dr. Kutalmış Albayrak',
    'bookAppointment': 'Randevu Al',
    'readMore': 'Devamını oku',
    'resume': 'Özgeçmiş',
    'journey.first': 'Akademik',
    'journey.second': 'Yolculuk',
    'byNumbers': 'Rakamlarla.',
    'contactLabel': 'İletişim:',
    'selectedPublications': 'Seçilmiş yayınlar:',
    'allPublications': 'Tüm yayınlar — Google Scholar',
    'viewAllReviews': 'Tüm değerlendirmeleri görüntüle',
    'contact.workplace': 'Görev yeri',
    'contact.address': 'Adres',
    'contact.phone': 'Randevu hattı',
    'contact.social': 'Sosyal medya',
    'contact.openMap': "Google Haritalar'da aç",
    'contact.mapTitle': 'Konum haritası',
    'contact.call': 'Randevu için arayın',
    'footer.otherProfiles': 'Diğer profiller:',
    'footer.rights': 'tüm hakları saklıdır.',
    'meta.title': 'Doç. Dr. Kutalmış Albayrak | Ortopedi ve Travmatoloji — Omuz ve Dirsek Cerrahisi',
    'meta.description':
      "Doç. Dr. Kutalmış Albayrak — Ortopedi ve Travmatoloji uzmanı; omuz ve dirsek cerrahisi, spor yaralanmaları ve artroskopik cerrahi alanında İstanbul'da hizmet vermektedir.",
    'intro.alt': 'Doç. Dr. Kutalmış Albayrak — Omuz, Dirsek ve Spor Cerrahisi'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.expertise': 'Expertise',
    'nav.approach': 'Approach',
    'nav.publications': 'Publications',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'a11y.mainMenu': 'Main menu',
    'a11y.openMenu': 'Open menu',
    'a11y.closeMenu': 'Close menu',
    'a11y.scrollDown': 'Scroll down',
    'a11y.home': 'Home page',
    'a11y.loading': 'Loading',
    'a11y.language': 'Language',
    'doctor': 'Assoc. Prof. Dr. Kutalmış Albayrak',
    'bookAppointment': 'Book an Appointment',
    'readMore': 'Read more',
    'resume': 'Curriculum Vitae',
    'journey.first': 'Academic',
    'journey.second': 'Journey',
    'byNumbers': 'By the Numbers.',
    'contactLabel': 'Contact:',
    'selectedPublications': 'Selected publications:',
    'allPublications': 'All publications — Google Scholar',
    'viewAllReviews': 'View all reviews',
    'contact.workplace': 'Practice',
    'contact.address': 'Address',
    'contact.phone': 'Appointment line',
    'contact.social': 'Social media',
    'contact.openMap': 'Open in Google Maps',
    'contact.mapTitle': 'Location map',
    'contact.call': 'Call to book an appointment',
    'footer.otherProfiles': 'Other profiles:',
    'footer.rights': 'all rights reserved.',
    'meta.title': 'Assoc. Prof. Dr. Kutalmış Albayrak | Orthopaedics and Traumatology — Shoulder and Elbow Surgery',
    'meta.description':
      'Assoc. Prof. Dr. Kutalmış Albayrak — specialist in Orthopaedics and Traumatology focusing on shoulder and elbow surgery, sports injuries and arthroscopic surgery in Istanbul.',
    'intro.alt': 'Assoc. Prof. Dr. Kutalmış Albayrak — Shoulder, Elbow and Sports Surgery'
  }
} as const

export type UiKey = keyof (typeof ui)['tr']

export function localeFromPath(path: string): Locale {
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'tr'
}

// Bulunulan sayfanın diğer dildeki karşılığı (yoksa o dilin ana sayfası)
export function switchLocalePath(path: string, target: Locale): string {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path
  const current = localeFromPath(clean)
  const key = (Object.keys(pagePaths[current]) as PageKey[]).find((k) => pagePaths[current][k] === clean)
  return pagePaths[target][key ?? 'home']
}
