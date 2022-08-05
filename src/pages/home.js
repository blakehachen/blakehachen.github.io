import React from "react";
import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import ShowLetter from "../components/Home/showLetter";
import Footer from "../components/footer";
function Home() {
  const bg_container = useColorModeValue("gray.900", "gray.200");
  const text_color = useColorModeValue("#fff", "gray.800");
  const btn_bg = useColorModeValue("gray", "blue");

  const containerStyle = {
    bg: bg_container,
  };

  const textStyle = {
    color: text_color,
  };
  return (
    <Box
      boxShadow="dark-lg"
      h="100%"
      w={[400, 550, 768]}
      as="div"
      sx={containerStyle}
    >
      <Text
        color={text_color}
        fontWeight="bold"
        align="center"
        py={[5, 0, 0]}
        fontFamily="mono"
        fontSize={[28, 36, 56]}
      >
        Welcome!
      </Text>
      <ShowLetter />
      <Text sx={textStyle}>
        <Text
          align="center"
          p={[3, 9, 10]}
          fontFamily="sans-serif"
          fontSize={[16, 28, 36]}
        >
          Hello, My name is Blake Hachen.
        </Text>
        <Text fontFamily="body" fontSize={[12, 16, 18]} mx={[5, 10, 16]}>
          I am a software developer residing in Atlanta, Georgia. I have
          recently completed my bachelor's degree in Computer Science at Kansas
          State University. During my time studying I managed to learn a large
          variety of programming languages and concepts. I would like to
          showcase those concepts within this website by logging my progress on
          projects I am working on and displaying the ones that I have
          completed.
        </Text>

        <Text
          fontSize={[21, 29, 37]}
          fontFamily="monospace"
          align="center"
          mt={[7, 8, 9]}
        >
          Enter Portfolio
        </Text>
        <Box py={[8, 9, 10]} align="center">
          <Button
            as="a"
            href="/projects"
            color="#000"
            colorScheme={btn_bg}
            size={["sm", "md", "md"]}
          >
            View Projects
          </Button>
        </Box>
      </Text>
      <Footer></Footer>
    </Box>
  );
}

export default Home;
