import Image from 'next/image'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'
import { useWindowsSize } from '../../hooks/useWindowsSize'
import { Container, Article, Text } from './styles'

interface Props {
  title: string
  description: string
  image: string
  href: string
  orientation: 'left' | 'right'
}

function HomeContainer({
  title,
  description,
  image,
  href,
  orientation
}: Props) {
  const { isDesktop } = useWindowsSize()

  const theme = {
    orientation
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Article>
          <Text>
            {title} <br />
            <br /> {description}
          </Text>
        </Article>
        <Link href={href}>
          <a>
            <Image
              src={image}
              alt={title}
              height={isDesktop ? 700 : 210}
              width={isDesktop ? 1120 : 250}
            />
          </a>
        </Link>
      </Container>
    </ThemeProvider>
  )
}

export { HomeContainer }
export type { Props as HomeContainerProps }
