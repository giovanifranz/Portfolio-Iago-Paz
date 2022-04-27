import Image from 'next/image'

import { Article, Container, Contato, Text } from './styles'

function PresentationCard() {
  const today = new Date()
  const birthDate = new Date('05/08/94')
  const diff = Math.abs(today.getTime() - birthDate.getTime())
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))

  return (
    <Container>
      <Article>
        <Text>Um designer de {years} anos com forte influência do design oriental.</Text>
        <Image src="/Emblema.png" alt="Emblema Iago Paz" width={60} height={145} />
      </Article>
      <Image src="/Marca.png" alt="Marca Iago Paz" width={330} height={105} />
      <Contato>
        (51) 9 9211 - 4211
        <br />
        <br />
        contato@iagopaz.com.br
        <br />
        <br />
        www.iagopaz.com.br
        <br />
        <br />
      </Contato>
    </Container>
  )
}

export { PresentationCard }
