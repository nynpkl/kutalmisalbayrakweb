import { createClient } from '@supabase/supabase-js'

let client: ReturnType<typeof createClient> | null = null

export function useSupabase() {
  if (client) return client

  const config = useRuntimeConfig()

  if (!config.supabaseUrl || !config.supabaseServiceKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Supabase yapılandırması eksik (NUXT_SUPABASE_URL / NUXT_SUPABASE_SERVICE_KEY).'
    })
  }

  client = createClient(config.supabaseUrl, config.supabaseServiceKey, {
    auth: { persistSession: false }
  })

  return client
}
