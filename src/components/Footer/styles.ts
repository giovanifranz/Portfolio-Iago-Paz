import styled from 'styled-components'

export const Container = styled.footer`
  background: var(--gray);
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: -3px;
  padding: 30px 100px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 10px;
    padding: 15px 10px;
  }
`

export const Anchor = styled.a`
  color: var(--white);
  margin-right: 130px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    margin-right: 30px;
  }
`
