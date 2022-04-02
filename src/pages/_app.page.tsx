import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import { Header } from '../components'

import { GlobalStyle } from '../styles'
import '@fontsource/inconsolata/400.css'
import '@fontsource/quicksand/300.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
