<script setup lang="ts">
const fallback = {
  eyebrow: 'Yayınlar & Akademik Çalışmalar',
  title: 'Bilimsel katkılar',
  lead: 'Klinik pratiğinin yanı sıra akademik çalışmalarını sürdürerek uluslararası indeksli dergilerde ortopedi ve travmatoloji literatürüne katkıda bulunuyor.',
  scholarUrl: 'https://scholar.google.com/citations?user=_pwBOwsAAAAJ&hl=tr',
  items: [
    {
      year: '2025',
      title: 'Long-term clinical comparison of three different femoral stems in Total Hip Arthroplasty with femoral shortening in patients with high-riding hips',
      venue: 'Journal of Orthopaedic Surgery and Research'
    },
    {
      year: '2025',
      title: 'The Montecranon classification — a comprehensive treatment strategy for complex proximal ulna fracture dislocations',
      venue: 'JSES International'
    },
    {
      year: '2025',
      title: 'Increased lateral, but not medial, posterior tibial slope is associated with early graft failure following anterior cruciate ligament reconstruction',
      venue: 'BMC Musculoskeletal Disorders'
    },
    {
      year: '2023',
      title: 'Effect of fracture level on the residual fracture gap during tibial intramedullary nailing for tibial shaft fractures',
      venue: 'SICOT-J'
    },
    {
      year: '2022',
      title: 'Overlapping repair and epitenon healing are more stable biomechanically than side to side repair and endotenon healing in achilles tendon lengthening with Z plasty',
      venue: 'Foot and Ankle Surgery'
    },
    {
      year: '2021',
      title: 'Leaving the stable ramp lesion unrepaired does not negatively affect clinical and functional outcomes as well as return to sports rates after ACL reconstruction',
      venue: 'Knee Surgery, Sports Traumatology, Arthroscopy'
    },
    {
      year: '2020',
      title: 'Early clinical and radiographic results of fixation with the TightRope device for Rockwood type V acromioclavicular joint dislocation: a retrospective review of 15 patients',
      venue: 'Acta Orthopaedica et Traumatologica Turcica'
    }
  ]
}

const { data } = await useSiteContent()
const publications = computed(() => ({ ...fallback, ...(data.value?.publications ?? {}) }))
</script>

<template>
  <section id="yayinlar" class="section publications">
    <div class="container publications__head">
      <p class="eyebrow">{{ publications.eyebrow }}</p>
      <h2 class="section-title">{{ publications.title }}</h2>
      <p class="section-lead">{{ publications.lead }}</p>
    </div>

    <div class="container">
      <ul class="publications__list">
        <li v-for="pub in publications.items" :key="pub.title" class="publications__item">
          <span class="publications__year">{{ pub.year }}</span>
          <div class="publications__body">
            <h3 class="publications__title">{{ pub.title }}</h3>
            <p class="publications__venue">{{ pub.venue }}</p>
          </div>
        </li>
      </ul>

      <a
        :href="publications.scholarUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="publications__scholar link-underline"
      >
        Google Scholar profilinde tüm yayınları görüntüle →
      </a>
    </div>
  </section>
</template>

<style scoped>
.publications__list {
  margin-top: 50px;
  border-top: 1px solid var(--color-line);
}

.publications__scholar {
  display: inline-block;
  margin-top: 32px;
  font-size: 13.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--color-accent);
}

.publications__item {
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 24px;
  padding-block: 28px;
  border-bottom: 1px solid var(--color-line);
  transition: padding-left 0.3s ease;
}

.publications__item:hover {
  padding-left: 10px;
  background: var(--color-accent-soft);
}

.publications__year {
  font-family: var(--font-display);
  font-size: 20px;
  color: var(--color-accent);
}

.publications__title {
  font-family: var(--font-display);
  font-size: clamp(19px, 2vw, 24px);
  font-weight: 500;
}

.publications__venue {
  margin-top: 8px;
  font-size: 13.5px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--color-muted);
}
</style>
