import { Grid, GridItem, Heading, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import ExpandableText from './ExpandableText';
import GameAttributes from './GameAttributes';
import GameScreenshots from './GameScreenshots';
import GameSeries from './GameSeries';
import GameTrailer from './GameTrailer';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  // if (isLoading) return <Spinner />;
  if (isLoading) return null;
  if (error || !game) throw error;

  return (
    <VStack spacing={5}>
      <Grid
        templateColumns={{
          base: '1fr',
          md: '1fr 1fr',
        }}
        gap={5}
      >
        <GridItem>
          <Heading as='h1' size='xl' marginBottom={5}>
            {game.name}
          </Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
        </GridItem>
      </Grid>
      <GameScreenshots gameId={game.id} />
      <GameSeries gameId={game.id} />
    </VStack>
  );
};

export default GameDetailPage;
