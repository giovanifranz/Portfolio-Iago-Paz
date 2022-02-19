import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import useWindowWidth from '../hooks/useWindowWidth'

export function Header() {
  const width = useWindowWidth()
  return (
    <Fragment>
      <header>
        <Link href="/">
          <a>
            <Image
              src="/Assinatura.svg"
              alt="Iago Paz | UX & UI Design"
              width={width > 768 ? 305 : 200}
              height={width > 768 ? 100 : 65}
            />
          </a>
        </Link>

        <Image
          src="/Burguer_menu.png"
          alt="Menu Hamburguer"
          width={width > 768 ? 45 : 30}
          height={width > 768 ? 45 : 30}
        />
      </header>
      <style jsx>{`
        header {
          top: 0;
          left: 0;
          right: 0;
          position: absolute;
          z-index: 9999;
          padding: 60px 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media (max-width: 768px) {
          header {
            min-width: 360px;
            padding: 30px 25px;
          }
        }
      `}</style>
    </Fragment>
  )
}
