/* eslint-disable react/prop-types */
import { Link, Text, textDecoration } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

function MenuItem({
  text, isLast, to = '/',
}) {
  const { pathname } = useLocation();
  return (
    <Link
      as={NavLink}
      to={to}
    >
      <Text
        display="block"
        textStyle={pathname === to ? 'active' : ''}
      >
        {text}
      </Text>
    </Link>
  );
}

export default MenuItem;
