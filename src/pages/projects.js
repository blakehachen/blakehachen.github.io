import React from "react";
import {
  Box,
  Heading,
  Divider,
  VStack,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import ProjectCard from "../components/Projects/ProjectCard";
import useWindowSize from "../components/Navbar/useWindowSize";
import projList from "../components/Projects/projList";
import Footer from "../components/footer";

function Projects() {
  const size = useWindowSize();
  const bg_container = useColorModeValue("gray.900", "gray.200");
  const text_color = useColorModeValue("#fff", "#000");

  const cards = projList();

  const cardProps = {
    link_color: useColorModeValue("#90cdf4", "#2c5282"),
    card_bg: useColorModeValue("#2D3748", "#EDF2F7"),
    box_icon: useColorModeValue("#90cdf4", "#2c5282"),
  };

  const containerStyle = {
    bg: bg_container,
  };

  return (
    <Box boxShadow="dark-lg" w={[300, 550, 768]} as="div" sx={containerStyle}>
      <VStack>
        <Heading fontSize={[25, 28, 36]} p={10} color={text_color}>
          My Public Projects
          <Divider mb={[1, 4, 10]} mt={5} bg={text_color} w={[220, 450, 675]} />
        </Heading>
        {size.width > 780 ? (
          <React.Fragment>
            <Grid templateColumns="repeat(2, 1fr)" gap={2}>
              {cards.map((card) => {
                return (
                  <React.Fragment>
                    <ProjectCard
                      data={{
                        color: text_color,
                        link_color: cardProps.link_color,
                        card_bg: cardProps.card_bg,
                        box_icon: cardProps.box_icon,
                        title: card.title,
                        content: card.content,
                        languages: card.languages,
                        languageColors: card.languageColors,
                        link: card.link,
                      }}
                    />
                  </React.Fragment>
                );
              })}
            </Grid>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <VStack>
              {cards.map((card) => {
                return (
                  <React.Fragment>
                    <ProjectCard
                      data={{
                        color: text_color,
                        link_color: cardProps.link_color,
                        card_bg: cardProps.card_bg,
                        box_icon: cardProps.box_icon,
                        title: card.title,
                        content: card.content,
                        languages: card.languages,
                        languageColors: card.languageColors,
                        link: card.link,
                      }}
                    />
                  </React.Fragment>
                );
              })}
            </VStack>
          </React.Fragment>
        )}
      </VStack>
      <Footer></Footer>
    </Box>
  );
}

export default Projects;
