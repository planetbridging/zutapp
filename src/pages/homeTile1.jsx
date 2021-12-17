import React from "react";
import ReactDOM from "react-dom";

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
  Wrap,
  WrapItem,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";

import imgPool from "../imgs/pool.jpg";

class Tile1 extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <VStack w="100%">
        <Flex bg="#1c263f" w="100%">
          <Center color="white" w="100%">
            <Box w="100%">
              <Box h="100%" bg="#d8d8d8" bgImage={imgPool} bgSize="cover">
                <Box
                  bg="white"
                  p="20"
                  h="100%"
                  width={[
                    "100%", // 0-30em
                    "100%", // 30em-48em
                    "35%", // 48em-62em
                    "40%", // 62em+
                  ]}
                >
                  <Center>
                    <VStack>
                      <Heading color="#5a74b7">
                        Real time asset information, digitally stored instantly
                        in an easy to use app
                      </Heading>
                      <Text color="#5a74b7">
                        Place ZuTapp onto every asset and simplify servicing and
                        tracking.
                      </Text>
                      <Text color="#5a74b7">
                        Enhance staff safety and security remotely with ZuTapp
                        at every workplace to allow staff to check in and out of
                        the work location with a simple touch of their phone.
                      </Text>
                    </VStack>
                  </Center>
                </Box>
              </Box>
            </Box>
          </Center>
        </Flex>
      </VStack>
    );
  }
}

export default Tile1;
