import { create } from 'zustand'

export interface DeleteCompanyState {
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
  id: number | null
  setId: (value: number | null) => void
  reset: () => void
}

const initialState = {
  isModalOpen: false,
  id: null,
}

export const useDeleteCompany = create<DeleteCompanyState>()((set) => ({
  ...initialState,
  setIsModalOpen: (value) => {
    set({
      isModalOpen: value,
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
