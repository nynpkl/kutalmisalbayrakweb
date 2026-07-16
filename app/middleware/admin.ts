export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/admin/login') return

  const { loggedIn, fetch } = useUserSession()
  await fetch()

  if (!loggedIn.value) {
    return navigateTo('/admin/login')
  }
})
