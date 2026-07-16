export function useSiteContent() {
  return useFetch('/api/content', { key: 'site-content' })
}
