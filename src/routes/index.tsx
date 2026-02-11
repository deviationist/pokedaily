import { useAppStore } from '@/store/appStore'
import { DailyDiscovery } from '@/components/Pages/DailyDiscovery/DailyDiscovery'
import { createFileRoute } from '@tanstack/react-router'
import { pokemonQueries } from '@/queries/pokemon'
import { LoadingSkeleton } from '@/components/Pages/DailyDiscovery/LoadingSkeleton'

export const Route = createFileRoute('/')({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(pokemonQueries.random()),
  component: Index,
  pendingComponent: LoadingSkeleton,
})

function Index() {
  const caughtList = useAppStore(state => state.caughtList)
  const handleCatch = useAppStore(state => state.handleCatch)

  return (
    <DailyDiscovery caughtList={caughtList} onCatch={handleCatch} />
  )
}