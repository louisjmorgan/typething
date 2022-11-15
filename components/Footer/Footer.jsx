const { Flex, Text, Link } = require('@chakra-ui/react');

function Footer() {
  return (
    <Flex
      px={10}
      py={3}
      justify="center"
      fontSize="0.65rem"
      color="grey"
    >
      <Text>
        © Typething LTD 2022
      </Text>
      {/* <Text>
        Designed by
        {' '}
        <Link href="https://www.lousimorgan.io" isExternal>Louis Morgan</Link>
      </Text> */}
    </Flex>
  );
}

export default Footer;
