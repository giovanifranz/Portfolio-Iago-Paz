import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useWindowsIsDesktop } from '../../hooks/useWindowsIsDesktop'
import { Container, Burguer } from './styles'

function Header() {
  const [open, setOpen] = useState(false)
  const isDesktop = useWindowsIsDesktop()

  const theme = {
    open,
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
        <Burguer onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </Burguer>
      </ThemeProvider>
    </Container>
  )
}

export { Header }
