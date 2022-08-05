import React from "react";
import {
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  useColorMode,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Bars() {
  const { toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("#fff", "gray.800");
  const menuBackground = useColorModeValue("#000", "#fff");
  const btn_bg = useColorModeValue("gray.50", "gray.600");
  const baseTextStyles = {
    color: textColor,
  };

  return (
    <Menu>
      <MenuButton
        background={menuBackground}
        _focus={menuBackground}
        _hover={menuBackground}
        _active={menuBackground}
        as={IconButton}
        color={textColor}
        fontSize={29}
        aria-label="Options"
        icon={<HamburgerIcon />}
      />

      <MenuList bg={menuBackground}>
        {/* MenuItems are not rendered unless Menu is open */}
        <MenuItem _focus="gray.700" _active="gray.400">
          <NavLink as="a" to="/" className="nav-about">
            <Text sx={baseTextStyles}>Home</Text>
          </NavLink>
        </MenuItem>
        <MenuItem _focus="gray.700" _active="gray.400">
          <NavLink as="a" to="/about" className="nav-about">
            <Text sx={baseTextStyles}>About</Text>
          </NavLink>
        </MenuItem>
        <MenuItem _focus="gray.700" _active="gray.400">
          <NavLink as="a" to="/projects" className="nav-about">
            <Text sx={baseTextStyles}>Projects</Text>
          </NavLink>
        </MenuItem>
        <MenuItem _focus="gray.700" _active="gray.400">
          <NavLink as="a" to="/resume" className="nav-about">
            <Text sx={baseTextStyles}>Resume</Text>
          </NavLink>
        </MenuItem>
        <MenuItem _focus="gray.700" _active="gray.400">
          <Button _hover={btn_bg} background={btn_bg} onClick={toggleColorMode}>
            {textColor === "gray.800" ? (
              <Text>Dark Mode</Text>
            ) : (
              <Text color="#000">Light Mode</Text>
            )}
          </Button>
        </MenuItem>
      </MenuList>
      {textColor === "gray.800" ? (
        <Image
          position="fixed"
          right="5"
          w={[8, 8, 8]}
          h={[8, 8, 8]}
          src="https://bit.ly/3vFq7lm"
          alt="darkmode-logo"
        ></Image>
      ) : (
        <Image
          position="fixed"
          right="5"
          w={[8, 8, 8]}
          h={[8, 8, 8]}
          src="https://bit.ly/3Q3QgCP"
          alt="lightmode-logo"
        ></Image>
      )}
    </Menu>
  );
}
