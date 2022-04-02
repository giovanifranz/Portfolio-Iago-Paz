import styled from 'styled-components'

export const Container = styled.section`
  margin: -3px auto;
  height: 100hw;
  width: 100vw;
  max-width: 1980px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ theme }) =>
    theme.orientation === 'left' ? 'row-reverse' : 'row'};

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
