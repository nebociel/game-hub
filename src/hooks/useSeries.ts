import { useQuery } from '@tanstack/react-query';
import Game from '../entities/Game';
import APIClient from '../services/api-client';

const useSeries = (gameId: number) => {
  const apiClient = new APIClient<Game>(`/games/${gameId}/game-series`);

  return useQuery({
    queryKey: ['game-series', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useSeries;
