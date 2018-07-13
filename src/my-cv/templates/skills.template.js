import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Tab, Tabs } from "@blueprintjs/core";

import { Container } from "./../components/styled-components";

const Box = Container.extend`
  max-width: ${props => props.theme["screen-width"]+'px'};
  width: ${props => props.theme["screen-width"]+'px'};
`;

const TabItem1 = <div style={{display: "flex",flex : 1}}> hey </div>

const MyTabs = styled(Tabs)`
  display : flex;
  flex : 1;
  width : 100%;
  align-items : center;
  justify-content: center;
`

class Skills extends Component {

  state = {
    slectedId: "1"
  }

  handleTabChange = (newId, prevId, e) => {
    this.setState({
      selectedId: newId
    })
  }

  render() {
    return (
      <Box>
        <MyTabs
          id="TabsExample"
          onChange={this.handleTabChange}
          selectedTabId={this.state.selectedId}
          vertical>
          <Tab id="1" title="Traitement et visualisation de données" panel={TabItem1} />
          <Tab id="2" title="Génération automatique de documents" panel={"ho"} />
          <Tab id="3" title="Cartes interactives" panel={"ha"} />
          <Tab id="4" title="Jeux et animations embarqués" panel={"ha"} />
          <Tab id="5" title="Instrumentations connectés" panel={"ha"} />
          <Tab id="6" title="Visualisation 3D embarquée" panel={"ha"} />
          <Tab id="7" title="Applications de réalité virtuelle" panel={"ha"} />
        </MyTabs>
      </Box>
    );
  }
}


Skills.propTypes = {
 
};

export default Skills;