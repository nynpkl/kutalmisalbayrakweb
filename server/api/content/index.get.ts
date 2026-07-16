export default defineEventHandler(async () => {
  const supabase = useSupabase()

  const { data, error } = await supabase.from('sections').select('id, data')

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return Object.fromEntries((data ?? []).map((row) => [row.id, row.data]))
})
