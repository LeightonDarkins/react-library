import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ label, type }) => {
  const className = () => {
    switch (type) {
      case "button":
        return "Button";
      case "submit":
        return "Button--submit";
    }
  };

  return (
    <button className={className()} type={type}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit"]).isRequired
};

export default Button;
