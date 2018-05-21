import React from "react";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checked: true };
  }

  checked() {
    this.setState(
      oldState => {
        return { checked: !oldState.checked };
      },
      () => {
        this.props.onChange();
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={() => this.checked()}
        />
        <label>{this.props.label}</label>
      </React.Fragment>
    );
  }
}

export default CheckBox;
