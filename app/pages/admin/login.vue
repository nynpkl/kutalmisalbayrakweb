<script setup lang="ts">
definePageMeta({ layout: 'blank' })

const password = ref('')
const error = ref('')
const loading = ref(false)

async function onSubmit() {
  error.value = ''
  loading.value = true
  try {
    await $fetch('/api/admin/login', { method: 'POST', body: { password: password.value } })
    const { fetch } = useUserSession()
    await fetch()
    await navigateTo('/admin')
  } catch {
    error.value = 'Şifre hatalı. Lütfen tekrar deneyin.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login">
    <form class="login__card" @submit.prevent="onSubmit">
      <p class="login__eyebrow">Yönetim Paneli</p>
      <h1 class="login__title">Op. Dr. Kutalmış Albayrak</h1>
      <div class="login__field">
        <label for="password">Şifre</label>
        <input id="password" v-model="password" type="password" autofocus required />
      </div>
      <button type="submit" class="login__submit" :disabled="loading">
        {{ loading ? 'Giriş yapılıyor…' : 'Giriş Yap' }}
      </button>
      <p v-if="error" class="login__error">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
.login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #10130f;
  padding: 24px;
}

.login__card {
  width: 100%;
  max-width: 360px;
  background: #171a15;
  border: 1px solid #2b2e27;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.login__eyebrow {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #3fbf9f;
}

.login__title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px;
  color: #f3f1ea;
  margin-bottom: 20px;
}

.login__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.login__field label {
  font-size: 12.5px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #9a9990;
}

.login__field input {
  padding: 12px 14px;
  border-radius: 4px;
  border: 1px solid #2b2e27;
  background: #10130f;
  color: #f3f1ea;
  font-size: 15px;
}

.login__field input:focus {
  outline: none;
  border-color: #3fbf9f;
}

.login__submit {
  padding: 14px;
  border-radius: 4px;
  border: 0;
  background: #0f6f5c;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
}

.login__submit:hover {
  background: #0b4f42;
}

.login__submit:disabled {
  opacity: 0.6;
  cursor: default;
}

.login__error {
  margin-top: 14px;
  font-size: 13.5px;
  color: #e0857a;
}
</style>
