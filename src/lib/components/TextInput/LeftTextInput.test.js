import React from "react";
import {
  render,
  Simulate,
  renderIntoDocument,
  fireEvent,
  cleanup
} from "react-testing-library";

import LeftTextInput from "./LeftTextInput.component";

const changeInputValue = (input, newValue) => {
  input.value = newValue;
  Simulate.change(input);
};

describe("LeftTextInput", () => {
  let container, getByLabelText, getByTestId, unmount;

  beforeEach(() => {
    let renderOutput = render(<LeftTextInput id="test-id" label="a label" />);

    getByLabelText = renderOutput.getByLabelText;
    getByTestId = renderOutput.getByTestId;
    unmount = renderOutput.unmount;
  });

  afterEach(() => {
    cleanup;
    unmount();
  });

  it.only("initially renders with no validation errors and no value", () => {
    const input = getByLabelText("a label");

    expect(input.id).toEqual("test-id");
    expect(input.value).toEqual("");
    expect(getByTestId("input-char-count").textContent).toEqual("0/15");
    expect(getByTestId("input-validation").classList).toContain(
      "LeftTextInput__validation--hidden"
    );
  });

  it("displays validation errors when too few characters are entered", () => {
    const input = getByLabelText("a label");

    changeInputValue(input, "a");

    expect(getByTestId("input-validation").classList).toContain(
      "LeftTextInput__validation"
    );
  });

  it("does not display validation when enough characters have been entered", () => {
    const input = getByLabelText("a label");

    changeInputValue(input, "this is a long test");

    expect(getByTestId("input-validation").classList).toContain(
      "LeftTextInput__validation--hidden"
    );
  });

  it("updates validation when the character count falls below the minimum", () => {
    const input = getByLabelText("a label");

    changeInputValue(input, "this is a long test");

    expect(getByTestId("input-validation").classList).toContain(
      "TopTextInput__validation--hidden"
    );

    changeInputValue(input, "this is short");

    expect(getByTestId("input-validation").classList).toContain(
      "TopTextInput__validation"
    );
  });

  it("displays and updates the character count", () => {
    const input = getByLabelText("a label");

    changeInputValue(input, "a");

    expect(getByTestId("input-char-count").textContent).toEqual("1/15");

    changeInputValue(input, "abcd");

    expect(getByTestId("input-char-count").textContent).toEqual("4/15");

    changeInputValue(input, "abcdefghijklmnopqrstuvwxyz");

    expect(getByTestId("input-char-count").textContent).toEqual("26/15");
  });

  it("renders into document", () => {
    const { container, getByLabelText, getByTestId } = renderIntoDocument(
      <TopTextInput id="test-id" label="a label" />
    );

    const input = getByLabelText("a label");

    expect(getByTestId("input-char-count").textContent).toEqual("0/15");

    input.value = "a";
    fireEvent.change(input);

    expect(getByTestId("input-char-count").textContent).toEqual("1/15");
  });
});
