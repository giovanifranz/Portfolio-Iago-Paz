import { useState, useEffect, Fragment } from 'react'
import type { AppProps } from 'next/app'
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
