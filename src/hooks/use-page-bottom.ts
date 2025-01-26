import { useEffect, useState } from 'react'

const TRIGGER_OFFSET = 250

export const usePageBottom = () => {
  const [reachedBottom, setReachedBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offsetHeight = document.documentElement.offsetHeight
      const innerHeight = window.innerHeight
      const scrollTop = document.documentElement.scrollTop

      const hasReachedBottom =
        offsetHeight - (innerHeight + scrollTop) <= TRIGGER_OFFSET

      setReachedBottom(hasReachedBottom)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return reachedBottom
}
