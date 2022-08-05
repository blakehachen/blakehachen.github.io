import React from "react";
import { FiBox } from "react-icons/fi";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import {
  Text,
  Box,
  Badge,
  Icon,
  Link,
  VStack,
  HStack,
  Heading,
  DarkMode,
  LightMode,
} from "@chakra-ui/react";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: true };
  }

  render() {
    return (
      <React.Fragment>
        <Box
          as="flex"
          zIndex={0}
          w={[240, 340, 340]}
          h={[350, 450, 450]}
          bg={this.props.data.card_bg}
          boxShadow="2xl"
          onMouseOut={() => this.setState({ hovered: true })}
          onMouseOver={() => this.setState({ hovered: false })}
          style={{
            transition: "0.25s all",
            transform: `${
              this.state.hovered ? "scale(1,1)" : "scale(1.02, 1.02)"
            }`,
          }}
        >
          <VStack>
            <Link
              style={{ textDecoration: "none" }}
              href={this.props.data.link}
              isExternal="true"
            >
              <HStack alignSelf="flex-start" spacing={[36, 48, 48]}>
                <Icon
                  color={this.props.data.box_icon}
                  mx={[3, 5, 5]}
                  mt={[3, 5, 5]}
                  as={FiBox}
                  fontSize={["4xl", "6xl", "6xl"]}
                />

                <Icon
                  color="gray.400"
                  as={ExternalLinkIcon}
                  fontSize={["lg", "2xl", "2xl"]}
                  style={{
                    transition: "all 0.25s",
                    color: `${
                      this.state.hovered
                        ? this.props.data.color
                        : this.props.data.link_color
                    }`,
                  }}
                />
              </HStack>

              <Box p={5} align="left">
                <Heading
                  style={{
                    transition: "all 0.25s",
                    color: `${
                      this.state.hovered
                        ? this.props.data.color
                        : this.props.data.link_color
                    }`,
                  }}
                  size={["md", "lg", "lg"]}
                  py={[0, 1, 1]}
                >
                  {this.props.data.title}
                </Heading>

                <Text
                  fontSize={[12, 16, 16]}
                  align="left"
                  color={this.props.data.color}
                >
                  {this.props.data.content}
                </Text>
                <HStack position="absolute" bottom="0" my={[5, 5, 5]}>
                  {this.props.data.languages.map((language, i) => {
                    return (
                      <React.Fragment>
                        {this.props.data.color === "#fff" ? (
                          <DarkMode>
                            <Badge
                              fontSize={["9px", "xs", "xs"]}
                              fontWeight="semibold"
                              borderRadius="full"
                              px="2"
                              colorScheme={this.props.data.languageColors[i]}
                            >
                              {language}
                            </Badge>
                          </DarkMode>
                        ) : (
                          <LightMode>
                            <Badge
                              fontSize={["9px", "xs", "xs"]}
                              fontWeight="semibold"
                              borderRadius="full"
                              px="2"
                              colorScheme={this.props.data.languageColors[i]}
                            >
                              {language}
                            </Badge>
                          </LightMode>
                        )}
                      </React.Fragment>
                    );
                  })}
                </HStack>
              </Box>
            </Link>
          </VStack>
        </Box>
      </React.Fragment>
    );
  }
}

export default ProjectCard;
