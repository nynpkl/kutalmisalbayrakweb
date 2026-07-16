export default defineEventHandler(async (event) => {
  const { password } = await readBody<{ password: string }>(event)
  const config = useRuntimeConfig()

  if (!config.adminPassword) {
    throw createError({ statusCode: 500, statusMessage: 'Yönetici şifresi yapılandırılmamış (NUXT_ADMIN_PASSWORD).' })
  }

  if (!password || password !== config.adminPassword) {
    throw createError({ statusCode: 401, statusMessage: 'Şifre hatalı.' })
  }

  await setUserSession(event, { user: { admin: true } })

  return { ok: true }
})
