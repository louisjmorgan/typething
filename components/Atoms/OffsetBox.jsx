/* eslint-disable react/prop-types */
import { Box, useColorMode } from '@chakra-ui/react';

function OffsetBox({
  children, top, left, order, width,
}) {
  const { colorMode } = useColorMode();
  return (
    <Box
      position="relative"
      backgroundColor={colorMode === 'light' ? 'background.light' : 'background.dark'}
      borderRadius="0.25rem"
      maxWidth={['100vw', '100vw', '75ch', '75ch', '75ch']}
      width="100%"
      order={order}
      _before={{
        content: '""',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: `${top}`,
        left: `${left}`,
        // backgroundColor: colorMode === 'light' ? 'background.dark' : 'background.light',
        backgroundImage: 'linear-gradient(120deg, #eaee44, #33d0ff)',
        zIndex: -1,
        borderRadius: '0.25rem',
      }}
    >
      {children}
    </Box>
  );
}

export default OffsetBox;
