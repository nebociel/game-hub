import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

// interface Props {
//   gameQuery: GameQuery;
// }

const GameHeading = () => {
  const genreId = useGameQueryStore((selector) => selector.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore(
    (selector) => selector.gameQuery.platformId
  );
  const platform = usePlatform(platformId);

  // Games -- initially
  // Action Games -- genre
  // Xbox Games -- platform
  // Xbox Action Games -- platform + genre

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
