import { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 500;

  if (!children) return <Text>No description available</Text>;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.slice(0, limit) + '...';

  return (
    <Text>
      {summary}
      <Button
        size='xs'
        marginLeft={1}
        fontWeight='bold'
        colorScheme='yellow'
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show Less' : 'Read More'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
