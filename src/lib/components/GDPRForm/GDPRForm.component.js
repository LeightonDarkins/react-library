import React from "react";

import './GDPRForm.scss';

const formOptions = ["emails", "text messages", "phone calls", "advertising"];

class GDPRForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      all: true
    }
  }

  renderOptions() {
    return formOptions.map((option, index) => {
      return (
        <li key={index}>
          <CheckBox label={option} onChange={() => {}} />
        </li>
      );
    });
  }

  render() {
    return (
      <form className="GDPRForm">
      </form>
    );
  }
}

export default GDPRForm;
