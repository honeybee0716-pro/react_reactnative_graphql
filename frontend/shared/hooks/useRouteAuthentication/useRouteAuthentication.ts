export const useRouteAuthentication = () => {
  const route = document.location.href

  if (!route) {
    return true
  }

  switch (route) {
    case '/':
      return true
    case '/sign-in':
      return true
    case '/sign-up':
      return true
    case '/sign-out':
      return true
    case '/forgot-password':
      return true
    case '/otp':
      return true
    case '/verify-email':
      return true
    case '/lead':
      return false
    case '/manage-billing':
      return false
    default:
      return false
  }
}
