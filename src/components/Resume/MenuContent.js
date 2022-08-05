import React from "react";
import jobList from "./jobList";
import {
  Tabs,
  TabList,
  TabPanels,
  HStack,
  Tab,
  TabPanel,
  Box,
  Text,
  ListItem,
  UnorderedList,
  Spacer,
} from "@chakra-ui/react";

class MenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: jobList() };
  }

  render() {
    return (
      <Tabs>
        <React.Fragment>
          <React.Fragment>
            <TabList borderColor={this.props.data.color}>
              {this.state.content.map((item, index) => {
                return (
                  <Tab
                    fontSize={[8, 14, 16]}
                    textColor={this.props.data.color}
                    _selected={{
                      transition: "0.5s all",
                      color: this.props.data.panelColor,
                      stopColor: "#000",
                      borderColor: this.props.data.panelColor,
                    }}
                    _active={{
                      color: null,
                    }}
                  >
                    {item.company}
                  </Tab>
                );
              })}
            </TabList>
          </React.Fragment>

          <TabPanels
            fontSize={[9, 14, 16]}
            minH={[10, 250, 300]}
            maxH={[10, 250, 300]}
          >
            {this.state.content.map((item, index) => {
              return (
                <TabPanel>
                  <Box
                    w={[300, 425, 625]}
                    textColor={this.props.data.color}
                    align="left"
                  >
                    <HStack>
                      <Box>
                        <HStack>
                          <Text fontWeight="bold">{item.company}</Text>
                          <Text>{item.location} </Text>
                        </HStack>
                      </Box>
                      <Spacer />
                      <Text>{item.attended}</Text>
                    </HStack>
                    <UnorderedList py={[3, 5, 7]}>
                      {this.state.content[index].duties.map((bullet) => {
                        return <ListItem>{bullet}</ListItem>;
                      })}
                    </UnorderedList>
                  </Box>
                </TabPanel>
              );
            })}
          </TabPanels>
        </React.Fragment>
      </Tabs>
    );
  }
}

export default MenuContent;
