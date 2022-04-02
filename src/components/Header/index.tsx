import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useWindowsIsDesktop } from '../../hooks/useWindowsIsDesktop'
import { Container } from './styles'
import type { ButtonProps } from './Button'

const Button = dynamic<ButtonProps>(() =>
  import('./Button').then((module) => module.Button)
)

function Header() {
  const isDesktop = useWindowsIsDesktop()
  const { pathname } = useRouter()

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
      {pathname === '/home' && <Button isDesktop={isDesktop} />}
    </Container>
  )
}

export { Header }
