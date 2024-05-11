import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import MobxReactForm from 'mobx-react-form';

const plugins = {
    dvr: dvr({ package: validatorjs }),
};

const fields = [{
    name: 'username',
    label: 'Username',
    placeholder: 'Insert your username',
    rules: 'required|string|between:5,25',
}, {
    name: 'email',
    label: 'Email',
    placeholder: 'Email',
    rules: 'required|email|string|between:5,25',
}, {
    name: 'password',
    label: 'Password',
    placeholder: 'Password',
    rules: 'required|string|between:5,25',
    type: 'password'
}];


//  const hooks = {
//    onSuccess(form) {
//      alert('Form is valid! Send the request here.');
//      // get field values
//      console.log('Form Values!', form.values());
//    },
//    onError(form) {
//      alert('Form has errors!');
//      // get all form errors
//      console.log('All form errors', form.errors());
//    }
// }





const form = new MobxReactForm({ fields }, { plugins });
//const form = new MobxReactForm({ fields }, { plugins });

export default form;