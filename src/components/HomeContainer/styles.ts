import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
  height: 100%;
  width: 100vw;
  max-width: 1980px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ theme }) => (theme.orientation === 'left' ? 'row-reverse' : 'row')};
  visibility: ${({ theme }) => (theme.isOpen ? 'hidden' : 'visible')};
  opacity: ${({ theme }) => (theme.isOpen ? 0 : 1)};
  transition: ${({ theme }) => (theme.isOpen ? 0.3 : 0.6) + 's'};

  @media (max-width: 768px) {
    min-width: 360px;
  }
`

export const Article = styled.article`
  width: 45%;

  @media (max-width: 768px) {
    width: 165px;
  }
`

export const Banner = styled.div`
  height: 100%;
  width: 1120px;

  @media (max-width: 768px) {
    width: 70%;
  }
`

export const Text = styled.p`
  padding-top: 50px;
  padding-left: 50px;
  font-size: 14px;

  @media (max-width: 768px) {
    padding-top: 20px;
    padding-left: 0px;
    width: 95px;
    font-size: 8px;
    margin: 0 auto;
  }
`

export const Anchor = styled.div`
  position: relative;
  min-width: 252px;
  min-height: 200px;

  width: 1120px;
  height: 700px;

  @media (max-width: 1280px) {
    width: 896px;
    height: 560px;
  }

  @media (max-width: 1024px) {
    width: 537px;
    height: 336px;
  }

  @media (max-width: 768px) {
    width: auto;
    height: auto;
  }
`
