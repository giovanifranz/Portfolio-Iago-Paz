import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import useWindowWidth from '../hooks/useWindowWidth'

interface BlocoHomeProps {
  title: string
  description: string
  image: string
  href: string
  orientation: 'left' | 'right'
}

export function BlocoHome({
  title,
  description,
  image,
  href,
  orientation
}: BlocoHomeProps) {
  const width = useWindowWidth()

  return (
    <Fragment>
      <section>
        <article>
          <p>
            {title} <br />
            <br /> {description}
          </p>
        </article>
        <Link href={href}>
          <a>
            <Image
              src={image}
              alt={title}
              height={width > 768 ? 700 : 210}
              width={width > 768 ? 1120 : 250}
            />
          </a>
        </Link>
      </section>
      <style jsx>{`
        section {
          margin-top: -3px;
          margin: auto;
          max-width: 1980px;
          display: flex;
          justify-content: space-between;
          flex-direction: ${orientation === 'left' ? 'row-reverse' : 'row'};
        }

        article {
          width: 30%;
          margin: 50px;
        }

        @media (max-width: 768px) {
          section {
            margin-top: -1px;
            min-width: 360px;
          }
          article {
            width: 95px;
            margin: 25px;
          }

          p {
            font-size: 8px;
          }
        }
      `}</style>
    </Fragment>
  )
}
