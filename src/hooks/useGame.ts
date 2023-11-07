import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Game } from './useGames';

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) =>
  useQuery({
    queryKey: ['game', slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 1000 * 60 * 60 * 24,
  });

export default useGame;
