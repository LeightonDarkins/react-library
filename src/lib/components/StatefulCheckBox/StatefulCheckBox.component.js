import React from "react";

import "./StatefulCheckBox.scss";

class StatefulCheckBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checked: true };

    this.checked = this.checked.bind(this);
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
      <label className="CheckBox">
        {this.props.label.toUpperCase()}
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.checked}
        />
        <span className="checkmark" />
      </label>
    );
  }
}

export default StatefulCheckBox;
