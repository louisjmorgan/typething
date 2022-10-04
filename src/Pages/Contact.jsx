import {
  Box,
  Button, FormLabel, HStack, Input, Link, Spacer, Stack, Text, Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';

function Contact() {
  const [copySuccess, setCopy] = useState(false);
  const copyToClipBoard = () => {
    navigator.clipboard.writeText('typethingc@gmail.com');
    setCopy(true);
  };
  return (
    <Stack
      p={[5, 10, '5rem', '10rem']}
      pt={['10rem', '10rem', '10rem', '10rem']}
      minHeight="75vh"
      align="center"
    >
      <Text fontSize="1.5rem" fontWeight="bold">
        Email us at:
      </Text>
      <HStack p={5}>
        <Link href="mailto:typethingc@gmail.com">
          typethingc@gmail.com
        </Link>
        <Button
          onClick={copyToClipBoard}
          variant="solid"
          colorScheme="purple"
          size="md"
        >
          {copySuccess ? 'Copy success!' : 'Copy to clipboard'}
        </Button>
      </HStack>
      <Spacer />
      <Stack
        as="form"
        action="https://formspree.io/f/mzbwgjql"
        method="POST"
        width="75ch"
        maxWidth="90%"
        align="stretch"
        mt={10}
      >
        <FormLabel>
          Email
          <Input type="email" />
        </FormLabel>
        <FormLabel>
          Subject
          <Input type="text" />
        </FormLabel>
        <FormLabel>
          Message
          <Textarea />
        </FormLabel>
        <Button width="10ch" alignSelf="center" type="submit" variant="solid" colorScheme="purple">Submit</Button>
      </Stack>
    </Stack>
  );
}

export default Contact;
