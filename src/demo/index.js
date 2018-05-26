import React from "react";
import ReactDOM from "react-dom";

import {
  Title,
  StatefulCheckBox,
  CheckBox,
  Wrapper,
  GDPRForm
} from "../../dist";

const App = props => {
  const statefulCallback = () => {
    console.log(`stateful! I'm the master of my own destiny`)
  };

  const statelessCallback = () => {
    console.log('stateless! need a container to do anything useful')
  };

  return (
    <React.Fragment>
      <Wrapper children={<Title />} />
      <Wrapper>
        <StatefulCheckBox label="stateful checkbox" onChange={statefulCallback} />
      </Wrapper>
      <Wrapper>
        <CheckBox label="stateless checkbox (enabled)" onChange={statelessCallback} checked />
      </Wrapper>
      <Wrapper>
        <CheckBox label="stateless checkbox (disabled)" onChange={statelessCallback} />
      </Wrapper>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
