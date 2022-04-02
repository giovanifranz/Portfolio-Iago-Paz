import styled from 'styled-components'

export const Container = styled.header`
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 9999;
  padding: 60px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    min-width: 360px;
    padding: 30px 25px;
  }
`

export const Burguer = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ theme }) => (theme.isDesktop ? '50px' : '25px')};
  height: ${({ theme }) => (theme.isDesktop ? '50px' : '25px')};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: ${({ theme }) => (theme.isDesktop ? '50px' : '25px')};
    height: ${({ theme }) => (theme.isDesktop ? '6px' : '4px')};
    background: var(--black);
    border-radius: 5px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ theme }) => (theme.open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ theme }) => (theme.open ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${({ theme }) =>
        theme.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
