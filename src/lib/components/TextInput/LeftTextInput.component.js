import React from "react";

import TextInput from "./TextInput.component";

import "./LeftTextInput.scss";

const REQUIRED_CHAR_COUNT = 15;

const LeftTextInput = ({ id, label, isPassword }) => {
  const validationMethod = value => {
    return value.length >= REQUIRED_CHAR_COUNT;
  };

  const renderValidation = isValid => {
    const className = isValid
      ? "LeftTextInput__validation--hidden"
      : "LeftTextInput__validation";

    return (
      <div data-testid="input-validation" className={className}>
        Please enter at least {REQUIRED_CHAR_COUNT} characters.
      </div>
    );
  };

  const renderCharCount = value => {
    return (
      <div data-testid="input-char-count" className="LeftTextInput__char-count">
        {value.length}/{REQUIRED_CHAR_COUNT}
      </div>
    );
  };

  const renderInput = (id, label, value, handleInputChange, isValid) => (
    <div className="LeftTextInput">
      <div className="LeftTextInput__flex">
        <label htmlFor={id} className="LeftTextInput__label">
          {label}
        </label>
        <div>
          <input
            id={id}
            className="LeftTextInput__input"
            type={isPassword ? "password" : "text"}
            value={value}
            onChange={handleInputChange}
          />
        </div>
        {renderValidation(isValid)}
      </div>
      <div className="LeftTextInput__flex">
        <label htmlFor={id} className="LeftTextInput__label--hidden">
          {label}
        </label>
        {renderCharCount(value)}
      </div>
    </div>
  );

  return (
    <TextInput
      id={id}
      label={label}
      validationMethod={validationMethod}
      children={renderInput}
    />
  );
};

export default LeftTextInput;
