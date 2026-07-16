export default defineEventHandler(async (event) => {
  await requireUserSession(event)

  const section = getRouterParam(event, 'section')
  if (!section) {
    throw createError({ statusCode: 400, statusMessage: 'Bölüm belirtilmedi.' })
  }

  const body = await readBody(event)

  const supabase = useSupabase()
  const { error } = await supabase
    .from('sections')
    .upsert({ id: section, data: body, updated_at: new Date().toISOString() })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return { ok: true }
})
