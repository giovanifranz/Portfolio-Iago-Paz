import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import { Header, Footer } from '../components'

import '../styles/global.css'
import '@fontsource/inconsolata/400.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  )
}

export default MyApp
