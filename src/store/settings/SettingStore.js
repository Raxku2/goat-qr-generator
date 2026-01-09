import { create } from 'zustand'

const useSettings = create((set) => ({
  NavMenuVisibility: false,
  setNavMenu: (state) => set({NavMenuVisibility: state}),
  toggleNavMenu: () => set((state) => ({NavMenuVisibility: !state.NavMenuVisibility})),
  
}))

export default useSettings