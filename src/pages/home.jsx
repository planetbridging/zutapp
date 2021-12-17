//imports
import React from "react";
import ReactDOM from "react-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
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

//classes
import Tile1 from "./homeTile1";
import Tile2 from "./homeTile2";

//imgs
import imgLogo from "../imgs/logo.png";
import imgBanner from "../imgs/infotoworld.jpg";

class ViewHome extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <VStack w="100%" spacing={0}>
        <Flex bg="#1c263f" p="5" w="100%">
          <Center color="white" w="100%">
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Box>
                <Center>
                  <Flex color="white">
                    <Wrap spacing="30px">
                      <WrapItem>
                        <Center>
                          <VStack>
                            <Text>Home</Text>
                          </VStack>
                        </Center>
                      </WrapItem>

                      <WrapItem>
                        <Center>
                          <VStack>
                            <Text>About</Text>
                          </VStack>
                        </Center>
                      </WrapItem>

                      <WrapItem>
                        <Center>
                          <VStack>
                            <Text>About</Text>
                          </VStack>
                        </Center>
                      </WrapItem>

                      <WrapItem>
                        <Center>
                          <VStack>
                            <Text>Pricing</Text>
                          </VStack>
                        </Center>
                      </WrapItem>

                      <WrapItem>
                        <Center>
                          <VStack>
                            <Text>Testimonials</Text>
                          </VStack>
                        </Center>
                      </WrapItem>

                      <WrapItem>
                        <Center>
                          <VStack>
                            <Text>Contact</Text>
                          </VStack>
                        </Center>
                      </WrapItem>

                      <WrapItem>
                        <Center>
                          <Menu>
                            <MenuButton
                              as={Button}
                              rightIcon={<ChevronDownIcon />}
                              colorScheme="blue"
                            >
                              Account
                            </MenuButton>
                            <MenuList color="black" colorScheme="blue">
                              <MenuItem>Create account</MenuItem>
                              <MenuItem>Login</MenuItem>
                            </MenuList>
                          </Menu>
                        </Center>
                      </WrapItem>
                    </Wrap>
                  </Flex>
                </Center>
              </Box>
            </VStack>
          </Center>
        </Flex>
        <Box maxW="800px">
          <img src={imgBanner} width="100%" />
        </Box>
        <Tile1 />
        <Tile2 />
      </VStack>
    );
  }
}

export default ViewHome;
