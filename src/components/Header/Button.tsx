import { ThemeProvider } from 'styled-components'

import { useIsOpen } from '../../hooks/useIsOpen'

import { Burguer } from './styles'

interface Props {
  isDesktop: boolean
}

function Button({ isDesktop }: Props) {
  const { isOpen, setIsOpen } = useIsOpen()

  const theme = {
    isOpen,
    isDesktop,
  }

  return (
    <ThemeProvider theme={theme}>
      <Burguer onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </Burguer>
    </ThemeProvider>
  )
}

export { Button }
export type { Props as ButtonProps }
