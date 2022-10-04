/* eslint-disable react/prop-types */
import {
  Button, ButtonGroup, Flex, Icon, Link, useColorMode,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { IoImages, IoLogoInstagram } from 'react-icons/io5';
import { MdOutlineContactPage } from 'react-icons/md';

function CTAButtons({ variant = 'ghost' }) {
  // const { colorMode } = useColorMode();

  return (
    <ButtonGroup
      as={Flex}
      m={[5, 5, 5, 10]}
      justify="center"
      variant={variant}
      maxWidth={['75vw', '75vw', '75vw', '55ch']}
      direction={['column', 'column', 'row', 'row']}
      align="center"
      gap={2}
    >
      <Button
        as={NavLink}
        to="gallery"
        leftIcon={(
          <Icon
            as={IoImages}
          />
        )}
      >
        View our gallery
      </Button>
      <Button
        leftIcon={(
          <Icon
            as={MdOutlineContactPage}
          />
        )}
      >
        Contact us
      </Button>
      <Button
        as={Link}
        href="https://www.instagram.com/typethingcollective/"
        isExternal
        leftIcon={(
          <Icon
            as={IoLogoInstagram}
          />
        )}
      >
        Instagram
      </Button>
    </ButtonGroup>
  );
}

export default CTAButtons;
