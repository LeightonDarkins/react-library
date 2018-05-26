import React from "react";
import PropTypes from "prop-types";

function CheckBox(props) {
  return (
    <label className="CheckBox">
      {props.label.toUpperCase()}
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <span className="checkmark" />
    </label>
  );
}

CheckBox.defaultProps = {
  checked: false
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool
}

export default CheckBox;
