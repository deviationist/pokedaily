interface PokemonCardSkeletonProps {
  variant?: 'large' | 'small';
}

export function LoadingSkeleton({ variant = 'large' }: PokemonCardSkeletonProps) {
  if (variant === 'small') {
    return (
      <div aria-busy="true" role="status" className="relative bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center overflow-hidden">
        <span className="sr-only">Loading Pokémon...</span>
        {/* Image skeleton */}
        <div className="w-24 h-24 mb-3 relative">
          <div className="w-full h-full bg-gray-200 rounded-full animate-pulse" />
        </div>
        
        {/* Name skeleton */}
        <div className="h-4 bg-gray-200 rounded-lg w-20 mb-1 animate-pulse" />
        
        {/* ID skeleton */}
        <div className="h-3 bg-gray-200 rounded w-12 mb-3 animate-pulse" />
        
        {/* Button skeleton */}
        <div className="w-full h-10 bg-gray-200 rounded-xl animate-pulse" />
      </div>
    );
  }

  return (
    <div aria-busy="true" role="status" className="w-full max-w-sm mx-auto bg-white rounded-[3rem] p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
      <span className="sr-only">Loading Pokémon...</span>
      {/* Background blur */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-10 bg-gray-300" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="h-8 w-16 bg-gray-200 rounded-lg animate-pulse" />
          <div className="flex gap-2">
            <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center py-6">
          {/* Image skeleton */}
          <div className="w-full aspect-square relative mb-6 max-w-[318px] max-h-[318px]">
            <div className="w-full h-full bg-gray-200 rounded-3xl animate-pulse" />
          </div>

          {/* Name skeleton */}
          <div className="h-10 bg-gray-200 rounded-xl w-48 mb-8 animate-pulse" />
          
          {/* Button skeleton */}
          <div className="w-full h-17 bg-gray-200 rounded-[2rem] animate-pulse" />
        </div>
      </div>
    </div>
  );
}