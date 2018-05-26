import TitleComponent from './components/Title/Title.component'
export const Title = TitleComponent

import StatefulCheckBoxComponent from './components/StatefulCheckBox/StatefulCheckBox.component'
export const StatefulCheckBox = StatefulCheckBoxComponent

import CheckBoxComponent from './components/CheckBox/CheckBox.component'
export const CheckBox = CheckBoxComponent

import WrapperComponent from './components/Wrapper/Wrapper.component'
export const Wrapper = WrapperComponent

import GDPRFormComponent from './components/GDPRForm/GDPRForm.component'
export const GDPRForm = GDPRFormComponent

export default {
  Title: TitleComponent,
  StatefulCheckBox: StatefulCheckBoxComponent,
  Wrapper: WrapperComponent,
  GDPRForm: GDPRFormComponent,
  CheckBox: CheckBox
}