import React from 'react';
import { PokemonCard } from '@/components/ui/PokemonCard/PokemonCard';
import { Inbox } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { type Pokemon } from '@/types/pokemon';

interface CaughtPokemonProps {
  caughtList: Pokemon[];
  onRelease: (pokemon: Pokemon) => void;
}

export const CaughtPokemon: React.FC<CaughtPokemonProps> = ({ caughtList, onRelease }) => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4 space-y-8">
      <div className="flex items-end justify-between border-b border-gray-100 pb-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">My Collection</h1>
          <p className="text-gray-500">{caughtList.length} Pokemon Caught</p>
        </div>
      </div>

      {caughtList.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-24 text-center space-y-4"
        >
          <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center">
            <Inbox className="w-10 h-10 text-gray-200" />
          </div>
          <div className="space-y-1">
            <p className="text-lg font-bold text-gray-800">Your bag is empty!</p>
            <p className="text-gray-400 max-w-xs mx-auto">Go to the Discovery page to find and catch your first Pokemon.</p>
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {caughtList.map((pokemon) => (
              <motion.div
                key={pokemon.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <PokemonCard 
                  pokemon={pokemon} 
                  variant="small" 
                  isCaught={true} 
                  onCatch={() => onRelease(pokemon)} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};