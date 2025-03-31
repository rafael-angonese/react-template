import { keepPreviousData, QueryClient } from '@tanstack/react-query'

const FIVE_MINUTES_IN_MILLISECONDS = 1000 * 60 * 5 // 5 minutes
// const FIVE_SECONDS_IN_MILLISECONDS = 1000 * 5 // 5 segundos

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: FIVE_MINUTES_IN_MILLISECONDS,
      refetchOnWindowFocus: true, // 'always'
      placeholderData: keepPreviousData,
    },
  },
})
