import { ImageWithFallback } from '../ImageWithFallback';
import { AlertCircle, RefreshCcw } from 'lucide-react';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ 
  message = "Team Rocket has blocked the connection! Please try again later.", 
  onRetry 
}: ErrorStateProps) {
  return (
    <div role="alert" className="flex flex-col items-center justify-center p-8 min-h-[400px] text-center space-y-6">
      <div className="relative w-48 h-48 bg-red-100 rounded-full flex items-center justify-center overflow-hidden">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1727374647062-62d19c60ef62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwbW9uc3RlciUyMHNpbGhvdWV0dGUlMjBmb3Jlc3R8ZW58MXx8fHwxNzcwNzUwOTQ5fDA" 
          alt="Error State"
          className="w-full h-full object-cover mix-blend-multiply opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <AlertCircle className="w-16 h-16 text-red-500" />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">Oh No!</h2>
        <p className="text-gray-600 max-w-xs">{message}</p>
      </div>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="flex items-center gap-2 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
        >
          <RefreshCcw className="w-4 h-4" />
          Try Again
        </button>
      )}
    </div>
  );
};
