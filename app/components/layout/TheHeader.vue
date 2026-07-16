<script setup lang="ts">
const links = [
  { label: 'Anasayfa', href: '#hero' },
  { label: 'Hakkımda', href: '#hakkimda' },
  { label: 'Uzmanlık Alanları', href: '#uzmanlik' },
  { label: 'Yaklaşımım', href: '#yaklasim' },
  { label: 'Yayınlar', href: '#yayinlar' },
  { label: 'Hasta Yorumları', href: '#yorumlar' }
]

const isScrolled = ref(false)
const isMenuOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

function closeMenu() {
  isMenuOpen.value = false
}

watch(isMenuOpen, (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.documentElement.style.overflow = ''
})
</script>

<template>
  <header class="header" :class="{ 'header--solid': isScrolled }">
    <div class="header__inner container">
      <a href="#hero" class="brand link-underline" @click="closeMenu">
        <span class="brand__mark">KA</span>
        <span class="brand__name">Op. Dr. Kutalmış Albayrak</span>
      </a>

      <nav class="nav-desktop">
        <a v-for="link in links" :key="link.href" :href="link.href" class="nav-link link-underline">
          {{ link.label }}
        </a>
      </nav>

      <div class="header__actions">
        <a href="#iletisim" class="btn btn-primary nav-cta">İletişim</a>
        <button
          class="burger"
          :class="{ 'burger--open': isMenuOpen }"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Menüyü aç/kapat"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="isMenuOpen" class="mobile-menu">
        <nav class="mobile-menu__links">
          <a
            v-for="(link, i) in links"
            :key="link.href"
            :href="link.href"
            class="mobile-menu__link"
            :style="{ transitionDelay: `${i * 40}ms` }"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </nav>
        <a href="#iletisim" class="btn btn-primary" @click="closeMenu">İletişim</a>
        <p class="mobile-menu__meta">Baltalimanı Mah. Rumeli Hisarı Cd. No: 57/1, Sarıyer / İstanbul<br />0 (212) 323 70 75</p>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding-block: 22px;
  background: linear-gradient(180deg, rgba(250, 247, 242, 0.9), transparent);
  transition: background-color 0.35s ease, padding 0.35s ease, box-shadow 0.35s ease;
}

.header--solid {
  background: var(--color-bg);
  padding-block: 14px;
  box-shadow: 0 1px 0 var(--color-line);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-shrink: 0;
}

.brand__mark {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 500;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.brand__name {
  font-family: var(--font-display);
  font-size: 18px;
  letter-spacing: 0.01em;
  display: none;
}

@media (min-width: 640px) {
  .brand__name {
    display: inline;
  }
}

.nav-desktop {
  display: none;
  align-items: center;
  gap: clamp(12px, 1.4vw, 22px);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  flex-shrink: 1;
  min-width: 0;
}

.nav-link {
  white-space: nowrap;
  flex-shrink: 0;
}

@media (min-width: 1320px) {
  .nav-desktop {
    display: flex;
  }
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
}

.nav-cta {
  display: none;
}

@media (min-width: 1320px) {
  .nav-cta {
    display: inline-flex;
  }
}

.burger {
  position: relative;
  width: 26px;
  height: 18px;
  z-index: 3;
}

@media (min-width: 1320px) {
  .burger {
    display: none;
  }
}

.burger span {
  position: absolute;
  left: 0;
  right: 0;
  height: 1.5px;
  background: var(--color-ink);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.burger span:nth-child(1) {
  top: 0;
}

.burger span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.burger span:nth-child(3) {
  bottom: 0;
}

.burger--open span:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.burger--open span:nth-child(2) {
  opacity: 0;
}

.burger--open span:nth-child(3) {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
}

.mobile-menu {
  position: fixed;
  inset: 0;
  top: 0;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 24px;
  text-align: center;
}

.mobile-menu__links {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.mobile-menu__link {
  font-family: var(--font-display);
  font-size: clamp(26px, 7vw, 36px);
  opacity: 0;
  transform: translateY(12px);
  animation: link-in 0.5s ease forwards;
}

@keyframes link-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-menu__meta {
  font-size: 13px;
  color: var(--color-muted);
  line-height: 1.7;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 1320px) {
  .mobile-menu {
    display: none;
  }
}
</style>
