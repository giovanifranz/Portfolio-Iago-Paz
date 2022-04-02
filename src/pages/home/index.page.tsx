import { HomeContainer, HomeContainerProps } from '../../components'
import { Container } from './styles'
import { homeProps } from './homeProps'

const Home = () => {
  return (
    <Container>
      {homeProps.map((props, index) => (
        <HomeContainer key={index} {...(props as HomeContainerProps)} />
      ))}
    </Container>
  )
}

export default Home
