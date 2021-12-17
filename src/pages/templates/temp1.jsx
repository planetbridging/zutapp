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

export class Template1 extends React.Component {
  render() {
    if (this.props.img && this.props.txt1 && this.props.txt2) {
      //this.props.id
      return (
        <Box w="340px">
          <Center color="white" w="100%">
            <Box w="100%">
              <Box
                h="500px"
                bg="#d8d8d8"
                bgImage={this.props.img}
                bgSize="cover"
                backgroundRepeat="no-repeat"
              >
                <Box p="20" h="100%" width="100%">
                  <Center>
                    <VStack spacing={20}>
                      <Text
                        color="#5a74b7"
                        fontSize="sm"
                        opacity="0.8"
                        bg="white"
                        p="20px"
                      >
                        {this.props.txt1}
                      </Text>
                      <Text
                        color="#5a74b7"
                        fontSize="sm"
                        opacity="0.8"
                        bg="white"
                        p="20px"
                      >
                        {this.props.txt2}
                      </Text>
                    </VStack>
                  </Center>
                </Box>
              </Box>
            </Box>
          </Center>
        </Box>
      );
    } else {
      return <Box>oops something went wrong</Box>;
    }
  }
}

export default Template1;
