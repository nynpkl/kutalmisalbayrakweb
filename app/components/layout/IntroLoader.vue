<script setup lang="ts">
// Sayfa ilk açıldığında gösterilen tam ekran giriş (intro) ekranı.
// SSR ile render edilir; böylece site görünmeden önce ilk karede intro ekranı hazır olur.
const INTRO_IMAGE = '/images/intro.png'
const MIN_DURATION = 3000 // barın dolma süresi (ms)

const visible = ref(true)
const leaving = ref(false)
const barFill = ref<HTMLElement>()

useHead({
  htmlAttrs: { class: computed(() => (visible.value ? 'intro-lock' : '')) },
  link: [{ rel: 'preload', as: 'image', href: INTRO_IMAGE, fetchpriority: 'high' }]
})

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

onMounted(async () => {
  // Süre, sayfa isteğinin başladığı andan değil, bar ekranda dolmaya başladığı andan sayılır:
  // CSS dolma animasyonunun bitmesi beklenir (sayfa geç açılsa bile intro tam süre görünür).
  const animations = barFill.value?.getAnimations?.() ?? []
  const barFilled = animations.length
    ? Promise.all(animations.map((a) => a.finished)).catch(() => {})
    : wait(MIN_DURATION)

  const pageLoaded =
    document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }))

  // Yavaş bağlantılarda sonsuza kadar beklememek için üst sınır
  await Promise.all([barFilled, Promise.race([pageLoaded, wait(6000)])])

  leaving.value = true
  await wait(700)
  visible.value = false
})
</script>

<template>
  <div
    v-if="visible"
    class="intro"
    :class="{ 'intro--leaving': leaving }"
    :style="{ '--intro-duration': `${MIN_DURATION}ms` }"
    role="status"
    aria-label="Yükleniyor"
  >
    <div class="intro__backdrop" :style="{ backgroundImage: `url(${INTRO_IMAGE})` }" aria-hidden="true" />
    <div class="intro__stage">
      <img
        class="intro__image"
        :src="INTRO_IMAGE"
        width="1367"
        height="1150"
        alt="Doç. Dr. Kutalmış Albayrak — Omuz, Dirsek ve Spor Cerrahisi"
        fetchpriority="high"
      />
      <div class="intro__bar" aria-hidden="true">
        <span ref="barFill" class="intro__bar-fill" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro {
  position: fixed;
  inset: 0;
  z-index: 2000;
  overflow: hidden;
  background: #27303d;
  transition: opacity 0.7s ease, visibility 0s linear 0.7s;
  /* JS çalışmazsa bile intro ekranı kendiliğinden kaybolsun */
  animation: intro-auto-hide 0.7s ease 8s forwards;
}

.intro--leaving {
  opacity: 0;
  visibility: hidden;
}

.intro__backdrop {
  position: absolute;
  inset: -60px;
  background-size: cover;
  background-position: center;
  filter: blur(28px) brightness(0.75);
}

/* Görsel her ekranda kırpılmadan, tamamı görünecek şekilde sığdırılır ("contain");
   kalan boşlukları aynı görselin bulanık kopyası tamamlar. */
.intro__stage {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(100vw, calc(100svh * 1367 / 1150));
  aspect-ratio: 1367 / 1150;
  transform: translate(-50%, -50%);
}

/* Yatay ekranlarda sağ/sol kenarlar bulanık arka plana yumuşakça karışsın
   (soldaki yüz ~%10'dan başladığı için sol geçiş dar tutuldu) */
@media (min-aspect-ratio: 1367 / 1150) {
  .intro__stage {
    -webkit-mask-image: linear-gradient(to right, transparent 0, #000 6%, #000 92%, transparent 100%);
    mask-image: linear-gradient(to right, transparent 0, #000 6%, #000 92%, transparent 100%);
  }
}

/* Dikey ekranlarda üst/alt kenarlar (bone görselin en üstünde olduğu için üst geçiş dar tutuldu) */
@media (max-aspect-ratio: 1367 / 1150) {
  .intro__stage {
    -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 3%, #000 88%, transparent 100%);
    mask-image: linear-gradient(to bottom, transparent 0, #000 3%, #000 88%, transparent 100%);
  }
}

.intro__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Alt yazının (Shoulder · Elbow · Sports Surgery) altında dolan ince çizgi.
   Konum/genişlik, görseldeki isim altı çizgisiyle hizalı olacak şekilde yüzde olarak verilir. */
.intro__bar {
  position: absolute;
  top: 69.7%;
  left: 18.14%;
  width: 65.1%;
  height: 1px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
}

.intro__bar-fill {
  position: absolute;
  inset: 0;
  background: #fff;
  transform: scaleX(0);
  transform-origin: left center;
  animation: intro-fill var(--intro-duration, 3s) cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

@keyframes intro-fill {
  to {
    transform: scaleX(1);
  }
}

@keyframes intro-auto-hide {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

@media (prefers-reduced-motion: reduce) {
  .intro__bar-fill {
    animation-duration: 0.6s;
  }
}
</style>

<style>
html.intro-lock {
  overflow: hidden;
}
</style>
