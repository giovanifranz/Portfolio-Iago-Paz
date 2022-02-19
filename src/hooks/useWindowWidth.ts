import { useState, useEffect } from 'react'

function getWindowWidht(): number {
  if (typeof window !== 'undefined') {
    return window.innerWidth
  }

  return 1980
}

export default function useWindowWidth() {
  const [windowsWidth, setWindowsWidth] = useState(getWindowWidht())

  useEffect(() => {
    function handleResize() {
      setWindowsWidth(getWindowWidht())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowsWidth
}
