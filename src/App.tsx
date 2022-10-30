import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './theme';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center">
      <Grid minH="80vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Text fontSize={'5xl'}>Thund3rPat</Text>
        <VStack spacing={8}>
          <Text fontSize={'xl'}>Welcome to my humble page!</Text>
          <Link
            color="teal.500"
            href="https://github.com/Thund3rPat"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
