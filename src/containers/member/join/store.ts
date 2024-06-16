import { create } from 'zustand'

interface JoinState {
  profileImage: File | null
  favoriteCategory: string
  nickname: string
  isValidNick: boolean
  userId: string
  isValidId: boolean
  password: string
  password2: string
  phoneNumber: string
  isValidated: boolean

  setProfileImage: (profileImage: File | null) => void
  setFavoriteCategory: (category: string) => void
  setNickname: (nickname: string) => void
  setIsValidNick: (isValidNick: boolean) => void
  setUserId: (userId: string) => void
  setIsValidId: (isValidId: boolean) => void
  setPassword: (password: string) => void
  setPassword2: (password2: string) => void
  setPhoneNumber: (phoneNumber: string) => void
  setIsValidated: (isVerified: boolean) => void

  resetJoinState: () => void
}

interface ModalState {
  isOpen: boolean

  setIsOpen: (isOpen: boolean) => void
}

export const useJoinStore = create<JoinState>((set) => ({
  profileImage: null,
  favoriteCategory: '',
  nickname: '',
  isValidNick: false,
  userId: '',
  isValidId: false,
  password: '',
  password2: '',
  phoneNumber: '',
  isValidated: false,

  setProfileImage: (profileImage) => set({ profileImage }),
  setFavoriteCategory: (category) => set({ favoriteCategory: category }),
  setNickname: (nickname) => set({ nickname }),
  setIsValidNick: (isValidNick) => set({ isValidNick }),
  setUserId: (userId) => set({ userId }),
  setIsValidId: (isValidId) => set({ isValidId }),
  setPassword: (password) => set({ password }),
  setPassword2: (password2) => set({ password2 }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setIsValidated: (isValidated) => set({ isValidated }),

  resetJoinState: () =>
    set({
      profileImage: null,
      favoriteCategory: '',
      nickname: '',
      isValidNick: false,
      userId: '',
      isValidId: false,
      password: '',
      password2: '',
      phoneNumber: '',
      isValidated: false,
    }),
}))

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,

  setIsOpen: (isOpen) => set({ isOpen }),
}))
