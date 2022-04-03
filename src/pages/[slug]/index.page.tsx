import { Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Container } from '../../styles'
import { Footer } from '../../components'
import { Heading } from './styles'
import { useWindowsSize } from '../../hooks/useWindowsSize'
import { portifolioMap, PortifolioProps } from './portifolioMap'

type Props = '/bryan-vitorio'

export default function Portifolio() {
  const { isDesktop, width } = useWindowsSize()
  const { asPath } = useRouter()

  const portifolio = portifolioMap[asPath as Props] as PortifolioProps
  return (
    <Fragment>
      {portifolio !== undefined && (
        <Container>
          <Heading>
            {portifolio.title}
            <br />
            <br />
            {portifolio.description}
          </Heading>
          {portifolio.images.map(({ alt, height, isMobile }, index) => {
            const key = index + 1
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
                  src={`/portifolio${asPath}/${key}.png`}
                  alt={alt}
                  width={width}
                  height={heightImage()}
                />
              )
            } else return null
          })}
        </Container>
      )}
      <Footer />
    </Fragment>
  )
}
