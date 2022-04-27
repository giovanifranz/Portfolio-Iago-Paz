import { Fragment, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Header, Loading } from '../components'
import { IsOpenProvider } from '../hooks/useIsOpen'
import { GlobalStyle } from '../styles'

import '@fontsource/inconsolata/400.css'
import '@fontsource/quicksand/300.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 10500)
  }, [])

  return (
    <IsOpenProvider>
      <Head>
        <title>HighlanderTech</title>
        <link rel="Logo" href="/Logo.png" />
        <link rel="Marca" href="/Marca.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyle />
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <Header />
          <Component {...pageProps} />
        </Fragment>
      )}
    </IsOpenProvider>
  )
}

export default MyApp
