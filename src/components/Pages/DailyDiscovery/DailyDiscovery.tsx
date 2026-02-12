import { PokemonCard } from '@/components/ui/PokemonCard/PokemonCard';
import { LoadingSkeleton } from '@/components/ui/PokemonCard/LoadingSkeleton';
import { ErrorState } from '@/components/Layout/ErrorState';
import { RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { type Pokemon } from '@/types/pokemon';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { pokemonQueries } from '@/queries/pokemon';

interface DailyDiscoveryProps {
  caughtList: Pokemon[];
  onCatch: (pokemon: Pokemon) => void;
}

export function DailyDiscovery({ caughtList, onCatch }: DailyDiscoveryProps) {
  const queryClient = useQueryClient();
  const { data: pokemon, isFetching, error } = useQuery(pokemonQueries.random())
  const fetchRandomPokemon = () => queryClient.invalidateQueries({ queryKey: ['pokemon', 'random'] })

  return (
    <div className="space-y-8 max-w-lg mx-auto py-4 px-4">
      <div className="flex flex-col items-center text-center space-y-2 mb-2">
        <p className="text-gray-600 text-sm">A wild Pokemon appeared! Will you add it to your collection?</p>
      </div>

      <div aria-live="polite">
        <AnimatePresence mode="wait">
          {error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <ErrorState message={error.message} onRetry={fetchRandomPokemon} />
            </motion.div>
          ) : isFetching ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <LoadingSkeleton />
            </motion.div>
          ) : pokemon ? (
            <div className="space-y-6">
              <motion.div
                key={pokemon.id}
                exit={{ opacity: 0, y: -20 }}
              >
                <PokemonCard
                  pokemon={pokemon}
                  isCaught={caughtList.some(e => e.id === pokemon.id)}
                  onCatch={onCatch}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <div className="flex flex-col gap-3 pt-2">
                  <button
                    onClick={fetchRandomPokemon}
                    disabled={isFetching}
                    aria-label="Find another random Pokémon"
                    className="w-full cursor-pointer flex items-center justify-center gap-2 py-4 bg-gray-100 text-gray-600 font-bold rounded-[2rem] hover:bg-gray-200 transition-all active:scale-[0.98] disabled:opacity-50 group shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                  >
                    <RefreshCcw className={`w-5 h-5 transition-transform group-hover:rotate-180 duration-700 ${isFetching ? 'animate-spin' : ''}`} />
                    Find Another
                  </button>
                  <p className="text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    Keep exploring the tall grass
                  </p>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};
