import { Stack } from '@chakra-ui/react';
import { useRef } from 'react';
import About from '../Components/Home/About';
import Landing from '../Components/Home/Landing';

function Home() {
  const aboutRef = useRef();

  return (
    <Stack width="100%">
      <Landing aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
    </Stack>
  );
}

export default Home;
