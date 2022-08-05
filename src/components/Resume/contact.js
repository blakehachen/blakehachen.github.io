import React from "react";
import { Box, Icon, Heading, Link } from "@chakra-ui/react";
import { SiHandshake, SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Box>
          <Heading
            fontWeight="semibold"
            color={this.props.data.color}
            fontSize={[19, 22, 28]}
            fontFamily="Source Code Pro"
          >
            Get in contact.
          </Heading>
          <Box p={[5, 5, 5]}>
            <Link
              style={{ textDecoration: "none" }}
              href="https://github.com/blakehachen"
              isExternal="true"
            >
              <Icon
                color={this.props.data.color}
                mx={[3, 15, 5]}
                fontSize={["2xl", "2xl", "3xl"]}
                as={SiGithub}
                _hover={{
                  transition: "0.25s all",
                  color: this.props.data.hoverColor,
                }}
              />
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href="https://ksu.joinhandshake.com/stu/users/7683436"
              isExternal="true"
            >
              <Icon
                color={this.props.data.color}
                mx={[3, 15, 5]}
                fontSize={["2xl", "2xl", "3xl"]}
                as={SiHandshake}
                _hover={{
                  transition: "0.25s all",
                  color: this.props.data.hoverColor,
                }}
              />
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/blake-hachen-1519a1191/"
              isExternal="true"
            >
              <Icon
                color={this.props.data.color}
                mx={[3, 15, 5]}
                fontSize={["2xl", "2xl", "3xl"]}
                as={SiLinkedin}
                _hover={{
                  transition: "0.25s all",
                  color: this.props.data.hoverColor,
                }}
              />
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href="mailto:bhachen@gmail.com"
              isExternal="true"
            >
              <Icon
                color={this.props.data.color}
                mx={[3, 15, 5]}
                fontSize={["2xl", "2xl", "3xl"]}
                as={SiGmail}
                _hover={{
                  transition: "0.25s all",
                  color: this.props.data.hoverColor,
                }}
              />
            </Link>
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}

export default Contact;
