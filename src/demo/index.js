import React from "react";
import ReactDOM from "react-dom";

import {
  Title,
  StatefulCheckBox,
  CheckBox,
  Wrapper,
  CheckBoxContainer,
  TopTextInput,
  LeftTextInput,
  LoginForm,
  UserInfo
} from "../../dist";

const App = props => {
  const statefulCallback = () => {
    console.log(`stateful! I'm the master of my own destiny`);
  };

  const statelessCallback = () => {
    console.log("stateless! need a container to do anything useful");
  };

  const apiCall = () => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(2500);
      }, 2500);
    });
  };

  return (
    <React.Fragment>
      <Wrapper children={<Title />} />
      <Wrapper>
        <StatefulCheckBox
          label="stateful checkbox"
          onChange={statefulCallback}
        />
      </Wrapper>
      <Wrapper>
        <CheckBox
          label="stateless checkbox (enabled)"
          onChange={statelessCallback}
          checked
        />
      </Wrapper>
      <Wrapper>
        <CheckBox
          label="stateless checkbox (disabled)"
          onChange={statelessCallback}
        />
      </Wrapper>
      <Wrapper>
        <CheckBoxContainer
          label="stateless checkbox (with container)"
          apiCall={apiCall}
        />
      </Wrapper>
      <Wrapper>
        <TopTextInput id="test-input" label="TOP LABEL" />
      </Wrapper>
      <Wrapper>
        <LeftTextInput id="left-input" label="LONG LEFT LABEL" />
      </Wrapper>
      <Wrapper>
        <LoginForm />
      </Wrapper>
      <Wrapper>
        <UserInfo
          name="leighton darkins"
          jobTitle="software developer"
          imageSrc="https://assets-cdn.github.com/images/icons/emoji/unicode/1f920.png?v8"
        />
      </Wrapper>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
