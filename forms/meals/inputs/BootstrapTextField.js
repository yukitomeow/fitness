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
));