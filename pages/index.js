import { Stack } from "@chakra-ui/react";
import Head from "next/head";
import { useRef } from "react";
import About from "../components/Home/About";
import Landing from "../components/Home/Landing";

function Home() {
  const aboutRef = useRef();

  return (
    <>
      <Head>
        <title>Typething</title>
      </Head>
      <Stack width="100%">
        <Landing aboutRef={aboutRef} />
        <About aboutRef={aboutRef} />
      </Stack>
    </>
  );
}

export default Home;
