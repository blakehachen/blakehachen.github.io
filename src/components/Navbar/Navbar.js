import React from "react";
import { Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import useWindowSize from "./useWindowSize";
import Bars from "./Bars";
import NavItems from "./NavItems";

export default function Navbar() {
  const size = useWindowSize();
  const bg_flex = useColorModeValue("blackAlpha.800", "whiteAlpha.800");

  const flexStylesSmall = {
    justifyContent: "left",
    p: "10px",
    h: "50px",
    w: "100%",
    bg: bg_flex,
    position: "fixed",
  };
  const flexStylesLarge = {
    justifyContent: "center",
    h: "80px",
    w: "100%",
    bg: bg_flex,
    position: "fixed",
  };

  var flexStyles = {};

  if (size.width > 746) {
    flexStyles = flexStylesLarge;
  } else {
    flexStyles = flexStylesSmall;
  }

  return (
    <>
      <Flex direction="row" as="div">
        <HStack zIndex={1} shadow="md" sx={flexStyles} spacing="36px">
          {size.width > 746 ? <NavItems /> : <Bars />}
        </HStack>
      </Flex>
    </>
  );
}
