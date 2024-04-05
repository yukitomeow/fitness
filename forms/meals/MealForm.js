import React from 'react';
import { observer } from 'mobx-react';

import MealFieldset from './fieldsets/MealFieldset';
import NestedAllFoodsFieldset from './fieldsets/NestedAllFoodsFieldset';
import FormControls from './controls/FormControls';
import form from './MealFormManager';
import Form from 'react-bootstrap/Form';

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