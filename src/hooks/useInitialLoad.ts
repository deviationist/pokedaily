import { useContext } from "react";
import { InitialLoadContext } from "../contexts/InitialLoadContext";

export function useInitialLoad() {
  const context = useContext(InitialLoadContext);
  if (context === undefined) {
    throw new Error('useInitialLoad must be used within InitialLoadProvider');
  }
  return context;
}