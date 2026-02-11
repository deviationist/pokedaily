import { PokemonSearch } from '@/components/Pages/PokemonSearch';
import { useAppStore } from '@/store/appStore';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/search')({
  component: Index,
})

function Index() {
  const caughtList = useAppStore(state => state.caughtList)
  const handleCatch = useAppStore(state => state.handleCatch)
  return (
    <PokemonSearch caughtList={caughtList} onCatch={handleCatch} />
  );
}