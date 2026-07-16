# Yapılanlar

Bu doküman, Op. Dr. Kutalmış Albayrak kişisel web sitesi taslağının nasıl oluşturulduğunu adım adım anlatır.

## 1. Referans site incelendi

[instrosenberg.ch](https://instrosenberg.ch/) sitesinin teknolojisi ve yapısı analiz edildi:

- **Teknoloji**: Vue tabanlı SSR framework (Nuxt), Swiper kütüphanesi ile carousel, Google Fonts + özel font servisi (typography.com/Typekit), özel CSS grid sistemi.
- **Yapı**: Sabit (fixed) header + burger menü ile açılan tam ekran mobil navigasyon, büyük serif başlıklı tam ekran hero bölümü, ardından gelen içerik bölümleri (misyon, akademik programlar, yetenek, bakım, girişimler), carousel ile testimonial/duyuru alanı, ve çok sütunlu footer.
- **Tasarım dili**: Zarif serif başlık fontu + sade sans-serif gövde fontu, yeşil vurgu rengi, bol boşluk kullanan minimal/prestijli bir görünüm.

Bu yapı temel alınarak, Kutalmış Albayrak için birebir kopya olmayan, Türkçe ve doktor bağlamına uyarlanmış bir taslak hazırlandı.

## 2. Proje iskeleti kuruldu

- `npx nuxi init` ile **Nuxt 4** (Vue 3 SSR framework) projesi oluşturuldu — referans sitedeki Nuxt/Vue teknolojisiyle aynı aile.
- Paket yöneticisi: npm.
- `swiper` paketi kuruldu (hasta yorumları carousel'i için — referans sitenin de kullandığı kütüphane).

## 3. Tasarım sistemi (`app/assets/css/main.css`)

- CSS reset.
- Renk paleti: sıcak krem arkaplan (`--color-bg`), koyu yeşil vurgu rengi (`--color-accent: #0f6f5c`), koyu tema (dark mode) değişkenleri de tanımlandı (ileride eklenebilir).
- Tipografi: Başlıklar için **Cormorant Garamond** (serif, referans sitedeki "Requiem Display" hissiyatına yakın), gövde metni için **Inter** (sans-serif). Fontlar Google Fonts üzerinden `nuxt.config.ts` içindeki `<link>` etiketleriyle yükleniyor (referans site de aynı yöntemi — Google Fonts + preconnect — kullanıyor).
- Ortak yardımcı sınıflar: `.container`, `.section`, `.eyebrow`, `.section-title`, `.btn`, `.link-underline` vb.

## 4. Bileşenler oluşturuldu

**Layout:**
- `app/components/layout/TheHeader.vue` — Scroll'da saydamdan opak arkaplana geçen sabit header, masaüstü menü, mobilde tam ekran açılan burger menü.
- `app/components/layout/TheFooter.vue` — Marka, gezinme linkleri, iletişim bilgileri, sosyal medya linkleri, yasal metin.

**Sayfa bölümleri (`app/components/sections/`):**
1. `HeroSection.vue` — Tam ekran giriş, başlık, alt başlık, "Randevu Al" / "Hakkımda" butonları.
2. `AboutSection.vue` — Hakkımda metni + eğitim/kariyer zaman çizelgesi (referans sitedeki "Mission" bölümünün karşılığı).
3. `ExpertiseSection.vue` — 6 uzmanlık alanı kartı (referans sitedeki "Academics" bölümünün karşılığı).
4. `StatsSection.vue` — Deneyim yılı, operasyon sayısı gibi rakamsal göstergeler (referans sitedeki "Talent" bölümünün karşılığı).
5. `ApproachSection.vue` — Hasta bakım süreci 4 adımda anlatılıyor (referans sitedeki "Care" bölümünün karşılığı).
6. `PublicationsSection.vue` — Bilimsel yayın/kongre listesi (referans sitedeki "Ventures" bölümünün karşılığı).
7. `TestimonialsSection.vue` — **Swiper** ile kaydırmalı hasta yorumları carousel'i.
8. `JournalSection.vue` — Blog/sağlık notları teaser kartları (referans sitedeki "Journal" bölümünün karşılığı).
9. `ContactSection.vue` — Adres, telefon, e-posta, harita yer tutucusu ve statik randevu formu.

Tüm metinler **örnek/dummy içerik** olarak Türkçe yazıldı; ileride gerçek bilgilerle değiştirilecek.

## 5. Sayfa ve uygulama birleştirildi

- `app/pages/index.vue` — Tüm bölüm bileşenlerini sırayla dizen ana sayfa.
- `app/app.vue` — Header + `<NuxtPage />` + Footer yapısı.
- `nuxt.config.ts` — Bileşen otomatik-içe-aktarma önekleri kapatıldı (`pathPrefix: false`), sayfa başlığı/meta bilgileri ve font linkleri eklendi.

## 6. Favicon

- `public/favicon.svg` — "KA" baş harfleriyle basit bir monogram favicon oluşturuldu.

## 7. Test edildi

- `npm run dev` ile geliştirme sunucusu çalıştırıldı, ana sayfa `curl` ile çekilerek SSR çıktısının tüm bölümleri (header, hero, hakkımda, uzmanlık, istatistik, yaklaşım, yayınlar, testimonial/swiper, blog, iletişim, footer) doğru şekilde render ettiği doğrulandı, konsol/derleme hatası olmadığı teyit edildi.

## 8. Üst menü hizalama düzeltmesi

Playwright ile alınan ekran görüntülerinde üst menüdeki "Uzmanlık Alanları" ve "Hasta Yorumları" gibi iki kelimeli başlıkların satır kırıp diğer başlıklarla aynı hizada durmadığı görüldü. Kök neden: flex öğeleri daralırken bu başlıklar iki satıra bölünüyor, tek kelimelik başlıklar bölünmeden kalıyordu. Ayrıca 1180–1320px arası genişliklerde "İletişim" linki "Randevu Al" butonuyla çakışıyordu.

Düzeltme (`TheHeader.vue`):
- `.nav-link` için `white-space: nowrap` ve `flex-shrink: 0` eklendi (satır kırılmasını engeller).
- `.brand` ve `.header__actions` için `flex-shrink: 0` eklendi (logo ve buton daralmasın).
- Masaüstü menü/CTA/burger kırılma noktası `1180px`'den `1320px`'e çekildi; bu genişlikten sonra konteynerin iç boşluğu (gutter) sabitlendiği için menünün tüm başlıkları çakışmadan sığıyor.

1200px, 1320px ve 1440px genişliklerde Playwright ile tekrar ekran görüntüsü alınarak düzeltme doğrulandı.

## 9. Web araştırmasıyla gerçek içerik entegrasyonu

Dummy içerik, web'de yapılan geniş bir araştırma sonucunda bulunan **doğrulanabilir, gerçek** bilgilerle değiştirildi. Kullanılan kaynaklar:

- [turkhekimleri.com](https://www.turkhekimleri.com/opdrkutalmisalbayrak/hakkinda) — eğitim/kariyer özeti
- [doktortakvimi.com](https://www.doktortakvimi.com/kutalmis-albayrak/ortopedi-ve-travmatoloji/istanbul) — kariyer geçmişi, hasta puanı (5/5, 8 değerlendirme), profil fotoğrafı
- [doktortavsiyesi.net](https://www.doktortavsiyesi.net/doktor/kutalmis-albayrak/) — uzmanlık alanları listesi
- Google araması üzerinden kutalmisalbayrak.com'un önbelleğe alınmış özeti — St. Gallen (İsviçre) fellowship detayı (not: bu alan adı şu anda bağlanmamış bir Wix hatası döndürüyor, canlı içeriğe doğrudan erişilemedi)
- [Google Scholar profili](https://scholar.google.com/citations?user=_pwBOwsAAAAJ&hl=tr) — kurumu (Baltalimanı EAH) doğrulanmış, gerçek yayın listesi
- [baltalimanieah.saglik.gov.tr](https://baltalimanieah.saglik.gov.tr/) ve ilgili hastane dizinleri — resmi adres/telefon
- [instagram.com/drkutalmisalbayrak](https://www.instagram.com/drkutalmisalbayrak/) — doğrulanan sosyal medya hesabı

**Güncellenen gerçek bilgiler:**
- Uzmanlık: Genel Cerrahi değil, **Ortopedi ve Travmatoloji** — alt dalı **Omuz ve Dirsek Cerrahisi**, spor yaralanmaları, artroskopi.
- Eğitim/kariyer: İstanbul Tıp Fakültesi (2006–2012), Baltalimanı Kemik Hastalıkları EAH'de ihtisas (2012–2017), Artroskopi ve Spor Cerrahisi (2017–2019), St. Gallen/İsviçre'de Prof. Dr. Bernhard Jost ve Prof. Dr. Christian Spross ile omuz-dirsek fellowship'i (2019), Haseki/Van/Özel İstanbul Cerrahi Hastanesi (2019–2022), 2023'ten beri tekrar Baltalimanı EAH.
- Üyelikler: TOTBİD, TOTDER, TUSYAD, Türk Omuz Dirsek Cerrahisi Derneği, SECEC.
- Yayınlar (`PublicationsSection.vue`): Google Scholar'da doğrulanan 7 gerçek makale (Knee Surgery Sports Traumatology Arthroscopy, Acta Orthopaedica et Traumatologica Turcica, SICOT-J, BMC Musculoskeletal Disorders, Foot and Ankle Surgery, Journal of Orthopaedic Surgery and Research, JSES International) başlık/dergi/yıl bilgileriyle eklendi; profilin tamamına giden bir Google Scholar linki eklendi.
- Fotoğraf: `doktortakvimi.com` üzerindeki profil fotoğrafı indirilip `public/images/kutalmis-albayrak.jpg` olarak eklendi ve `AboutSection.vue`'daki yer tutucunun yerine konuldu.
- İletişim: Uydurma adres/telefon/e-posta kaldırıldı; yerine görev yaptığı **resmi hastane adresi ve santral/randevu telefonu** (Baltalimanı Mah. Rumeli Hisarı Cad. No:57/1, Sarıyer/İstanbul — 0212 323 70 75) ile MHRS/Alo 182 randevu kanalları eklendi.

**Sorumluluk gereği bilinçli olarak yapılMAYAN şeyler:**
- **Hasta yorumları uydurulmadı.** Gerçek, birebir hasta yorumu metinleri web'den güvenilir şekilde çıkarılamadığından (ve isim/baş harfle sahte kişi uydurmak yanıltıcı olacağından), `TestimonialsSection.vue` sahte alıntılar yerine doktortakvimi.com'daki **doğrulanmış toplu puanı (5/5, 8 değerlendirme)** ve yorumlarda tekrar eden **genel temaları** (isimsiz, alıntı olmayan) gösterecek şekilde yeniden tasarlandı; platforma giden bir link eklendi.
- **Özel telefon/e-posta uydurulmadı.** Doktorun kişisel/klinik telefonu veya e-postası kamuya açık, doğrulanabilir bir kaynakta bulunamadı; yalnızca resmi kurum hattı kullanıldı.
- `JournalSection.vue`'daki 3 blog yazısı **gerçek yayınlanmış yazılar değildir** — konuları uzmanlık alanına uyacak şekilde (omuz artroskopisi, ÖÇB, donuk omuz) güncellendi ama içerik hâlâ örnek/illüstratif niteliktedir.

**Dikkat edilmesi gereken noktalar:**
- ⚠️ Profil fotoğrafı üçüncü taraf bir doktor dizini sitesinden alınmıştır; canlıya almadan önce doktorun kendisinden orijinal/yüksek çözünürlüklü bir dosya ve kullanım onayı alınması önerilir.
- ⚠️ kutalmisalbayrak.com alan adı şu anda çalışmıyor (Wix bağlantı hatası); bu, sahibinin kendi sitesinin domain bağlantısını yenilemesi gerektiğine işaret ediyor olabilir.
- Playwright ile ekran görüntüleri alınarak Hakkımda, Uzmanlık Alanları, İstatistikler, Yayınlar, Hasta Değerlendirmeleri, İletişim ve Footer bölümlerinin doğru render edildiği görsel olarak doğrulandı.

## Sonraki adımlar (kullanıcıyla birlikte yapılacak)

- [ ] Doktorun kendisiyle teyit: biyografideki tarihler/kurumlar, üyelikler ve yayın listesinin güncelliği.
- [ ] Orijinal, yüksek çözünürlüklü profil fotoğrafı ve klinik/ameliyathane görselleri temin etmek.
- [ ] Gerçek harita entegrasyonu (Google Maps embed).
- [ ] İletişim formunu gerçek bir gönderim mekanizmasına (e-posta servisi veya backend) bağlamak.
- [ ] İzin alınmış gerçek hasta yorumları varsa (kimlik/gizlilik onayıyla) `TestimonialsSection.vue`'a eklemek.
- [ ] Gerekirse çoklu dil desteği (referans sitede olduğu gibi) eklemek.
- [ ] Canlıya almadan önce `npm run build` ile prodüksiyon derlemesini test etmek ve bir barındırma servisine (Vercel, Netlify, vb.) dağıtmak.
