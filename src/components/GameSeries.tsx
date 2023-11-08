import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import useSeries from '../hooks/useSeries';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
  gameId: number;
}

const GameSeries = ({ gameId }: Props) => {
  const { data, error, isLoading } = useSeries(gameId);
  const skeletons = [...Array(8).keys()];

  if (error) throw error;

  if (!data || !data.results || data.results.length === 0) {
    return null;
  }

  return (
    <Box>
      <Heading as='h1' marginY={5} fontSize='3xl'>
        More from this Series
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.results.map((series) => (
          <GameCardContainer key={series.id}>
            <GameCard game={series} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameSeries;
