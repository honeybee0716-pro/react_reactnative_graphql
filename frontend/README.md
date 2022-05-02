# Expo + Next.js Monorepo Example
Using this boilerplate: https://github.com/axeldelafosse/expo-next-monorepo-example

When you run yarn install in the root directory, it will run yarn install in the mobile, shared and web repos thanks to the workspace field in the roots package.json

- Expo SDK 43 (with Hermes on iOS and Android)
- Next.js 12
- React Native for Web
- TypeScript
- Babel config that works for Expo and Next.js with Reanimated in a monorepo
- Reanimated
- React Native Bottom Sheet
- Dripsy

Small configuration required:

- Expo Application Services
- Custom Development Client
- Sentry

### App

> Code shared between iOS, Android and Web

### Expo

> Native

Expo entrypoint: `mobile/App.tsx`

`yarn ios` to start iOS app with Expo
`yarn android` to start Android app with Expo

Pro tip: build and launch a custom development client with `SCHEME=com.example.axel yarn run:ios -d` (replace `axel` with your first name)

### Next.js

> Web

Next.js entrypoint: `web/src/pages/_app.tsx`

`yarn web` to start web app

### Root

- Don't add any package here

### App

- Don't add any package here

### Mobile / Expo

- Add all your React Native and universal packages here
- Publish to Expo with `yarn publish:production`

### Next.js

- Add your web-only packages here
- Deploy to Vercel with `yarn deploy` -- if it fails, make sure to configure your project correctly:
  go to your project settings on Vercel and set the "Framework Preset" to Next.js and the "Root Directory" to `web`

## Navigation

Here is an example of how to handle navigation: https://github.com/axeldelafosse/expo-next-monorepo-example/pull/1

## What should I do next?

Here are some ideas to get you started:

- Use React Navigation
- Style your app with Dripsy
- Animate your app with Moti
- Do some requests with SWR or Apollo Client
- Build cool things with Expo Modules
- Create a custom development client
- Add Sentry
- Add CI/CD with EAS via GitHub Actions