import React from "react";

import TextInput from "./TextInput.component";

import "./TopTextInput.scss";

const REQUIRED_CHAR_COUNT = 15;

const TopTextInput = ({ id, label }) => {
  const validationMethod = value => {
    return value.length >= REQUIRED_CHAR_COUNT;
  };

  const renderValidation = isValid => {
    const className = isValid
      ? "TopTextInput__validation--hidden"
      : "TopTextInput__validation";

    return (
      <div data-testid="input-validation" className={className}>
        Please enter at least {REQUIRED_CHAR_COUNT} characters.
      </div>
    );
  };

  const renderCharCount = value => (
    <div data-testid="input-char-count" className="TopTextInput__char-count">
      {value.length}/{REQUIRED_CHAR_COUNT}
    </div>
  );

  const renderInput = (id, label, value, handleInputChange, isValid) => (
    <div className="TopTextInput">
      <label htmlFor={id} className="TopTextInput__label">
        {label}
      </label>
      <div className="TopTextInput__flex">
        <input
          id={id}
          className="TopTextInput__input"
          type="text"
          value={value}
          onChange={handleInputChange}
          maxLength={99}
        />
        {renderCharCount(value)}
      </div>
      {renderValidation(isValid)}
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

export default TopTextInput;
