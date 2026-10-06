<script setup lang="ts">
// Tedaviler: gruplara ayrılmış tedavi listesi. Her grubun "text" alanında her satır bir tedavidir
// (admin panelinde düzenlemesi kolay olsun diye). Not: Bu liste geçici örnek içeriktir; doktordan
// gelecek metinlerle admin panelinden değiştirilecektir.
const fallback = {
  eyebrow: 'Tedaviler',
  title: 'Tedavi ve cerrahi girişimler',
  lead: 'Aşağıdaki liste, muayene ve tedavisi yapılan başlıca hastalıkları ve cerrahi girişimleri özetler. Her hasta için en uygun tedavi; muayene ve görüntüleme sonrasında, hastayla birlikte belirlenir.',
  groups: [
    {
      title: 'Omuz',
      text: 'Rotator manşet yırtığı onarımı (artroskopik)\nOmuz çıkığı ve instabilite cerrahisi (Bankart onarımı)\nLatarjet ameliyatı\nOmuz sıkışma sendromu tedavisi\nDonuk omuz (adeziv kapsülit) tedavisi\nKalsifik tendinit tedavisi\nAkromiyoklaviküler eklem çıkığı tedavisi\nSLAP lezyonu ve biseps tendon cerrahisi\nOmuz protezi ve ters omuz protezi'
    },
    {
      title: 'Dirsek',
      text: 'Tenisçi dirseği (lateral epikondilit) tedavisi\nGolfçü dirseği (medial epikondilit) tedavisi\nDirsek artroskopisi\nDirsek kırık ve çıkıklarının cerrahi tedavisi\nDirsek instabilitesi ve bağ rekonstrüksiyonu\nDirsek sertliği (kontraktür) tedavisi\nDistal biseps tendon yırtığı onarımı'
    },
    {
      title: 'Diz ve Spor Yaralanmaları',
      text: 'Ön çapraz bağ (ÖÇB) rekonstrüksiyonu\nMenisküs onarımı ve kısmi menisektomi\nDiz artroskopisi\nKıkırdak hasarı tedavileri\nDiz kapağı (patella) instabilitesi tedavisi'
    },
    {
      title: 'Protez Cerrahisi',
      text: 'Total diz protezi\nTotal kalça protezi\nRevizyon protez cerrahisi'
    },
    {
      title: 'Kırık ve Travma',
      text: 'Uzun kemik kırıklarında intramedüller çivileme\nPlak-vida ile kırık tespiti\nKaynamama ve kötü kaynama tedavisi'
    },
    {
      title: 'Ayak ve Ayak Bileği',
      text: 'Halluks valgus (bunyon) cerrahisi\nAşil tendon yırtığı onarımı\nAyak bileği artroskopisi\nAyak bileği bağ yaralanmaları tedavisi'
    }
  ]
}

const treatments = await useSection('treatments', fallback)
const { t, pathTo } = useLang()

const lines = (text: string) =>
  text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
</script>

<template>
  <section class="treatments">
    <p class="t-text-big wrap-text">{{ treatments.lead }}</p>

    <div class="wrap-list block">
      <div v-for="group in treatments.groups" :key="group.title" class="treatments__group">
        <h2 class="result__title t-result-title">{{ group.title }}</h2>
        <ul class="dot-list t-list treatments__list">
          <li v-for="item in lines(group.text)" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="center block">
      <NuxtLink :to="pathTo('contact')" class="btn">{{ t('bookAppointment') }}</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.treatments__group + .treatments__group {
  margin-top: 56px;
}

.treatments__list {
  margin-top: 22px;
  columns: 2;
  column-gap: 70px;
}

.treatments__list li {
  break-inside: avoid;
}

@media (max-width: 743px) {
  .treatments__list {
    columns: 1;
  }
}
</style>
