import React from "react";
import { render, Simulate, wait } from "react-testing-library";
import CheckBoxContainer from "./CheckBoxContainer.component";

const testProps = {
  label: "test label"
};

describe("CheckBoxContainer", () => {
  it("renders correctly, and calls mounting lifecyle methods", async () => {
    const apiCallMock = jest.fn().mockResolvedValue();

    const { container, getByLabelText } = render(
      <CheckBoxContainer label={testProps.label} apiCall={apiCallMock} />
    );

    expect(container.firstChild.textContent).toEqual("loading...");
    expect(apiCallMock).toHaveBeenCalled();

    let htmlCheckBox;
    await wait(
      () => (htmlCheckBox = getByLabelText(testProps.label, { exact: false }))
    );

    expect(container.firstChild.textContent).toEqual(
      testProps.label.toUpperCase()
    );
  });

  it("behaves correctly", async () => {
    const apiCallMock = jest.fn().mockResolvedValue();

    const { container, getByLabelText } = render(
      <CheckBoxContainer label={testProps.label} apiCall={apiCallMock} />
    );

    let htmlCheckBox;
    await wait(
      () => (htmlCheckBox = getByLabelText(testProps.label, { exact: false }))
    );
    Simulate.change(htmlCheckBox);

    expect(htmlCheckBox.checked).toBeTruthy();
  });
});
