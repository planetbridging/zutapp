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

import Template1 from "./templates/temp1";

import imgCheck from "../imgs/check.jpg";
import imgSmile from "../imgs/smile.jpg";
import imgPortal from "../imgs/portal.jpg";

class Tile2 extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Center>
        <Wrap w="100%">
          <WrapItem>
            <Box w="340px" h="500px">
              <Template1
                img={imgCheck}
                txt1={"Recording asset service history has never been easier"}
                txt2={"Touch ZuTapp for real time service information "}
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box w="340px" h="500px">
              <Template1
                img={imgSmile}
                txt1={
                  "Automatically track every asset every day, all in real time."
                }
                txt2={"Track asset service time and attach service photos."}
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box w="340px" h="500px">
              <Template1
                img={imgPortal}
                txt1={
                  "Easy access to records from the central portal, or your mobile phone"
                }
                txt2={
                  "Remove paperwork with quick access to records saved instantly to the cloud."
                }
              />
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
    );
  }
}

export default Tile2;
