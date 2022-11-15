/* eslint-disable react/prop-types */
import { Box, Stack } from '@chakra-ui/react';
import ColorMode from './ColorMode';
import MenuItem from './MenuItem';

function Links({ isOpen, setIsOpen }) {
  const onChooseItem = () => {
    setIsOpen(() => false);
  };
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-around', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem 
          to="/" 
          text="home" 
          onChooseItem={onChooseItem}
        />
        <MenuItem 
          to="/gallery/" 
          text="gallery"
          onChooseItem={onChooseItem}
          />
        <MenuItem 
          to="/contact/"
          text="contact"
          onChooseItem={onChooseItem}
          />
        {/* <ColorMode /> */}

      </Stack>
    </Box>
  );
}

export default Links;
