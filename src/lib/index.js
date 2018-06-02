import TitleComponent from "./components/Title/Title.component";
export const Title = TitleComponent;

import StatefulCheckBoxComponent from "./components/StatefulCheckBox/StatefulCheckBox.component";
export const StatefulCheckBox = StatefulCheckBoxComponent;

import CheckBoxComponent from "./components/CheckBox/CheckBox.component";
export const CheckBox = CheckBoxComponent;

import CheckBoxContainerComponent from "./components/CheckBoxContainer/CheckBoxContainer.component";
export const CheckBoxContainer = CheckBoxContainerComponent;

import WrapperComponent from "./components/Wrapper/Wrapper.component";
export const Wrapper = WrapperComponent;

import TextInputComponent from "./components/TextInput/TextInput.component";
export const TextInput = TextInputComponent;

import TopTextInputComponent from "./components/TextInput/TopTextInput.component";
export const TopTextInput = TopTextInputComponent;

import LeftTextInputComponent from "./components/TextInput/LeftTextInput.component";
export const LeftTextInput = LeftTextInputComponent;

export default {
  Title: TitleComponent,
  StatefulCheckBox: StatefulCheckBoxComponent,
  Wrapper: WrapperComponent,
  CheckBox: CheckBoxComponent,
  CheckBoxContainer: CheckBoxContainerComponent,
  TextInput: TextInputComponent,
  TopTextInput: TopTextInputComponent,
  LeftTextInput: LeftTextInputComponent
};
