/* eslint-disable quotes */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import {
  Box, IconButton, useBreakpointValue, useColorMode,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from "@cloudinary/url-gen/actions/resize";
// linear-gradient(120deg, #eaee44, #33d0ff)
// Settings for the slider
const settings = {
  // dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel({ images }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state

  const { colorMode } = useColorMode();

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dzzhteqkx',
    },
  });

  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = images.map((image) => cld.image(image).resize(scale().width(1920)).toURL());
  return (
    <Box
      position="absolute"
      height="100%"
      width="100%"
      overflow="hidden"
      color="white"
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(s) => setSlider(s)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height="100vh"
            width="100%"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`radial-gradient(circle, rgba(0,0,0,0.75) 0%, rgba(208,194,99,0.1) 75%), linear-gradient(to bottom, rgba(0,0,0,0.75), transparent 20%), url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
