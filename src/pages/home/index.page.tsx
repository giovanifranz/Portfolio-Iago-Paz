import { Fragment, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'styled-components'

import { Footer, HomeContainer, HomeContainerProps } from '../../components'
import { useIsOpen } from '../../hooks'
import { Container } from '../../styles'

import { homeProps } from './homeProps'

const PresentationCard = dynamic<EmptyObject>(() =>
  import('../../components/PresentationCard').then((module) => module.PresentationCard),
)

export default function Home() {
  const { isOpen } = useIsOpen()
  const [isOpenTheme, setIsOpenTheme] = useState(isOpen)

  useEffect(() => {
    setTimeout(() => {
      setIsOpenTheme(isOpen)
    }, 300)
  }, [isOpen])

  const theme = {
    isOpen,
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {!isOpenTheme ? (
          <Fragment>
            {homeProps.map((props, index) => (
              <HomeContainer key={index} {...(props as HomeContainerProps)} />
            ))}
          </Fragment>
        ) : (
          <PresentationCard />
        )}
      </Container>
      {!isOpenTheme && <Footer />}
    </ThemeProvider>
  )
}
