import { create } from 'zustand'

export interface DeleteUserState {
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

export const useDeleteUser = create<DeleteUserState>()((set) => ({
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
