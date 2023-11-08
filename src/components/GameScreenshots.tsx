import { Box, Heading, Image } from '@chakra-ui/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import useScreenshots from '../hooks/useScreenshots';
import '@splidejs/react-splide/css';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error || !data) throw error;

  const images = data.results.map((file) => ({
    id: file.id,
    image: file.image,
  }));

  if (images.length === 0) return null;

  return (
    <Box overflow='hidden' borderRadius='md' boxShadow='xl'>
      <Heading as='h1' marginY={5} fontSize='3xl'>
        Game Screenshots
      </Heading>
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          perPage: 3,
          breakpoints: {
            767: {
              perPage: 1,
            },
          },
          width: '100%',
          gap: '1rem',
          lazyLoad: 'sequential',
          pagination: false,
        }}
        aria-label='Game Screenshots'
      >
        {images.map((img) => (
          <SplideSlide key={img.id}>
            <Image
              src={img.image}
              alt={`Screenshot ${img.id}`}
              cursor='pointer'
              loading='lazy'
              borderRadius='md'
            />
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
};

export default GameScreenshots;
