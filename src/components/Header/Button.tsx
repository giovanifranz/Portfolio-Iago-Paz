import { Burguer } from './styles'
import { useIsOpen } from '../../hooks/useIsOpen'
import { ThemeProvider } from 'styled-components'

interface Props {
  isDesktop: boolean
}

function Button({ isDesktop }: Props) {
  const { isOpen, setIsOpen } = useIsOpen()

  const theme = {
    isOpen,
    isDesktop
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
