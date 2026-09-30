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

const publications = await useSection('publications', fallback)
const { t, pathTo } = useLang()
</script>

<template>
  <section class="publications">
    <p class="t-text-big wrap-text">{{ publications.lead }}</p>

    <h2 class="t-main-menu center wrap-text block">{{ t('selectedPublications') }}</h2>
    <ol class="wrap-text publications__list">
      <li v-for="item in publications.items" :key="item.title" class="publication">
        <p class="publication__year t-result-title">{{ item.year }}</p>
        <p class="publication__title t-result-text">{{ item.title }}</p>
        <p class="publication__venue t-text">{{ item.venue }}</p>
      </li>
    </ol>

    <div class="center block">
      <a :href="publications.scholarUrl" target="_blank" rel="noopener noreferrer" class="btn">
        {{ t('allPublications') }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.publications__list {
  margin-top: 56px;
}

.publication {
  padding: 26px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  text-align: center;
}

.publication:last-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.publication__year {
  color: var(--color-green);
}

.publication__title {
  margin-top: 8px;
}

.publication__venue {
  margin-top: 8px;
  font-style: italic;
}
</style>
