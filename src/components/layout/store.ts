import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ModalState {
  search: boolean

  setSearch: (search: boolean) => void
}

interface NavState {
  currentPage: string

  setCurrentPage: (currentPage: string) => void
}

export const useHeaderModalState = create<ModalState>((set) => ({
  search: false,

  setSearch: (search) => set({ search }),
}))

export const useNavStore = create(
  persist<NavState>(
    (set) => ({
      currentPage: '',
      setCurrentPage: (currentPage) => set({ currentPage }),
    }),
    {
      name: 'currentPageStorage',
    },
  ),
)
