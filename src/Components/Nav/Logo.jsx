import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Box
      w="100px"
      m={5}
      as={Link}
      to="/"
      // color={['white', 'white', 'primary.500', 'primary.500']}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        textStyle="logo"
      >
        typething
      </Text>
    </Box>
  );
}

export default Logo;
