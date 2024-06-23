import { SearchListType } from '@/types/readApiDataType'
import { create } from 'zustand'

interface SearchState {
  keyword: string
  page: number
  status: number | null
  searchResult: SearchListType

  setKeyword: (keyword: string) => void
  setPage: (page: number) => void
  setStatus: (status: number | null) => void
  setSearchResult: (searchResult: SearchListType) => void

  resetSearchState: () => void
}

export const useSearchStore = create<SearchState>((set) => ({
  keyword: '',
  page: 0,
  status: null,
  searchResult: {
    totalCount: 0,
    nowPage: 0,
    maxPage: 0,
    isLast: false,
    goodsList: [],
  },

  setKeyword: (keyword) => set({ keyword }),
  setPage: (page) => set({ page }),
  setStatus: (status) => set({ status }),
  setSearchResult: (searchResult) => set({ searchResult }),

  resetSearchState: () =>
    set({
      keyword: '',
      page: 0,
      status: null,
      searchResult: {
        totalCount: 0,
        nowPage: 0,
        maxPage: 0,
        isLast: false,
        goodsList: [],
      },
    }),
}))
