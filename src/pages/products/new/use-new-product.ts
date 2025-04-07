import { create } from 'zustand'

export interface NewProductState {
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
  reset: () => void
}

const initialState = {
  isModalOpen: false,
}

export const useNewProduct = create<NewProductState>()((set) => ({
  ...initialState,
  setIsModalOpen: (value) => {
    set({
      isModalOpen: value,
    })
  },
  reset: () => {
    set(initialState)
  },
}))
