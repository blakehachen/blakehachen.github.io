import React from "react";
import { Image } from "@chakra-ui/react";

class ImgWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: true };
  }

  render() {
    return (
      <Image
        borderRadius="lg"
        position="relative"
        zIndex={0}
        src={this.props.data.link}
        fallbackSrc="https://via.placeholder.com/500"
        alt={this.props.data.name}
        onMouseOut={() => this.setState({ hovered: true })}
        onMouseOver={() => this.setState({ hovered: false })}
        style={{
          transition: "all 0.25s",

          transform: `${
            this.state.hovered ? "scale(1,1)" : "scale(1.02, 1.02)"
          }`,
          filter: `${
            this.state.hovered
              ? "grayscale(75%)"
              : "drop-shadow(4px 4px 7px #000)"
          }`,
        }}
      />
    );
  }
}

export default ImgWrapper;
