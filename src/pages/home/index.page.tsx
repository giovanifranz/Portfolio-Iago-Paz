import { HomeContainer, HomeContainerProps, Footer } from '../../components'
import { Container } from './styles'
import { homeProps } from './homeProps'
import { useIsOpen } from '../../hooks/useIsOpen'
import { Fragment, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'styled-components'

const PresentationCard = dynamic<EmptyObject>(() =>
  import('../../components/PresentationCard').then(
    (module) => module.PresentationCard
  )
)

const Home = () => {
  const { isOpen } = useIsOpen()
  const [isOpenTheme, setIsOpenTheme] = useState(isOpen)

  useEffect(() => {
    setTimeout(() => {
      setIsOpenTheme(isOpen)
    }, 300)
  }, [isOpen])

  const theme = {
    isOpen
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

export default Home
