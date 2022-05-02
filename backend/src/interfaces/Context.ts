export interface IContext {
  req: {
    user?: any
    auth0Id?: string
    accessToken?: string
  }
  res?: any
}
