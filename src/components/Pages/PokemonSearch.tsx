import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { PokemonCard } from '@/components/ui/PokemonCard/PokemonCard';
import { ErrorState } from '@/components/Layout/ErrorState';
import { motion, AnimatePresence } from 'motion/react';
import { type Pokemon } from '@/types/pokemon';
import { useQuery } from '@tanstack/react-query';
import { pokemonQueries } from '@/queries/pokemon';

interface PokemonSearchProps {
  caughtList: Pokemon[];
  onCatch: (pokemon: Pokemon) => void;
}

export function PokemonSearch({ caughtList, onCatch }: PokemonSearchProps) {
  const [query, setQuery] = useState('');
  const { data: result, error, isLoading } = useQuery(pokemonQueries.search(query))

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // Not yet implemented
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-4 px-4">
      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          {isLoading ? (
            <Loader2 className="w-5 h-5 text-red-500 animate-spin" />
          ) : (
            <Search className="w-5 h-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
          )}
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type Pokémon name"
          className="w-full pl-14 pr-6 py-5 bg-white rounded-3xl border-2 border-gray-100 focus:border-red-500 focus:outline-none transition-all shadow-sm text-lg placeholder:text-gray-300"
        />
        <button 
          type="submit"
          className="absolute cursor-pointer right-3 top-2 bottom-2 px-6 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-600 active:scale-95 transition-all shadow-lg shadow-red-100"
        >
          Search
        </button>
      </form>

      <AnimatePresence mode="wait">
        {error ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <ErrorState message={error.message} />
          </motion.div>
        ) : result ? (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="pt-4"
          >
            <PokemonCard 
              pokemon={result} 
              isCaught={caughtList.some(e => e.id === result.id)} 
              onCatch={onCatch} 
            />
          </motion.div>
        ) : !isLoading && (
          <motion.div 
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 space-y-4"
          >
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-8 h-8 text-gray-200" />
            </div>
            <p className="text-gray-400 font-medium italic">Enter a name to begin your search...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
