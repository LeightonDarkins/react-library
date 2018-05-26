import React from "react";
import { render, Simulate } from "react-testing-library";
import StatefulCheckBox from "./StatefulCheckBox.component";

const testProps = {
  label: "test label"
};

describe("StatefulCheckBox", () => {
  it("renders correctly", () => {
    const { container } = render(
      <StatefulCheckBox label={testProps.label} onChange={() => {}} />
    );

    expect(container.firstChild.textContent).toEqual(testProps.label.toUpperCase());
  });

  it("behaves correctly", () => {
    const onChangeMock = jest.fn();

    const { container, getByLabelText } = render(
      <StatefulCheckBox label={testProps.label} onChange={onChangeMock} />
    );

    const htmlCheckBox = getByLabelText(testProps.label, {exact: false});
    Simulate.change(htmlCheckBox);

    expect(htmlCheckBox.checked).toBeFalsy();

    expect(onChangeMock).toHaveBeenCalled();
  });
});
