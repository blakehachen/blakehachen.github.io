import Navbar from "./Navbar";
import Home from "../../pages/home";
import About from "../../pages/about";
import Projects from "../../pages/projects";
import Resume from "../../pages/resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";

export default function NavRouter() {
  const bg = useColorModeValue("gray.800", "gray.300");

  return (
    <Box bg={bg}>
      <Router>
        <Navbar />
        <Box align="center" mt={[10, 20, 20]}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Box>
      </Router>
    </Box>
  );
}
