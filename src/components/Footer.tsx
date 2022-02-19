import { Fragment } from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <Fragment>
      <footer>
        <Link href="mailto:contato@iagopaz.com.br">
          <a>contato@iagopaz.com.br</a>
        </Link>

        <Link href="https://api.whatsapp.com/send?phone=55519%2092114211">
          <a>(51) 9 9211 - 4211</a>
        </Link>
      </footer>
      <style jsx>{`
        footer {
          background: #a9a9a9;
          botton: 0;
          left: 0;
          right: 0;
          margin-top: -3px;
          padding: 30px 100px;
          display: flex;
          align-items: center;
        }

        a {
          color: var(--white);
          margin-right: 130px;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        a:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          footer {
            margin-top: 10px;
            padding: 15px 10px;
          }

          a {
            font-size: 8px;
            margin-right: 30px;
          }
        }
      `}</style>
    </Fragment>
  )
}
