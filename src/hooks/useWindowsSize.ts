import { useEffect, useState } from 'react'

export function useWindowsSize() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return { isDesktop: width > 1000, width }
}
