export function useSiteContent() {
  return useFetch('/api/content', { key: 'site-content', timeout: 4000 })
}
