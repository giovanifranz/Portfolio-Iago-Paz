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
    isMobile?: boolean
    alt: string
    height?: number
  }[]
}

export interface PortifolioPageProps {
  portifolio: PortifolioProps
}
