import { useCallback, useState, type ReactNode } from "react";
import { InitialLoadContext } from "./InitialLoadContext";

export function InitialLoadProvider({ children }: { children: ReactNode }) {
  const [hasLoadedOnce, setHasLoadedOnce] = useState<boolean>(false);

  const setHasLoaded = useCallback(() => {
    setHasLoadedOnce(true);
  }, []);

  return (
    <InitialLoadContext.Provider value={{ hasLoadedOnce, setHasLoaded }}>
      {children}
    </InitialLoadContext.Provider>
  );
}