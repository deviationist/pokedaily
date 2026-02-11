import { queryOptions } from '@tanstack/react-query'
import type { Pokemon } from '@/types/pokemon'

export const pokemonQueries = {
  search: (query: string) => 
    queryOptions({
      queryKey: ['pokemon', 'search', query],
      queryFn: async (): Promise<Pokemon> => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLocaleLowerCase()}?limit=1`);
        if (!response.ok) throw new Error('Failed to fetch pokemon')
        return await response.json();
      },
      enabled: query !== '',
    }),
  random: () => 
    queryOptions({
      queryKey: ['pokemon', 'random'],
      queryFn: async (): Promise<Pokemon> => {
        const pokemonId = Math.floor(Math.random() * 1025) + 1
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
        await delay(1000);

        if (!response.ok) throw new Error('Failed to fetch pokemon')
        return await response.json()
      },
    }),
};