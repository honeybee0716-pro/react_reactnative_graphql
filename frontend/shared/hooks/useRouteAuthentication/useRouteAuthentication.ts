enum AUTH_STATUS {
  SIGNED_IN = 'SIGNED_IN',
  SIGNED_OUT = 'SIGNED_OUT',
  ANY = 'ANY'
}

const determineAccess = async (
  requiredAuthState: AUTH_STATUS,
  redirectPath?: string
) => {
  const jwt = await localStorage.getItem('jwt')

  if (requiredAuthState === AUTH_STATUS.ANY) {
    return
  }

  if (!requiredAuthState) {
    throw new Error(
      'You must specify the requiredAuthState for this path inside of useRouteAuthentication.'
    )
  }

  if (requiredAuthState === AUTH_STATUS.SIGNED_IN && !!jwt) {
    return
  }

  if (requiredAuthState === AUTH_STATUS.SIGNED_OUT && !jwt) {
    return
  }

  if (!redirectPath) {
    throw new Error(
      'You must specify a redirectPath for this path inside of useRouteAuthentication.'
    )
  }

  if (requiredAuthState === AUTH_STATUS.SIGNED_IN && !jwt) {
    document.location = redirectPath
    return
  }

  if (requiredAuthState === AUTH_STATUS.SIGNED_OUT && !!jwt) {
    document.location = redirectPath
    return
  }

  return
}

export const useRouteAuthentication = async () => {
  const route = document?.location?.href

  if (!route) {
    return true
  }

  const path = '/' + route.split('/')[3].split('?')[0]

  switch (path) {
    case '/':
      return true
    case '/billing':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/campaigns':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/shopping':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')  
    case '/help':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/account':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/credits':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/forgot-password':
      return await determineAccess(AUTH_STATUS.SIGNED_OUT, '/home')
    case '/goodbye':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/help':
      return await determineAccess(AUTH_STATUS.ANY, undefined)
    case '/home':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/transactions':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/customers':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/tiers':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/automation':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/products':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/reports':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/integrations':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')   
    case '/branding':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/':
      return await determineAccess(AUTH_STATUS.ANY, undefined)
    case '/otp':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/pricing':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/privacy-policy':
      return await determineAccess(AUTH_STATUS.ANY, undefined)
    case '/sign-in':
      return await determineAccess(AUTH_STATUS.ANY, undefined)
    case '/sign-out':
      return await determineAccess(AUTH_STATUS.ANY, undefined)
    case '/sign-up':
      return await determineAccess(AUTH_STATUS.ANY, undefined)
    case '/stripe-success':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    case '/terms-and-conditions':
      return await determineAccess(AUTH_STATUS.ANY, undefined)
    case '/thank-you':
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
    default:
      return await determineAccess(AUTH_STATUS.SIGNED_IN, '/sign-in-business')
  }
}
