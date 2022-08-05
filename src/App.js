import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavRouter from "./components/Navbar/NavRouter";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <ChakraProvider resetCSS>
        <NavRouter />
      </ChakraProvider>
    );
  }
}

export default App;
