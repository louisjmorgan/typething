/* eslint-disable react/prop-types */
import { Link, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import NextLink from 'next/link'

function MenuItem({
  text, to = '/', onChooseItem,
}) {
  const router = useRouter()
  return (
    <Link
      as={NextLink}
      href={to}
      onClick={onChooseItem}
    >
      <Text
        display="block"
        textStyle={router.asPath === to ? 'active' : ''}
      >
        {text}
      </Text>
    </Link>
  );
}

export default MenuItem;
