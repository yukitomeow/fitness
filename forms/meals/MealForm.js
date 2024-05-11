import React from 'react';
import { observer } from 'mobx-react';

import MealFieldset from './fieldsets/MealFieldset';
import NestedAllFoodsFieldset from './fieldsets/NestedAllFoodsFieldset';
import FormControls from './controls/FormControls';
import form from './MealFormManager';
import Form from 'react-bootstrap/Form';

import { useRouter } from "next/navigation";

const containerStyle = {
  backgroundColor: '#f2f2f2',
  padding: '1rem',
  borderRadius: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0px 4px 8px #f0f0f0',
  border: '1px solid #e8e8e8'
};

const headingStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  color: 'gray'
};

const MealForm = (props) => {

  const router = useRouter();
  const onSuccess = async (form) => {

    const values = form.values();
    try {
      const response = await CreateMeal(values.user, values.email, values.password);
      console.log(response)
      saveToStorage('accessToken', response.key);
      const user = await GetUserInfo()
      console.log("user is ", user)
      userStore.authenticate(user)
      router.push('/');

    } catch (error) {
      console.log(error)
    }
    //Login(values.username, values.email, values.password).then(response => {
    //     console.log(response);//login token
    //     saveToStorage('accessToken', response.key);
    //     GetUserInfo()
    // }).then(response=>{
    //     console.log("Authentication complete",response)
    //     router.push('/'); 
    // })     

    // .catch(error => {
    //     console.log(error);
    // });
    // console.log('onSuccess');

    form.clear()
  }

  const onError = (form) => {
    console.log('onError')
    console.log(form)
  }

  const handleSubmit = (e) => {
    console.log("handleSubmit called")
    console.log(e)
    e.preventDefault()
    form.onSubmit(e, { onSuccess: onSuccess, onError: onError })
  }
  return (
    <Form style={containerStyle}>
      <h3 style={headingStyle}>Create Meal</h3>
        <MealFieldset meal={form.$('meal')}/>
      <br/>
      {form.has('foods') && <NestedAllFoodsFieldset foods={form.$('foods')} />}
      <FormControls
        form={form}
        controls={{
          onSubmit: true,
          onReset: false,
          onClear: true,
        }}
      />
    </Form>
  )
};

export default observer(MealForm);