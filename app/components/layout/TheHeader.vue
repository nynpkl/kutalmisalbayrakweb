<script setup lang="ts">
// Masaüstünde sabit, iki satırlı üst bölüm: üstte TR/EN · isim logosu · amblem, altında menü.
// Tablet/mobilde amblem + hamburger sabit; isim logosu sayfanın en üstünde (layout'ta), menü tam ekran açılır.
const route = useRoute()
const { t, nav, pathTo } = useLang()

const isScrolled = ref(false)
const isMenuOpen = ref(false)

function update() {
  isScrolled.value = window.scrollY > 10
}

watch(isMenuOpen, (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
})

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
    setTimeout(update, 800)
  }
)

onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
  document.documentElement.style.overflow = ''
})
</script>

<template>
  <header class="site-header">
    <!-- Sabit üst bölüm (masaüstü): üst satırda isim logosu, alt satırda menü -->
    <div class="top-bar">
      <SiteWordmark class="top-bar__wordmark" />
      <MainNav class="top-bar__nav" />
    </div>

    <!-- Tablet/mobilde amblem ve menü düğmesinin arkasında, altından geçen metni gizleyen beyaz şerit -->
    <div class="mobile-bar" :class="{ 'mobile-bar--visible': isScrolled }" aria-hidden="true" />

    <!-- Dil seçici (masaüstünde sol üstte; tablet/mobilde menünün içinde) -->
    <LangSwitch class="lang-desktop" />

    <!-- Amblem -->
    <NuxtLink :to="pathTo('home')" class="crest" :aria-label="t('a11y.home')">
      <img src="/images/logo/ka-mark-black.png" :alt="t('doctor')" width="720" height="615" />
    </NuxtLink>

    <!-- Hamburger (tablet/mobil) -->
    <button
      class="burger"
      :class="{ 'burger--close': isMenuOpen }"
      :aria-expanded="isMenuOpen"
      aria-controls="mobile-menu"
      :aria-label="isMenuOpen ? t('a11y.closeMenu') : t('a11y.openMenu')"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span class="burger__line burger__line--1" />
      <span class="burger__line burger__line--2" />
      <span class="burger__line burger__line--3" />
    </button>

    <!-- Tam ekran mobil menü -->
    <Transition name="menu-fade">
      <div v-show="isMenuOpen" id="mobile-menu" class="mobile-menu">
        <LangSwitch class="mobile-menu__lang" />
        <nav class="mobile-menu__links t-main-menu" :aria-label="t('a11y.mainMenu')">
          <NuxtLink :to="pathTo('home')" class="mobile-menu__link">{{ t('nav.home') }}</NuxtLink>
          <NuxtLink v-for="item in nav" :key="item.key" :to="item.to" class="mobile-menu__link">
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* ---------- Sabit üst bölüm (masaüstü) ---------- */
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: var(--header-h);
  background: linear-gradient(180deg, #fff 0, #fff 88%, hsla(0, 0%, 100%, 0));
}

.top-bar__wordmark {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.top-bar__nav {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 22px;
}

@media (min-width: 1440px) {
  .top-bar__wordmark {
    top: 44px;
  }
}

@media (max-width: 1169px) {
  .top-bar {
    display: none;
  }
}

/* ---------- Dil seçici ---------- */
.lang-desktop {
  position: fixed;
  z-index: 60;
  top: 38px;
  left: 44px;
}

@media (min-width: 1440px) {
  .lang-desktop {
    top: 45px;
    left: 55px;
  }
}

@media (max-width: 1169px) {
  .lang-desktop {
    display: none;
  }
}

/* ---------- Mobil üst şerit ---------- */
.mobile-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 55;
  height: 96px;
  background: linear-gradient(180deg, #fff 0, #fff 75%, hsla(0, 0%, 100%, 0));
  pointer-events: none;
  /* Sayfanın en üstünde isim logosunu örtmesin; yalnızca kaydırınca belirsin */
  opacity: 0;
  transition: opacity var(--ease);
}

.mobile-bar--visible {
  opacity: 1;
}

@media (min-width: 1170px) {
  .mobile-bar {
    display: none;
  }
}

/* ---------- Amblem ---------- */
.crest {
  position: fixed;
  z-index: 70;
  top: 30px;
  left: 3vw;
  width: 42px;
}

.crest img {
  width: 100%;
  height: auto;
}

@media (min-width: 744px) {
  .crest {
    left: 35px;
  }
}

@media (min-width: 1170px) {
  .crest {
    left: auto;
    right: 48px;
    top: 22px;
    width: 58px;
  }
}

@media (min-width: 1440px) {
  .crest {
    top: 30px;
  }
}

/* ---------- Hamburger ---------- */
.burger {
  position: fixed;
  z-index: 70;
  top: 36px;
  right: 3vw;
  display: block;
  width: 28px;
  height: 21px;
  transition: transform var(--ease);
}

@media (min-width: 744px) {
  .burger {
    right: 35px;
    width: 35px;
    height: 27px;
  }
}

@media (min-width: 1170px) {
  .burger {
    display: none;
  }
}

.burger__line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.98);
  transform-origin: 0 0;
}

.burger__line--1 {
  top: 0;
  transition: transform var(--ease);
}

.burger__line--2 {
  top: 50%;
  transition: opacity var(--ease);
}

.burger__line--3 {
  bottom: 0;
  transform-origin: 0 100%;
  transition: transform var(--ease);
}

.burger--close {
  transform: translateX(4.5px);
}

.burger--close .burger__line--1 {
  transform: rotate(45deg) translateY(-50%);
}

.burger--close .burger__line--2 {
  opacity: 0;
}

.burger--close .burger__line--3 {
  transform: rotate(-45deg) translateY(50%);
}

/* ---------- Mobil menü ---------- */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 65;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(0, 0%, 100%, 0.95);
}

.mobile-menu__lang {
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translateX(-50%);
}

.mobile-menu__links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile-menu__link {
  position: relative;
  margin: 2px 0;
}

.mobile-menu__link.router-link-exact-active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 110%;
  height: 1px;
  background: var(--color-green);
  transform: translateX(-50%);
}

.menu-fade-enter-active {
  transition: opacity var(--ease);
}

.menu-fade-leave-active {
  transition: opacity var(--ease);
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}
</style>
