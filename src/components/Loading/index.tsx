import Image from 'next/image'

import { Container } from './styles'

function Loading() {
  return (
    <Container>
      <Image src="/Animacao.gif" alt="Loading" width={220} height={370} />
    </Container>
  )
}

export { Loading }
