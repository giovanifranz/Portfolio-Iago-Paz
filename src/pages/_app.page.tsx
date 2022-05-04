import { Suspense } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Header, Loading } from '../components'
import { IsOpenProvider } from '../hooks/useIsOpen'
import { GlobalStyle } from '../styles'

import '@fontsource/inconsolata/400.css'
import '@fontsource/quicksand/300.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IsOpenProvider>
      <Head>
        <title>Iago Paz UX & Design</title>
        <link href="/Logo.png" />
        <link href="/Marca.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        <Header />
        <Component {...pageProps} />
      </Suspense>
    </IsOpenProvider>
  )
}

export default MyApp
