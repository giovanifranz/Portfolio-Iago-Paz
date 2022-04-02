import { HomeContainer, HomeContainerProps } from '../../components'
import { Container } from './styles'
import { homeProps } from './homeProps'
import { useIsOpen } from '../../hooks/useIsOpen'
import { Fragment } from 'react'
import dynamic from 'next/dynamic'

const PresentationCard = dynamic<EmptyObject>(() =>
  import('../../components/PresentationCard').then(
    (module) => module.PresentationCard
  )
)

const Home = () => {
  const { isOpen } = useIsOpen()

  return (
    <Container>
      {!isOpen ? (
        <Fragment>
          {homeProps.map((props, index) => (
            <HomeContainer key={index} {...(props as HomeContainerProps)} />
          ))}
        </Fragment>
      ) : (
        <PresentationCard />
      )}
    </Container>
  )
}

export default Home
