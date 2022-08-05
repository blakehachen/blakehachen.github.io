import React from "react";
import {
  Image,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function NavItems() {
  const { toggleColorMode } = useColorMode();
  const active_color = useColorModeValue("#fff", "gray.900");
  const text_color = useColorModeValue("gray.400", "blue.600");
  const btn_icon = useColorModeValue("gray.50", "blackAlpha.800");
  const btn_bg = useColorModeValue("whiteAlpha", "blackAlpha");

  const baseTextStyles = {
    color: text_color,
    fontSize: "x-large",
    fontWeight: "550",
    ".nav-about.active &": {
      color: active_color,
    },
  };

  return (
    <React.Fragment>
      {btn_icon === "gray.50" ? (
        <Image
          position="fixed"
          left="10"
          w={[12, 12, 12]}
          h={[12, 12, 12]}
          src="https://bit.ly/3Q3QgCP"
          alt="lightmode-logo"
        ></Image>
      ) : (
        <Image
          position="fixed"
          left="10"
          w={[12, 12, 12]}
          h={[12, 12, 12]}
          src="https://bit.ly/3vFq7lm"
          alt="darkmode-logo"
        ></Image>
      )}
      <NavLink as="a" to="/" className="nav-about">
        <Text sx={baseTextStyles}>Home</Text>
      </NavLink>
      <NavLink as="a" to="/about" className="nav-about">
        <Text sx={baseTextStyles}>About</Text>
      </NavLink>
      <NavLink to="/projects" className="nav-about">
        <Text sx={baseTextStyles}>Projects</Text>
      </NavLink>
      <NavLink to="/resume" className="nav-about">
        <Text sx={baseTextStyles}>Resume</Text>
      </NavLink>

      <Button
        position="fixed"
        onClick={toggleColorMode}
        colorScheme={btn_bg}
        size="md"
        right="10"
      >
        {btn_icon === "gray.50" ? (
          <SunIcon color={btn_icon} />
        ) : (
          <MoonIcon color={btn_icon} />
        )}
      </Button>
    </React.Fragment>
  );
}
