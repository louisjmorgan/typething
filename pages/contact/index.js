import {
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  Input,
  Link,
  Spacer,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

function Contact() {
  const [copyMessage, setCopy] = useState('Copy to clipboard');
  const copyToClipBoard = () => {
    try {
      navigator.clipboard.writeText('info@typething.io');
      setCopy('Copy success');
    } catch {
      setCopy('Copy failed');
    }
  };
  return (
    <>
      <Head>
        <title>Contact | Typething</title>
      </Head>
      <Stack
        p={[5, 10, "5rem", "10rem"]}
        pt={["10rem", "10rem", "10rem", "10rem"]}
        minHeight="75vh"
        align="center"
      >
        <Text fontSize="1.5rem" fontWeight="bold">
          Email us at:
        </Text>
        <Flex direction={['column', 'column', 'column', 'row']} align="center" gap={3} wrap p={5}>
          <Link href="mailto:info@typething.io" fontSize="1.25rem">
            info@typething.io
          </Link>
          <Button
            onClick={copyToClipBoard}
            variant="solid"
            colorScheme="purple"
            size="md"
          >
            {copyMessage}
          </Button>
        </Flex>
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
          <FormLabel name="email">
            Email
            <Input type="email" name="email" isRequired />
          </FormLabel>
          <FormLabel name="subject" isRequired>
            Subject
            <Input type="text" name="subject" />
          </FormLabel>
          <FormLabel name="message" isRequired>
            Message
            <Textarea name="message" />
          </FormLabel>
          <Button
            m={5}
            isExternal
            width="10ch"
            alignSelf="center"
            type="submit"
            variant="solid"
            colorScheme="purple"
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export default Contact;
