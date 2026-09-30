<script setup lang="ts">
// Masaüstü ana menü: büyük harf, geniş harf aralığı. Üzerine gelince ince siyah çizgi belirir,
// aktif sayfanın altındaki yeşil çizgi soldan sağa dolar.
defineProps<{ id?: string }>()

const { nav, t } = useLang()
</script>

<template>
  <nav :id="id" class="main-nav t-main-menu" :aria-label="t('a11y.mainMenu')">
    <NuxtLink v-for="item in nav" :key="item.key" :to="item.to" class="main-nav__link link-underline">
      {{ item.label }}
    </NuxtLink>
  </nav>
</template>

<style scoped>
.main-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

.main-nav__link {
  margin: 0 15px;
  white-space: nowrap;
}

.main-nav__link::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 2;
  width: 110%;
  height: 1px;
  background: var(--color-green);
  transform: translateX(-50%) scaleX(0);
  transform-origin: 0 50%;
  transition: transform var(--ease);
}

.main-nav__link.router-link-active::before {
  transform: translateX(-50%) scaleX(1);
  transition: transform var(--ease) var(--ease);
}

.main-nav__link.router-link-active::after {
  opacity: 0;
}
</style>
