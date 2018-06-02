import React from "react";
import PropTypes from "prop-types";

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "", isValid: true };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const isValid = this.props.validationMethod
      ? this.props.validationMethod(event.target.value)
      : true;

    this.setState({ value: event.target.value, isValid: isValid });
  }

  render() {
    const { id, label, validationMethod } = this.props;

    return this.props.children(
      id,
      label,
      this.state.value,
      this.handleInputChange,
      this.state.isValid
    );
  }
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};

export default TextInput;
