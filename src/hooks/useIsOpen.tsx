import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useContext, useState } from 'react'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

type IsOpenProviderProps = {
  children: ReactNode
}

const IsOpenContext = createContext({ isOpen: true } as Props)

function IsOpenProvider({ children }: IsOpenProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>{children}</IsOpenContext.Provider>
}

const useIsOpen = () => useContext(IsOpenContext)

export { IsOpenProvider, IsOpenContext, useIsOpen }
export type { Props as IsOpenContextProps }
