import { ImageWithFallback } from '../../ImageWithFallback';
import { Check, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { type Pokemon } from '@/types/pokemon';
import PokeballIcon from '../../PokeballIcon';

interface PokemonCardProps {
  pokemon: Pokemon;
  isCaught?: boolean;
  onCatch?: (pokemon: Pokemon) => void;
  variant?: 'large' | 'small';
}

const typeColors: Record<string, string> = {
  fire: 'bg-orange-100 text-orange-600 border-orange-200',
  water: 'bg-blue-100 text-blue-600 border-blue-200',
  grass: 'bg-green-100 text-green-600 border-green-200',
  electric: 'bg-yellow-100 text-yellow-600 border-yellow-200',
  psychic: 'bg-purple-100 text-purple-600 border-purple-200',
  ice: 'bg-cyan-100 text-cyan-600 border-cyan-200',
  dragon: 'bg-indigo-100 text-indigo-600 border-indigo-200',
  dark: 'bg-gray-700 text-gray-100 border-gray-800',
  fairy: 'bg-pink-100 text-pink-600 border-pink-200',
  normal: 'bg-slate-100 text-slate-600 border-slate-200',
  fighting: 'bg-red-100 text-red-600 border-red-200',
  flying: 'bg-sky-100 text-sky-600 border-sky-200',
  poison: 'bg-fuchsia-100 text-fuchsia-600 border-fuchsia-200',
  ground: 'bg-amber-100 text-amber-600 border-amber-200',
  rock: 'bg-stone-100 text-stone-600 border-stone-200',
  bug: 'bg-lime-100 text-lime-600 border-lime-200',
  ghost: 'bg-violet-100 text-violet-600 border-violet-200',
  steel: 'bg-zinc-100 text-zinc-600 border-zinc-200',
};

export function PokemonCard({ 
  pokemon, 
  isCaught = false, 
  onCatch,
  variant = 'large'
}: PokemonCardProps) {
  const imageUrl = pokemon.sprites.other['official-artwork'].front_default;

  if (variant === 'small') {
    return (
      <div className="group relative bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center overflow-hidden">
        <div className="w-24 h-24 mb-3 relative">
          <ImageWithFallback src={imageUrl} alt={pokemon.name} className="w-full h-full object-contain z-10 relative" />
          <div className="absolute inset-0 bg-gray-50 rounded-full scale-110 -z-0 opacity-50 group-hover:scale-125 transition-transform" />
        </div>
        <h3 className="capitalize text-sm font-bold text-gray-800 truncate w-full text-center">
          {pokemon.name}
        </h3>
        <span className="text-[10px] text-gray-400 font-mono mb-3">#{pokemon.id.toString().padStart(3, '0')}</span>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onCatch?.(pokemon);
          }}
          className={`w-full cursor-pointer py-2 rounded-xl flex items-center justify-center gap-2 transition-all ${
            isCaught 
              ? 'bg-red-50 text-red-500 hover:bg-red-100' 
              : 'bg-gray-100 text-gray-400 hover:bg-red-500 hover:text-white group/btn'
          }`}
        >
          {isCaught ? (
            <Trash2 className="w-4 h-4" />
          ) : (
            <PokeballIcon className="w-4 h-4" />
          )}
          <span className="text-xs font-black uppercase tracking-wider">
            {isCaught ? 'Release' : 'Catch'}
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-[3rem] p-8 shadow-2xl border border-gray-100 relative overflow-hidden group">
      {/* Dynamic Background */}
      <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 transition-colors duration-500 ${
        isCaught ? 'bg-red-500' : 'bg-blue-500'
      }`} />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-black text-gray-400 tracking-tighter">#{pokemon.id.toString().padStart(3, '0')}</span>
          <div className="flex gap-2">
            {pokemon.types.map((t) => (
              <span 
                key={t.type.name} 
                className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${typeColors[t.type.name] || 'bg-gray-100 text-gray-500'}`}
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center py-6">
          <motion.div 
            animate={isCaught ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.5 }}
            className="w-full aspect-square relative mb-6"
          >
            <ImageWithFallback 
              src={imageUrl} 
              alt={pokemon.name} 
              className={`w-full h-full object-contain drop-shadow-2xl transition-all duration-500 ${isCaught ? 'grayscale-0 scale-110' : 'grayscale-[0.3] group-hover:grayscale-0'}`} 
            />
            {isCaught && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-4 -right-4 bg-amber-400 text-white p-3 rounded-full shadow-lg border-4 border-white"
              >
                <Check className="w-6 h-6 stroke-[4]" />
              </motion.div>
            )}
          </motion.div>

          <h2 className="text-4xl font-black capitalize tracking-tight text-gray-900 mb-8">{pokemon.name}</h2>
          
          <button 
            onClick={() => onCatch?.(pokemon)}
            className={`w-full py-5 cursor-pointer rounded-[2rem] flex items-center justify-center gap-3 transition-all transform active:scale-95 relative overflow-hidden group/catch ${
              isCaught 
                ? 'bg-gray-900 text-white' 
                : 'bg-red-500 text-white shadow-xl shadow-red-200 hover:bg-red-600'
            }`}
          >
            <motion.div
              animate={!isCaught ? { rotate: [0, -10, 10, -10, 10, 0] } : {}}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
            >
              <PokeballIcon className={`w-7 h-7 text-white`} active={isCaught} />
            </motion.div>
            <span className="text-xl font-black uppercase tracking-tighter">
              {isCaught ? 'Added to Bag' : 'Catch'}
            </span>
            
            {!isCaught && (
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/catch:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
