import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { toast } from 'sonner'
import type { Pokemon } from '@/types/pokemon'

interface AppState {
  caughtList: Pokemon[]
  handleCatch: (pokemon: Pokemon) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      caughtList: [],
      handleCatch: (pokemon: Pokemon) => {
        const isAlreadyCaught = get().caughtList.some(p => p.id === pokemon.id)
        if (isAlreadyCaught) {
          set(state => ({ caughtList: state.caughtList.filter(p => p.id !== pokemon.id) }))
          toast.info(`${pokemon.name.toUpperCase()} was released back into the wild.`)
        } else {
          set(state => ({ caughtList: [pokemon, ...state.caughtList] }))
          toast.success(`Gotcha! ${pokemon.name.toUpperCase()} was caught!`, { icon: '🟢' })
        }
      },
    }),
    {
      name: 'caughtPokemon',
    },
  ),
)
