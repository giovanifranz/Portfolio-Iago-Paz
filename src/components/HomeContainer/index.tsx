import Image from 'next/image'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'

import { Anchor, Article, Banner, Container, Text } from './styles'

interface Props {
  title: string
  description: string
  image: string
  href: string
  orientation: 'left' | 'right'
}

function HomeContainer({ title, description, image, href, orientation }: Props) {
  const theme = {
    orientation,
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
        <Banner>
          <Link href={href} passHref>
            <Anchor>
              <Image src={image} alt={title} layout="fill" />
            </Anchor>
          </Link>
        </Banner>
      </Container>
    </ThemeProvider>
  )
}

export { HomeContainer }
export type { Props as HomeContainerProps }
