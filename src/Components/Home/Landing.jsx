/* eslint-disable react/prop-types */
import {
  Box, Button, DarkMode, Flex, Icon, Spacer, Text,
} from '@chakra-ui/react';
import { FiCornerRightDown } from 'react-icons/fi';
import Carousel from '../Atoms/Carousel';
import CTAButtons from './CTAButtons';

const prefix = 'v1664791356/typething/images/';

const images = [
  'nac-dusk-2.jpg',
  'kallida-far-2.jpg',
  'green-smoke.jpg',
  'bangers-pink.jpg',
  'noisilly-people.jpg',
  'nac-piano.jpg',
];

function Landing({ aboutRef }) {
  const handleDownBtn = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <DarkMode>
      <Box position="relative">
        <Carousel images={images.map((img) => prefix + img)} />
        <Flex
          minHeight="100vh"
          direction="column"
          align="center"
          justify="center"
          as="section"
          width="100%"
          p={[5, 10, '10rem', '10rem']}
          background="transparent"
          color="white"
        >
          <Spacer flex={2} />
          <Flex
            backdropFilter="blur(1px)"
            direction="column"
            align="center"
            justify="start"
            borderRadius="40%"
            flex={1}
          >
            <Box
              maxWidth="60ch"
              zIndex={3}
              p={10}
              height="100%"
            >
              <Text
                fontSize="3rem"
                textStyle="logo"
                textAlign="center"
              >
                typething.
              </Text>
              <Text textAlign="center">
                {`A collective of artists, engineers and scientists creating immersive experiences 
          at the intersection of art, tech and play.`}
              </Text>
            </Box>
            <CTAButtons />
            <Button
              variant="ghost"
              m={10}
              onClick={handleDownBtn}
            >
              <Text>Find out more</Text>
              <Icon
                ml={2}
                display="block"
                as={FiCornerRightDown}
              />
            </Button>
          </Flex>

        </Flex>
      </Box>
    </DarkMode>
  );
}

export default Landing;
