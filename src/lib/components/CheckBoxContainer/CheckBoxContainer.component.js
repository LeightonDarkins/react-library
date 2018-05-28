import React from "react";
import CheckBox from "../CheckBox/CheckBox.component";

class CheckBoxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      checked: false
    };

    this.checkBoxChanged = this.checkBoxChanged.bind(this);
  }

  componentDidMount() {
    this.props.apiCall().then(result => {
      this.setState({ loading: false });
    });
  }

  checkBoxChanged(event) {
    this.setState(oldState => {
      return { checked: !oldState.checked };
    });
  }

  render() {
    if (this.state.loading) return <div>loading...</div>;

    return (
      <CheckBox
        label={this.props.label}
        onChange={this.checkBoxChanged}
        checked={this.state.checked}
      />
    );
  }
}

export default CheckBoxContainer;
