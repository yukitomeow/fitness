import React from 'react';
import { observer } from 'mobx-react';
import Form from 'react-bootstrap/Form';

/*
import React from 'react';
import { observer } from 'mobx-react';
//import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';

const bootstrapTextFieldStyle = {
  width: '100%',
  display: 'flex',
}

export default observer(({
  field,
  type = 'text',
  placeholder = null,
  validatingText = 'validating...',
}) => (
  <div style={bootstrapTextFieldStyle}>
    <Form.Control
      {...field.bind({ type, placeholder, validatingText })}
      variant="standard"
      fullWidth
    /><br />
  </div>
));*/

const BootstrapSelectField = observer(({
    field,
    type = 'text',
    placeholder = null,
    validatingText = 'validating...',
}) => {
    /*
    const handleChange = (event) => {
        if (props.onChange) {
            props.onChange(event.target.value);
        }
    };*/

    return (
      <Form.Select aria-label="Meal type">
        <option>-----</option>
        <option value="1">Breakfast</option>
        <option value="2">Lunch</option>
        <option value="3">Dinner</option>
      </Form.Select>
    );
  })
  
  export default BootstrapSelectField;

/*
const InputSelectField = (props) => {
    console.log('InputSelectField')
    console.log(props);
    
    const handleChange = (event) => {
        if (props.onChange) {
            props.onChange(event.target.value);
        }
    };

    return (
        <select
            id={props.id}
            name={props.name}
            autoComplete={props.autoComplete}
            className={props.className}
            onChange={handleChange}
            value="Antarctica">
            {props.options.map((name, index) => (
                <option key={index}>{name}</option>
            ))}
        </select>
    )
}

export default InputSelectField;
*/