import Image from 'next/image'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'
import { useWindowsIsDesktop } from '../../hooks/useWindowsIsDesktop'
import { Container, Burguer } from './styles'
import { useIsOpen } from '../../hooks/useIsOpen'

function Header() {
  const { isOpen, setIsOpen } = useIsOpen()
  const isDesktop = useWindowsIsDesktop()

  const theme = {
    isOpen,
    isDesktop
  }

  return (
    <Container>
      <Link href="/">
        <a>
          <Image
            src="/Logo.png"
            alt="Iago Paz | UX & UI Design"
            width={isDesktop ? 305 : 200}
            height={isDesktop ? 100 : 65}
          />
        </a>
      </Link>

      <ThemeProvider theme={theme}>
        <Burguer onClick={() => setIsOpen(!isOpen)}>
          <div />
          <div />
          <div />
        </Burguer>
      </ThemeProvider>
    </Container>
  )
}

export { Header }
