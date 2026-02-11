import { CaughtPokemon } from '@/components/Pages/CaughtPokemon';
import { useAppStore } from '@/store/appStore';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/collection')({
  component: Index,
})

function Index() {
  const caughtList = useAppStore(state => state.caughtList)
  const handleCatch = useAppStore(state => state.handleCatch)
  return (
    <CaughtPokemon caughtList={caughtList} onRelease={handleCatch} />
  );
}