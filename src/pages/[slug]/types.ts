export type PageProps =
  | 'bryan-vitorio'
  | 'yamakaze'
  | 'bruno-barsante'
  | 'monique-batista'
  | 'whatanime'
  | 'carol-figueiredo'
  | 'highlander'

export interface PortifolioProps {
  href: string
  title: string
  description: string
  images: {
    alt: string
  }[]
}

export interface PortifolioPageProps {
  portifolio: PortifolioProps
}
