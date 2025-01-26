import { create } from 'zustand'

export interface CompaniesFiltersState {
  page: number
  setPage: (value: number) => void
  id: string
  setId: (value: string) => void
  name: string
  setName: (value: string) => void
  reset: () => void
}

const initialState = {
  page: 1,
  name: '',
  id: '',
}

export const useCompaniesFilters = create<CompaniesFiltersState>()((set) => ({
  ...initialState,
  setPage: (value) => {
    set({
      page: value,
    })
  },
  setName: (value) => {
    set({
      name: value,
    })
  },
  setId: (value) => {
    set({
      id: value,
    })
  },
  reset: () => {
    set(initialState)
  },
}))
