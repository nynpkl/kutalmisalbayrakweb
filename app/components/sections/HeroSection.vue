<script setup lang="ts"></script>

<template>
  <section id="hero" class="hero">
    <div class="hero__bg" aria-hidden="true" />
    <div class="container hero__inner">
      <p class="hero__kicker">Op. Dr. Kutalmış Albayrak</p>
      <h1 class="hero__title">
        Hareketin özgürlüğü,<br />
        güvenilir ellerde.
      </h1>
      <p class="hero__subtitle">Ortopedi ve Travmatoloji — Omuz ve Dirsek Cerrahisi Uzmanı, İstanbul</p>

      <div class="hero__actions">
        <a href="#iletisim" class="btn btn-primary">İletişime Geç</a>
        <a href="#hakkimda" class="btn btn-ghost">Hakkımda</a>
      </div>
    </div>

    <a href="#hakkimda" class="hero__scroll link-underline">
      <span>Keşfet</span>
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--color-ink);
  color: #f4f2ec;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 20%, rgba(63, 191, 159, 0.35), transparent 45%),
    radial-gradient(circle at 82% 78%, rgba(15, 111, 92, 0.45), transparent 50%),
    linear-gradient(160deg, #10241f 0%, #0b1512 60%, #060907 100%);
}

.hero__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.035) 0 1px, transparent 1px 120px);
  opacity: 0.6;
}

.hero__inner {
  position: relative;
  z-index: 1;
  padding-top: 120px;
  padding-bottom: 80px;
}

.hero__kicker {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #7fd9c2;
}

.hero__title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(44px, 8.5vw, 104px);
  line-height: 1.02;
  letter-spacing: -0.01em;
  margin-top: 22px;
  max-width: 16ch;
}

.hero__subtitle {
  margin-top: 26px;
  font-size: clamp(15px, 1.6vw, 19px);
  color: rgba(244, 242, 236, 0.72);
  max-width: 46ch;
}

.hero__actions {
  margin-top: 44px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.hero .btn-ghost {
  border-color: rgba(244, 242, 236, 0.4);
  color: #f4f2ec;
}

.hero .btn-ghost:hover {
  background: #f4f2ec;
  color: var(--color-ink);
}

.hero__scroll {
  position: absolute;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(244, 242, 236, 0.75);
}

.hero__scroll::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  width: 1px;
  height: 40px;
  background: rgba(244, 242, 236, 0.4);
}

@media (max-width: 600px) {
  .hero__scroll::before {
    display: none;
  }
}
</style>
