/* eslint-disable react/prop-types */
import {
  Box, Button, DarkMode, Flex, Icon, Image, Show, Spacer, Text,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { FiCornerRightDown } from 'react-icons/fi';
import Carousel from '../Atoms/Carousel';
import CTAButtons from './CTAButtons';
import Logo from '../../public/logo.svg'

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
      <Box
        position="relative"
        minHeight="50rem"
        height="100vh"
        width="100%"
      >
        <Carousel images={images.map((img) => prefix + img)} />
        <Flex
          direction="column"
          align="center"
          justify="center"
          as="section"
          width="100%"
          height="100%"
          px="5rem"
          mt="3rem"
          background="transparent"
          color="white"
        >
          {/* <Show above="md">
            <Spacer flex={2} />
          </Show> */}
          <Flex
            backdropFilter="blur(1px)"
            direction="column"
            align="center"
            justify="center"
            borderRadius="40%"
            flex={1}
          >
            <Flex
              maxWidth="60ch"
              zIndex={3}
              justify="center"
              align="center"
              direction="column"
            >
              <Image
                as={NextImage}
                src={Logo}
                alt="typething logo"
                height={[150, 150, 200]}
                width={[150, 150, 200]}

                />
              <Text
                fontSize={['3rem', '3rem', '5rem']}
                textStyle="logo"
                textAlign="center"
              >
                Typething
              </Text>
              <Text textAlign="center">
                {`A collective of artists, engineers and scientists creating immersive experiences 
          at the intersection of art, tech and play.`}
              </Text>
            </Flex>
            <CTAButtons />
            <Button
              variant="ghost"
              m={[5, 5, 10]}
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
