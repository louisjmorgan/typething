import { Box, Image, Text } from '@chakra-ui/react';
import NextImage from 'next/image'
import Link from 'next/link';
import TypethingLogo from '../../public/logo.svg'

function Logo() {
  return (
    <Box
      as={Link}
      href="/"
      // color={['white', 'white', 'primary.500', 'primary.500']}
    >
      {/* <Text
        fontSize="lg"
        fontWeight="bold"
        textStyle="logo"
      >
        typething
      </Text> */}
      <Image
        as={NextImage}
        src={TypethingLogo}
        alt="typething logo"
        width={[30, 30, 50]}
        height={[30, 30, 50]}
      />
    </Box>
  );
}

export default Logo;
