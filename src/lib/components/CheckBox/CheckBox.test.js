import React from "react";
import { render, Simulate } from "react-testing-library";
import CheckBox from "./CheckBox.component";

const testProps = {
  label: "test label"
};

describe("CheckBox", () => {
  it("renders the correct label", () => {
    const { container, getByLabelText } = render(
      <CheckBox label={testProps.label} onChange={() => {}} checked />
    );

    expect(container.firstChild.textContent).toEqual(
      testProps.label.toUpperCase()
    );
  });

  it("renders a checked CheckBox", () => {
    const { container, getByLabelText } = render(
      <CheckBox label={testProps.label} onChange={() => {}} checked />
    );

    const htmlCheckbox = getByLabelText(testProps.label, { exact: false });

    expect(htmlCheckbox.checked).toBeTruthy();
  });

  it("renders an un-checked CheckBox", () => {
    const { container, getByLabelText } = render(
      <CheckBox label={testProps.label} onChange={() => {}} checked={false} />
    );

    const htmlCheckbox = getByLabelText(testProps.label, { exact: false });

    expect(htmlCheckbox.checked).toBeFalsy();
  });

  it("propagates an event when changed", () => {
    const onChangeMock = jest.fn();

    const { container, getByLabelText } = render(
      <CheckBox label={testProps.label} onChange={onChangeMock} checked />
    );

    Simulate.change(getByLabelText(testProps.label, { exact: false }));

    expect(onChangeMock).toHaveBeenCalled();
  });
});
