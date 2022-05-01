import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import { Footer } from '../../components'
import { useWindowsSize } from '../../hooks/useWindowsSize'
import { Container } from '../../styles'

import { portifolioMap } from './portifolioMap'
import { Heading } from './styles'
import type { PageProps, PortifolioPageProps, PortifolioProps } from './types'

export default function Portifolio({ portifolio }: PortifolioPageProps) {
  const { isDesktop } = useWindowsSize()

  if (portifolio === null) {
    return null
  }

  return (
    <>
      <Container>
        <Heading>
          {portifolio.title}
          <br />
          <br />
          {portifolio.description}
        </Heading>
        {portifolio.images.map(({ alt, isMobile }, index) => {
          const heightImage = () => {
            if (!isDesktop && isMobile) return true
            if (isDesktop && !isMobile) return true
            if (isMobile === undefined) return true

            return false
          }

          if (heightImage()) {
            return (
              <img
                key={index}
                src={`/portifolio${portifolio.href}/${index + 1}.png`}
                alt={alt}
                width="100%"
                height="100%"
              />
            )
          }
          return null
        })}
      </Container>
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Object.keys(portifolioMap).map((key) => ({
    params: { slug: key },
  })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (typeof params?.slug === 'string') {
    const portifolio = portifolioMap[params?.slug as PageProps] as PortifolioProps
    return {
      props: {
        portifolio,
      },
      revalidate: 60 * 60 * 24,
    }
  }

  return {
    props: {
      portifolio: null,
    },
    revalidate: 5,
  }
}
