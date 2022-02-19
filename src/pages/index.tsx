import { BlocoHome } from '../components'
import { Fragment } from 'react'
const Home = () => {
  return (
    <Fragment>
      <BlocoHome
        title="Bryan Vitório"
        description="Identidade Visual 2022"
        image="/Home/bryan.png"
        href="/bryan-vitorio"
        orientation="left"
      />
      <BlocoHome
        title="Yamakaze Lámen Tradicional"
        description="Identidade Visual 2022"
        image="/Home/yamakaze.png"
        href="/yamakaze"
        orientation="right"
      />
      <BlocoHome
        title="Bruno Barsante"
        description="Cultura Marcial Logo 2021"
        image="/Home/bruno.png"
        href="/bruno-barsante"
        orientation="left"
      />
      <BlocoHome
        title="Monique Batista"
        description="Psicóloga Layout 2021"
        image="/Home/monique.png"
        href="/monique-batista"
        orientation="right"
      />
      <BlocoHome
        title="WhatAnime.Org"
        description="Layout Logo 2021"
        image="/Home/whatanime.png"
        href="/whatanime"
        orientation="left"
      />

      <BlocoHome
        title="Oriental Wing Chun"
        description="Layout Identidade Visual 2021"
        image="/Home/oriental.png"
        href="/oriental-wing-chun"
        orientation="right"
      />
      <BlocoHome
        title="Carol Figueiredo Fotografia Urbana"
        description="Layout Identidade Visual 2021"
        image="/Home/carol.png"
        href="/carol-figueiredo"
        orientation="left"
      />
      <BlocoHome
        title="Highlander Tech"
        description="Layout 2021"
        image="/Home/highlander.png"
        href="/highlander"
        orientation="right"
      />
    </Fragment>
  )
}

export default Home
