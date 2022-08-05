import React from "react";
import {
  Box,
  HStack,
  Text,
  Heading,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import Contact from "../components/Resume/contact";
import MenuContent from "../components/Resume/MenuContent";
import Footer from "../components/footer";
function Resume() {
  const bg_container = useColorModeValue("gray.900", "gray.200");
  const text_color = useColorModeValue("#fff", "#000");
  const link_color = useColorModeValue("#90cdf4", "#2c5282");
  const containerStyle = {
    bg: bg_container,
  };

  return (
    <Box
      boxShadow="dark-lg"
      h={["100%", "100%", "100%"]}
      w={[400, 550, 768]}
      as="div"
      sx={containerStyle}
    >
      <Heading fontSize={[25, 28, 36]} p={[5, 10, 10]} color={text_color}>
        Interactive Resume
        <Divider mb={[1, 4, 5]} mt={5} bg={text_color} w={[340, 450, 675]} />
      </Heading>
      {/* START EDUCATION */}
      <Box
        py={[2, 5, 7]}
        boxShadow="dark-lg"
        border="solid"
        borderColor={link_color}
        w={[340, 450, 675]}
        bg={bg_container}
      >
        <Heading
          fontFamily="mono"
          fontWeight="normal"
          color={text_color}
          p={[2, 2, 3]}
          align="left"
          fontSize={[21, 24, 30]}
        >
          Education
        </Heading>
        <HStack fontSize={[8, 10.5, 16]} spacing={[75, 130, 175]}>
          <Box>
            <HStack px={[2, 2, 3]}>
              <Text color={text_color} pt={[1, 2, 3]} fontWeight="bold">
                Kansas State University,
              </Text>
              <Text color={text_color} pt={[1, 2, 3]}>
                Manhattan KS
              </Text>
            </HStack>
          </Box>
          <Text color={text_color}>Aug 2017 - Aug 2022</Text>
        </HStack>
        <Text
          fontSize={[8, 10.5, 16]}
          color={text_color}
          align="left"
          px={[2, 2, 3]}
        >
          Bachelor of Science in Computer Science
        </Text>
      </Box>
      {/* END EDUCATION */}

      {/*START SKILLS*/}
      <Box
        py={[2, 5, 7]}
        mt={[4, 5, 6]}
        boxShadow="dark-lg"
        border="solid"
        borderColor={link_color}
        w={[340, 450, 675]}
        bg={bg_container}
      >
        <Heading
          fontFamily="mono"
          fontWeight="normal"
          color={text_color}
          p={[2, 2, 3]}
          align="left"
          fontSize={[21, 24, 30]}
        >
          Skills
        </Heading>

        <HStack fontSize={[8, 10.5, 16]} px={[2, 2, 3]}>
          <Text align="left" fontStyle="italic" color={text_color}>
            Programming:
          </Text>
          <Text color={text_color} fontWeight="bold">
            C#, JavaScript, Python,
          </Text>
          <Text color={text_color}>C++, Java, R, CSS/Sass, Rust</Text>
        </HStack>
        <HStack fontSize={[8, 10.5, 16]} px={[2, 2, 3]}>
          <Text align="left" fontStyle="italic" color={text_color}>
            Libraries/Frameworks:
          </Text>
          <Text align="left" color={text_color} fontWeight="bold">
            React, Express, Node.js, .NET,
          </Text>
          <Text align="left" color={text_color}>
            jQuery, Mono, Three.js
          </Text>
        </HStack>
        <HStack fontSize={[8, 10.5, 16]} px={[2, 2, 3]}>
          <Text align="left" fontStyle="italic" color={text_color}>
            Tools/Platforms:
          </Text>
          <Text color={text_color} fontWeight="bold">
            Git, Docker, Heroku
          </Text>
        </HStack>
      </Box>
      {/*END SKILLS*/}

      <Box
        py={[2, 5, 7]}
        mt={[12, 14, 16]}
        w={[340, 450, 675]}
        bg={bg_container}
      >
        <Heading
          fontFamily="mono"
          fontWeight="normal"
          color={text_color}
          p={[1, 2, 3]}
          align="left"
          fontSize={[21, 24, 30]}
        >
          Experience
        </Heading>

        <MenuContent
          data={{
            color: text_color,
            panelColor: link_color,
            bgColor: bg_container,
          }}
        />
      </Box>
      <Box
        py={[2, 5, 7]}
        mt={[267, 9, 2]}
        w={[340, 450, 675]}
        bg={bg_container}
      >
        <Contact data={{ color: text_color, hoverColor: link_color }} />
      </Box>
      <Footer></Footer>
    </Box>
  );
}

export default Resume;
