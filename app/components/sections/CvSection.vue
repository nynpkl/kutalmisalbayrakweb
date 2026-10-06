<script setup lang="ts">
// Özgeçmiş: Akademik Yolculuk zaman çizelgesi (veri admin panelindeki Hakkımda bölümünden gelir)
const about = await useSection('about', aboutFallback)
const { t, pathTo } = useLang()
</script>

<template>
  <section class="cv">
    <!-- Akademik Yolculuk: solda nokta ve dikey çizgi, yanında yıl, sağda başlık + açıklama kartı -->
    <div class="journey wrap-wide">
      <h2 class="t-title center journey__title">{{ t('journey.first') }} <em>{{ t('journey.second') }}</em></h2>

      <ol class="journey__list">
        <li v-for="item in about.timeline" :key="item.year + item.text" class="journey__row">
          <span class="journey__dot" aria-hidden="true" />
          <span class="journey__year">
            <span v-for="(part, j) in item.year.split('–')" :key="j" class="journey__year-part">{{ part }}{{ j < item.year.split('–').length - 1 ? '–' : '' }}</span>
          </span>
          <div class="journey__card">
            <h3 v-if="item.title" class="journey__card-title t-result-title">{{ item.title }}</h3>
            <p class="journey__card-text t-result-text">{{ item.text }}</p>
          </div>
        </li>
      </ol>
    </div>

    <div class="center block">
      <NuxtLink :to="pathTo('contact')" class="btn">{{ t('bookAppointment') }}</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
/* ---------- Akademik Yolculuk ---------- */
.journey__title em {
  font-style: italic;
  color: var(--color-green);
}

.journey__list {
  position: relative;
  margin-top: 80px;
}

/* Nokta sütunu ile yıl sütunu arasından geçen dikey çizgi */
.journey__list::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 104px;
  width: 1px;
  background: rgba(9, 134, 71, 0.45);
}

.journey__row {
  display: grid;
  grid-template-columns: 90px 110px 1fr;
  align-items: start;
  padding: 24px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.journey__dot {
  justify-self: center;
  width: 9px;
  height: 9px;
  margin-top: 13px;
  border: 1px solid var(--color-green);
  border-radius: 50%;
  background: #fff;
}

.journey__year {
  padding-top: 8px;
  padding-right: 22px;
  text-align: right;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: rgba(0, 0, 0, 0.6);
}

.journey__year-part {
  display: block;
}

.journey__card {
  padding: 22px 26px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: border-color var(--ease);
}

.journey__card:hover {
  border-color: var(--color-green);
}

.journey__card-text {
  color: rgba(0, 0, 0, 0.72);
}

.journey__card-title + .journey__card-text {
  margin-top: 8px;
}

@media (max-width: 743px) {
  .journey__list::before {
    left: 0;
  }

  .journey__row {
    grid-template-columns: 1fr;
    padding-left: 22px;
  }

  .journey__dot {
    position: absolute;
    left: -4px;
    margin-top: 0;
    transform: translateY(6px);
  }

  .journey__row {
    position: relative;
  }

  .journey__year {
    padding: 0 0 10px;
    text-align: left;
  }

  .journey__year-part {
    display: inline;
  }

  .journey__card {
    padding: 18px 18px;
  }
}
</style>
