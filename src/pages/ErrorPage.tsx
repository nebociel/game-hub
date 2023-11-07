import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError() as AxiosError;

  // Function to provide a more detailed message based on the error status code
  const getErrorMessage = (error: AxiosError) => {
    if (!isRouteErrorResponse(error)) {
      return 'An unexpected error occurred. Please try again later.';
    }

    switch (error.status) {
      case 404:
        return 'The page you’re looking for was not found.';
      case 500:
        return 'There’s a problem on our end. We’re working on it—please come back later.';
      default:
        return 'An error occurred. Please try again or contact support if the problem persists.';
    }
  };

  return (
    <>
      <NavBar />
      <VStack spacing={4} align='center' justify='center' height='80vh'>
        <Box textAlign='center' py={10} px={6}>
          <Heading
            display='inline-block'
            as='h2'
            size='2xl'
            bgGradient='linear(to-r, teal.400, teal.600)'
            backgroundClip='text'
          >
            {error.status === 404 ? 'Oops! 404' : 'Error'}
          </Heading>
          <Text fontSize='18px' mt={3} mb={2}>
            {getErrorMessage(error)}
          </Text>
          <Button colorScheme='teal' variant='solid' as={Link} to='/'>
            Go to Home
          </Button>
        </Box>
      </VStack>
    </>
  );
};

export default ErrorPage;
