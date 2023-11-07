import { Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import ExpandableText from './ExpandableText';
import GameAttributes from './GameAttributes';

// function GameDescription({ game }) {
//   return <div dangerouslySetInnerHTML={{ __html: game.description }} />;
// }

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      {/* <GameDescription game={game} /> */}
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
