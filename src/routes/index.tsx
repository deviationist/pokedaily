import { useAppStore } from '@/store/appStore'
import { DailyDiscovery } from '@/components/Pages/DailyDiscovery/DailyDiscovery'
import { createFileRoute } from '@tanstack/react-router'
import { pokemonQueries } from '@/queries/pokemon'
import { LoadingSkeleton } from '@/components/Pages/DailyDiscovery/LoadingSkeleton'
import { ErrorState } from '@/components/Layout/ErrorState'
import { useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(pokemonQueries.random()),
  component: Index,
  pendingComponent: LoadingSkeleton,
  errorComponent: RouteError,
})

function RouteError({ reset }: { reset: () => void }) {
  const router = useRouter()
  return (
    <ErrorState
      message="Failed to load Pokémon. Please try again!"
      onRetry={() => {
        router.invalidate()
        reset()
      }}
    />
  )
}

function Index() {
  const caughtList = useAppStore(state => state.caughtList)
  const handleCatch = useAppStore(state => state.handleCatch)

  return (
    <DailyDiscovery caughtList={caughtList} onCatch={handleCatch} />
  )
}