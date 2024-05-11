import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import MobxReactForm from 'mobx-react-form';
import MealFormFieldsProps from './MealFormFieldsProps';
//import nestedFields from '../forms/setup/nestedFields';

const plugins = {
  dvr: dvr({ package: validatorjs }),
};

// const fields = [{
//   name: 'username',
//   label: 'Username',
//   placeholder: 'Insert your username',
//   rules: 'required|string|between:5,25',
// }, {
//   name: 'email',
//   label: 'Email',
//   placeholder: 'Email',
//   rules: 'required|email|string|between:5,25',
// }, {
//   name: 'password',
//   label: 'Password',
//   placeholder: 'Password',
//   rules: 'required|string|between:5,25',
//   type: 'password'
// }];

const fields=[
  {
    name:"meal",
    label:""

  }

]

export default new MobxReactForm({ ...MealFormFieldsProps }, {plugins, name: 'Nested Fields' });