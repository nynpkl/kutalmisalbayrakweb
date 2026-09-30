export default defineEventHandler(async () => {
  const supabase = useSupabase()

  // Veritabanı yavaşsa/erişilemiyorsa sayfayı bekletmemek için kısa bir üst sınır;
  // hata durumunda bileşenler kendi fallback içeriğiyle render olur.
  const { data, error } = await supabase
    .from('sections')
    .select('id, data')
    .abortSignal(AbortSignal.timeout(3000))

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return Object.fromEntries((data ?? []).map((row) => [row.id, row.data]))
})
