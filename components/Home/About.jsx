/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import {
  Box, Center, Flex, Hide, Image, Show, Stack, Text, useColorMode,
} from '@chakra-ui/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';
import EventIcon from '../Atoms/EventIcon';
import OffsetBox from '../Atoms/OffsetBox';
import CTAButtons from './CTAButtons';

const prefix = 'v1664810334/typething/icons/';

const iconData = [
  {
    alt: 'Boomtown Fair',
    src: 'boomtown.jpg',
    link: 'https://www.boomtownfair.co.uk/',
  },
  {
    alt: 'Noisily Festival',
    src: 'noisily.png',
    link: 'https://noisilyfestival.com/',
  },
  {
    alt: 'Not a Cult Festival',
    src: 'nac.png',
    link: 'https://notacult.co.uk/',
  },
  {
    alt: 'Red Bull Music',
    src: 'redbull.jpg',
    link: 'https://www.redbull.com/gb-en/tags/music',
  },
  {
    alt: 'Kallida Festival',
    src: 'kallida.png',
    link: 'https://kallida.co.uk/',
  },
  {
    alt: 'Illuminte the Gardens',
    src: 'illuminate.png',
    link: 'https://www.illuminatethegardens.co.uk/',
  },
];

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dzzhteqkx',
  },
});

const icons = iconData.map((icon) => ({
  ...icon,
  src: cld.image(prefix + icon.src).resize(scale().height(40)).toURL(),
}));

const aboutImage = cld.image('v1664791356/typething/images/noisily-setup.jpg').resize(scale().height(720)).toURL();

function About({ aboutRef }) {
  const { colorMode } = useColorMode();

  return (
    <Flex
      pt="5rem"
      direction="column"
      align="center"
      as="section"
      ref={aboutRef}
      position="relative"
    >
      <Text
        textStyle="heading"
      >
        About us
      </Text>
      <Flex
        p={[5, 10, 20, 20]}
        pt={[10, 10, 10, 10, 10]}
        direction={['column', 'column', 'column', 'row', 'row']}
        width="100%"
        align={['center', 'center', 'center', 'start', 'start']}
        justify="center"
        gap={10}
        overflow="hidden"
      >
        <Show above="lg">
          <OffsetBox
            top="-5%"
            left="-5%"
            order={[3, 3, 3, 1, 1]}
          >
            <Image
              src={aboutImage}
              alt="typething collective constructing an installation"
              objectFit="cover"
              m={0}
              height="100%"
              width="100%"
              borderRadius="0.25rem"
              boxShadow={`0 5px 10px ${colorMode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.2)'}`}
            />

          </OffsetBox>
        </Show>
        <Flex
          direction="column"
          gap={5}
          order={[1, 1, 1, 1, 2]}
        >
          <OffsetBox
            top="-5%"
            left="5%"
          >
            <Box
              px={[10, 10, 20, 20]}
              py={10}
              boxShadow={`0 5px 10px ${colorMode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.2)'}`}
              width="100%"
            >
              <Stack spacing={5}>
                <Text>
                  Typething is a collective of artists, engineers and makers that develop experimental art installations and design unique participatory experiences. We combine our skills across the disciplines of digital arts, software development, design and fabrication to create our work and showcase it at an ever-expanding collection of events, festivals and light shows. 
                </Text>
                <Text>
                  Our artistic philosophy centres around creativity and play, and the idea that, given the right tools and environment, anyone can express themselves and create mesmerising multisensory experiences for others.  We seek to instil childlike joy and wonder in our audience, a universal feeling that transcends age and experience.
                </Text>
                <Text>
                  We are passionate about facilitating creative collaboration and are always expanding our network of event partners, performers, light artists and set designers.
                </Text>
              </Stack>
              <Text m={5} fontWeight="bold" textAlign="center">
                Our event partners have included:
              </Text>
              <Flex align="center" wrap="wrap" justify="center">
                {icons.map((icon, index) => (
                  <EventIcon key={index} icon={icon} />
                ))}
              </Flex>
            </Box>
          </OffsetBox>
          <Box
            pl={['0', '0', '0', '0', '5%']}
          >
            <Center>
              <CTAButtons variant="solid" />
            </Center>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default About;
