import { ChakraProvider } from "@chakra-ui/react";
import {
  Flex,
  Center,
  Text,
  Square,
  Box,
  Spacer,
  VStack,
  StackDivider,
  Image,
  Button,
  Heading,
  Select,
} from "@chakra-ui/react";
import ViewHome from "./pages/home";

import theme from "./theme";
import { ColorModeScript } from "@chakra-ui/react";
//
function App() {
  return (
    <ChakraProvider>
      <Box w="100%" h="100%" bg="#1c263f">
        <ViewHome />
      </Box>
    </ChakraProvider>
  );
}

export default App;
