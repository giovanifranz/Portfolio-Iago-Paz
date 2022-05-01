import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react'

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

  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen, setIsOpen])
  return <IsOpenContext.Provider value={value}>{children}</IsOpenContext.Provider>
}

const useIsOpen = () => useContext(IsOpenContext)

export { IsOpenContext, IsOpenProvider, useIsOpen }
export type { Props as IsOpenContextProps }
