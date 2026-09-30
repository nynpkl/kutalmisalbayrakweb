// Supabase ücretsiz planı, 7 gün hiç kullanılmayan projeleri duraklatır (pause).
// Vercel Cron bu adresi her gün çağırır; küçük bir sorgu atılarak proje "aktif" tutulur.
export default defineEventHandler(async (event) => {
  // Vercel, CRON_SECRET ortam değişkeni tanımlıysa isteğe "Authorization: Bearer <CRON_SECRET>" ekler.
  const secret = process.env.CRON_SECRET
  if (secret && getHeader(event, 'authorization') !== `Bearer ${secret}`) {
    throw createError({ statusCode: 401, statusMessage: 'Yetkisiz' })
  }

  const supabase = useSupabase()
  const { error } = await supabase
    .from('sections')
    .select('id')
    .limit(1)
    .abortSignal(AbortSignal.timeout(10000))

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return { ok: true, at: new Date().toISOString() }
})
