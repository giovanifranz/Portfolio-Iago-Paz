import type { AppProps } from 'next/app'
import { Header } from '../components'
import { IsOpenProvider } from '../hooks/useIsOpen'

import { GlobalStyle } from '../styles'
import '@fontsource/inconsolata/400.css'
import '@fontsource/quicksand/300.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IsOpenProvider>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </IsOpenProvider>
  )
}

export default MyApp
