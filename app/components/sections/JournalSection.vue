<script setup lang="ts">
const fallback = {
  eyebrow: 'Sağlık Notları',
  title: 'Güncel yazılar',
  posts: [
    {
      date: '12 Haziran 2026',
      title: 'Omuz artroskopisi sonrası iyileşme süreci nasıl işler?',
      excerpt: 'Ameliyat sonrası ilk haftalar, fizyoterapi takvimi ve günlük yaşama dönüş hakkında bilinmesi gerekenler.'
    },
    {
      date: '3 Mayıs 2026',
      title: 'Ön çapraz bağ (ÖÇB) yırtığında ameliyat şart mı?',
      excerpt: 'Konservatif tedavi ile cerrahi arasındaki karar sürecini etkileyen faktörler.'
    },
    {
      date: '21 Mart 2026',
      title: 'Donuk omuz (frozen shoulder) ile omuz sıkışma sendromu arasındaki fark',
      excerpt: 'Benzer belirtilere sahip bu iki durumun tanı ve tedavi yaklaşımındaki farklılıklar.'
    }
  ]
}

const { data } = await useSiteContent()
const journal = computed(() => ({ ...fallback, ...(data.value?.journal ?? {}) }))
</script>

<template>
  <section class="section journal">
    <div class="container journal__head">
      <p class="eyebrow">{{ journal.eyebrow }}</p>
      <h2 class="section-title">{{ journal.title }}</h2>
      <a href="#" class="journal__all link-underline">Tüm yazıları gör →</a>
    </div>

    <div class="container journal__grid">
      <article v-for="post in journal.posts" :key="post.title" class="journal-card">
        <span class="journal-card__date">{{ post.date }}</span>
        <h3 class="journal-card__title">{{ post.title }}</h3>
        <p class="journal-card__excerpt">{{ post.excerpt }}</p>
        <a href="#" class="journal-card__link link-underline">Devamını oku →</a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.journal__head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
}

.journal__all {
  font-size: 13.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-accent);
}

.journal__grid {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

@media (min-width: 800px) {
  .journal__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.journal-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 24px;
  border-top: 2px solid var(--color-ink);
}

.journal-card__date {
  font-size: 12.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.journal-card__title {
  font-family: var(--font-display);
  font-size: 24px;
  line-height: 1.3;
}

.journal-card__excerpt {
  font-size: 14.5px;
  color: var(--color-muted);
  line-height: 1.6;
}

.journal-card__link {
  margin-top: auto;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
</style>
