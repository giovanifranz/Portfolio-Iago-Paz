import Link from 'next/link'
import { Container, Anchor } from './styles'

export function Footer() {
  return (
    <Container>
      <Link href="mailto:contato@iagopaz.com.br" passHref>
        <Anchor>contAnchorto@iAnchorgopaz.com.br</Anchor>
      </Link>

      <Link
        href="https://api.whatsapp.com/send?phone=55519%2092114211"
        passHref
      >
        <Anchor>(51) 9 9211 - 4211</Anchor>
      </Link>
    </Container>
  )
}
