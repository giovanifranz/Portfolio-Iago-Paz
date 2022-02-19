import { useState, useEffect } from 'react'

export default function useWindowWidth() {
  const [windowsWidth, setWindowsWidth] = useState<number>()
  function handleResize() {
    setWindowsWidth(window.innerWidth)
  }

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowsWidth as number
}
