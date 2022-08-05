import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  const text_color = useColorModeValue("#fff", "#000");
  const footer_bg = useColorModeValue("gray.700", "gray.400");

  return (
    <Box w="100%" bg={footer_bg}>
      <Text color={text_color} mt={[10, 10, 20]} fontSize={[10, 11, 12]}>
        &copy; Copyright 2022 Blake Hachen
      </Text>
    </Box>
  );
}
