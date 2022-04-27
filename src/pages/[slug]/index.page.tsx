import { Fragment } from 'react'
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Image from 'next/image'

import { Footer } from '../../components'
import { useWindowsSize } from '../../hooks/useWindowsSize'
import { Container } from '../../styles'

import { portifolioMap } from './portifolioMap'
import { Heading } from './styles'
import type { PageProps, PortifolioPageProps, PortifolioProps } from './types'

export default function Portifolio({ portifolio }: PortifolioPageProps) {
  const { isDesktop, width } = useWindowsSize()

  if (portifolio === null) {
    return null
  }

  return (
    <Fragment>
      <Container>
        <Heading>
          {portifolio.title}
          <br />
          <br />
          {portifolio.description}
        </Heading>
        {portifolio.images.map(({ alt, height, isMobile }, index) => {
          const heightImage = () => {
            if (!isDesktop && isMobile) {
              return height ? height : 220
            } else if (isDesktop && !isMobile) {
              return height ? height : 850
            } else if (isMobile === undefined) {
              return isDesktop ? 850 : 220
            }

            return 0
          }

          if (heightImage() > 0) {
            return (
              <Image
                key={index}
                src={`/portifolio${portifolio.href}/${index + 1}.png`}
                alt={alt}
                width={width}
                height={heightImage()}
              />
            )
          } else return null
        })}
      </Container>
      <Footer />
    </Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(portifolioMap).map((key) => ({
      params: { slug: key },
    })),
    fallback: false,
  }
}

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
