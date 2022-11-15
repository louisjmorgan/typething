/* eslint-disable react/prop-types */
import {
  Box, Image, Link, Tooltip,
} from '@chakra-ui/react';

function EventIcon({ icon }) {
  return (
    <Tooltip label={icon.alt}>
      <span>
        <Link href={icon.link} isExternal>
          <Box
            ml={2}
            as={Image}
            p={1}
            src={icon.src}
            transition="all 0.3s linear;"
            _hover={{
              transform: 'scale(1.25)',
            }}
          />
        </Link>
      </span>
    </Tooltip>
  );
}

export default EventIcon;
