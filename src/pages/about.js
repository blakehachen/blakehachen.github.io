import React from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import ImgWrapper from "../components/About/ImgWrapper";
import Footer from "../components/footer";
function About() {
  const bg_container = useColorModeValue("gray.900", "gray.200");
  const text_color = useColorModeValue("#fff", "gray.800");

  const containerStyle = {
    bg: bg_container,
  };

  return (
    <Box
      boxShadow="dark-lg"
      h="100%"
      w={[400, 550, 768]}
      as="div"
      sx={containerStyle}
    >
      <VStack>
        <Heading fontSize={[25, 28, 36]} p={[10, 14, 10]} color={text_color}>
          About Me
          <Divider mb={[1, 4, 10]} mt={5} bg={text_color} w={[300, 450, 675]} />
        </Heading>

        <Box boxSize={["2xs", "xs", "lg"]}>
          <ImgWrapper
            data={{
              link: "https://bit.ly/3zlEUTA",
              name: "Blake Hachen",
            }}
          />
        </Box>
        <Text
          color={text_color}
          fontFamily="mono"
          fontStyle="italic"
          px={[10, 20, 28]}
          pb={[6, 8, 10]}
          fontSize={[12, 16, 18]}
        >
          "Code is like humor. When you have to explain it, it's bad." - Cory
          House
        </Text>
        {/*START PART 1*/}
        <Box py={[1, 3, 5]}>
          <HStack
            pt={[1, 3, 5]}
            spacing={["5px", "15px", "20px"]}
            px={[5, 10, 10]}
            w="100%"
          >
            <Heading
              align="left"
              fontSize={["sm", "lg", "xl"]}
              color={text_color}
            >
              01. Where I've Been
            </Heading>
            <Divider bg={text_color} w={[200, 275, 475]} />
          </HStack>
          <Text
            px={[5, 10, 10]}
            mt={[1, 2, 3]}
            fontSize={[14, 18, 20]}
            alignSelf="flex-start"
            textAlign="left"
            color={text_color}
          >
            Hey! My name is Blake Hachen and I was born in Wichita, Kansas. I
            wrote my first program when I was in 7th grade while researching
            Bill Gates for a project. It was a simple random number generator
            that took user input as a guess. This experience brought me the
            realization that I enjoyed using the computer to create something
            out of nothing. I began attending programming competitions in high
            school and learned the viability of computer science as a career
            path. After high school I started attending Kansas State University
            to make my dream a reality. I was not a natural when it came to
            programming but due to my passion I found that it became easier over
            time.
          </Text>
        </Box>
        {/*END PART 1*/}

        {/*START PART 2*/}
        <Box py={[1, 3, 5]}>
          <HStack
            pt={[1, 3, 5]}
            spacing={["5px", "15px", "20px"]}
            px={[5, 10, 10]}
            w="100%"
          >
            <Heading
              align="left"
              fontSize={["sm", "lg", "xl"]}
              color={text_color}
            >
              02. Where I am
            </Heading>
            <Divider bg={text_color} w={[240, 325, 525]} />
          </HStack>
          <Text
            px={[5, 10, 10]}
            mt={[1, 2, 3]}
            fontSize={[14, 18, 20]}
            alignSelf="flex-start"
            textAlign="left"
            color={text_color}
          >
            As I progressed through the computer science curriculum I found
            myself becoming more comfortable creating and understanding
            programs. I learned of Data Structures, Algorithms, Object Oriented
            Design Principles, Software Architecture and more. In college most
            code was written in C# or C, C led me to become more interested in
            the operating system, in fact I implemented a naive version of one
            through a project known as PintOS. My education helped shape my
            passion and in turn led me to my job as a tech consultant. I
            currently reside in Atlanta, Georgia and work for Ernst & Young.
          </Text>
        </Box>
        {/*END PART 2*/}

        {/*START PART 3*/}
        <Box py={[1, 3, 5]}>
          <HStack
            pt={[1, 3, 5]}
            spacing={["5px", "15px", "20px"]}
            px={[5, 10, 10]}
            w="100%"
          >
            <Heading
              align="left"
              fontSize={["sm", "lg", "xl"]}
              color={text_color}
            >
              03. Where I'll be
            </Heading>
            <Divider bg={text_color} w={[235, 315, 510]} />
          </HStack>
          <Text
            mt={[1, 2, 3]}
            px={[5, 10, 10]}
            fontSize={[14, 18, 20]}
            alignSelf="flex-start"
            textAlign="left"
            color={text_color}
          >
            I enjoy working in the field of computer science, solving problems
            is a specialty of mine. I would like to continue to explore the
            world of code outside my career as I aspire to be a full-time
            software developer. I would like to help build an application in a
            team of people with common goals whether it be corporate or open
            source. I hope to soon find my niche within the field and further my
            understanding of programming.
          </Text>
          {/*END PART 3*/}
        </Box>
      </VStack>
      <Footer></Footer>
    </Box>
  );
}

export default About;
