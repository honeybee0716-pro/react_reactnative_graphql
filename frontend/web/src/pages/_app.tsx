import '../styles/global.scss'
import 'raf/polyfill'
// @ts-ignore
global.setImmediate = requestAnimationFrame
import 'setimmediate'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { NativeBaseProvider } from 'native-base'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../lib/apolloClient'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Example</title>
        <meta key="title" name="title" content="Example" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <SafeAreaProvider>
          <NativeBaseProvider>
            <Component {...pageProps} />
          </NativeBaseProvider>
        </SafeAreaProvider>
      </ApolloProvider>
    </>
  )
}
