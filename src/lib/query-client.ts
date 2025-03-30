import { keepPreviousData, QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
      // staleTime: 1000 * 5, // 5 segundos
      refetchOnWindowFocus: 'always',
      placeholderData: keepPreviousData,
    },
  },
})
