import { createRootRouteWithContext, Link } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { MainLayout } from '@/components/Layout/MainLayout'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  notFoundComponent: NotFound,
})

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-6xl font-black text-gray-200">404</p>
      <h2 className="mt-4 text-xl font-bold text-gray-800">Page not found</h2>
      <p className="mt-2 text-gray-500">This route doesn't exist. Maybe the Pokémon wandered off?</p>
      <Link to="/" className="mt-6 rounded-xl bg-red-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-600 transition-colors">
        Back to Discovery
      </Link>
    </div>
  )
}

function RootComponent() {
  useEffect(() => {
    const splash = document.getElementById('boot-splash')
    if (splash) {
      // Optional: fade out before removing
      splash.style.transition = 'opacity 0.3s ease-out'
      splash.style.opacity = '0'
      setTimeout(() => splash.remove(), 300)
    }
  }, [])

  return (
    <MainLayout />
  )
}