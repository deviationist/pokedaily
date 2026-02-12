import { LoadingSkeleton as PokemonLoadingSkeleton } from '@/components/ui/PokemonCard/LoadingSkeleton';

export function LoadingSkeleton() {
  return (
    <div className="space-y-8 max-w-lg mx-auto py-4 px-4">
      <div className="flex flex-col items-center text-center space-y-2 mb-2">
        <p className="text-gray-600 text-sm">A wild Pokemon appeared! Will you add it to your collection?</p>
      </div>

      <PokemonLoadingSkeleton />
    </div>
  );
};
