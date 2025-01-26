import { useEffect } from 'react'

export const useTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'React Template - ' + title
    return () => {
      document.title = prevTitle
    }
  })
}
