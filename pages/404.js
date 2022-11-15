const { Text,Flex } = require("@chakra-ui/react")
import Head from 'next/head'

function Custom404() {
  return (
    <>
    <Head>
      <title>404 | Typething</title>
    </Head>
    <Flex
      direction="column"
      justify="center"
      height="100vh"
      align="center"
    >
      <Text fontSize="2rem" fontWeight="bold">
        404 | The requested page could not be found.
      </Text>
    </Flex>
  </>
  )
}

export default Custom404