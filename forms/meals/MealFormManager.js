import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import MobxReactForm from 'mobx-react-form';
import MealFormFieldsProps from './MealFormFieldsProps';
//import nestedFields from '../forms/setup/nestedFields';

const plugins = {
  dvr: dvr({ package: validatorjs }),
};

export default new MobxReactForm({ ...MealFormFieldsProps }, {plugins, name: 'Nested Fields' });