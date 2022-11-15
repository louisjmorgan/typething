/* eslint-disable no-nested-ternary */
import { Flex, useColorMode } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Links from './Links';
import Logo from './Logo';
import MenuButton from './MenuButton';

function NavContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const toggle = () => setIsOpen(!isOpen);
  const { colorMode } = useColorMode();
  const [hasScrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if ((window.scrollY > 0)) setScrolled(true);
    else if ((window.scrollY === 0)) setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      maxWidth="100vw"
      px={[5, 10]}
      py={3}
      pb={4}
      height="auto"
      position="fixed"
      transition="background-color 0.2s ease-out"
      backgroundColor={hasScrolled
        ? colorMode === 'light' ? 'background.light' : 'background.dark'
        : isOpen ? colorMode === 'light' ? 'background.light' : 'background.dark' : 'transparent'}
      zIndex={5}
      boxShadow={hasScrolled && `0 1px 3px ${colorMode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.2)'}`}
      color={hasScrolled || isOpen || router.asPath !== '/' ? 'text.dark' : 'text.light'}
    >
      <Logo />
      <MenuButton isOpen={isOpen} toggle={toggle} />
      <Links isOpen={isOpen} setIsOpen={setIsOpen}/>
    </Flex>
  );
}

export default NavContainer;
