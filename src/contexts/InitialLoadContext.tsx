import { createContext } from 'react';

interface InitialLoadContextType {
  hasLoadedOnce: boolean;
  setHasLoaded: () => void;
}

export const InitialLoadContext = createContext<InitialLoadContextType | undefined>(undefined);
