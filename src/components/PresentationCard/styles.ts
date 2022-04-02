import styled from 'styled-components'

export const Container = styled.section`
  width: 360px;
  height: 715px;
  margin: 0 auto;
  padding-top: 30px;
  visibility: ${({ theme }) => (theme.isOpen ? 'visible' : 'hidden')};
  opacity: ${({ theme }) => (theme.isOpen ? 1 : 0)};
  transition: ${({ theme }) => (theme.isOpen ? 0.6 : 0.3) + 's'};

  @media (max-width: 768px) {
    width: 285px;
  }
`

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`

export const Text = styled.p`
  width: 170px;
  font-size: 16px;
  line-height: 17px;
  letter-spacing: 0.1em;
`

export const Contato = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  margin-top: 125px;
`
