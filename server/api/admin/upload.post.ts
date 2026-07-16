export default defineEventHandler(async (event) => {
  await requireUserSession(event)

  const files = await readMultipartFormData(event)
  const file = files?.find((f) => f.name === 'file')

  if (!file || !file.filename) {
    throw createError({ statusCode: 400, statusMessage: 'Dosya bulunamadı.' })
  }

  const ext = file.filename.split('.').pop() || 'jpg'
  const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

  const supabase = useSupabase()
  const { error } = await supabase.storage.from('site-images').upload(path, file.data, {
    contentType: file.type || 'application/octet-stream',
    upsert: false
  })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  const { data } = supabase.storage.from('site-images').getPublicUrl(path)

  return { url: data.publicUrl }
})
