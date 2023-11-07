import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Heading, Spinner, Text } from '@chakra-ui/react';

function GameDescription({ game }) {
  return <div dangerouslySetInnerHTML={{ __html: game.description }} />;
}

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
      {/* <GameDescription game={game} /> */}
    </>
  );
};

export default GameDetailPage;
