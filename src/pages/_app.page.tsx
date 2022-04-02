import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import { Header, Footer } from '../components'

import { GlobalStyle } from '../styles'
import '@fontsource/inconsolata/400.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}

export default MyApp
