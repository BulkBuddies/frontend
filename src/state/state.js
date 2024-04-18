import { create } from 'zustand'

export const storeBulkBuddies = create((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (value) => set(() => ({ mobileMenuOpen: value })),
}))
