import React from "react";
import PropTypes from "prop-types";

import TopTextInput from "../TextInput/TopTextInput.component";
import Button from "../Button/Button.component";

import "./LoginForm.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <Button type="submit" label="submit" />
        <Button type="button" label="button" />
      </form>
    );
  }
}

export default LoginForm;
