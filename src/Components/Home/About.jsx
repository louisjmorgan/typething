/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import {
  Box, Center, Flex, Hide, Image, Show, Text, useColorMode,
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

const aboutImage = cld.image('v1664791356/typething/images/wendy-open.jpg').resize(scale().height(720)).toURL();

function About({ aboutRef }) {
  const { colorMode } = useColorMode();

  return (
    <Flex
      pt="7.5rem"
      direction="column"
      align="center"
      as="section"
      ref={aboutRef}
      position="relative"
      minHeight="100vh"
    >
      <Text
        textStyle="heading"
      >
        About us
      </Text>
      <Flex
        p={[10, 20, 20, 20]}
        pt={[10, 10, 10, 10, 10]}
        direction={['column', 'column', 'column', 'row', 'row']}
        width="100%"
        justify="center"
        align={['center', 'center', 'center', 'start', 'start']}
        height="100%"
        gap={10}
      >
        <Show above="lg">
          <OffsetBox
            top="-5%"
            left="-5%"
            order={[3, 3, 3, 1, 1]}
          >
            <Image
              src={aboutImage}
              objectFit="cover"
              m={0}
              maxHeight="60vh"
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
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Ut aliquam purus sit amet luctus venenatis lectus magna. Ultrices in iaculis nunc sed augue lacus viverra. Purus ut faucibus pulvinar elementum integer enim neque. Urna neque viverra justo nec ultrices dui sapien eget mi. Tincidunt ornare massa eget egestas purus. Integer quis auctor elit sed vulputate. Fermentum posuere urna nec tincidunt praesent semper. Aliquam eleifend mi in nulla.
              </Text>
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
