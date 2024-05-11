import React from 'react';
import { observer } from 'mobx-react';

//import NestedHobbyFieldset from '../fieldsets/NestedHobbyFieldset';
//import FieldControl from '../controls/FieldControls';
//import BootstrapTextField from '../inputs/BootstrapTextField';
import Button from '../controls/Button';

import {
  Trash as TrashIcon,
  PlusCircle as PlusCircleIcon,
  DashCircle as MinusCircleIcon,
  ArrowCounterclockwise as ArrowPathIcon,
  EraserFill
 } from 'react-bootstrap-icons';

 const buttonClassName = "btn";
 const iconClassName = "flex-shrink-0 h-5 w-5 text-red-400"

const FieldControl = observer(({ field, controls = null }) => {
  return (
    <span>
      {(!controls || controls.onSubmit) &&
        <Button
          type="submit"
          className={buttonClassName}
          onClick={field.onSubmit}
          disabled={field.submitting}
          content={(field.submitting || field.validating)
            ? <b><i className="fa fa-spinner fa-spin"/></b>
            : <b><i className="fa fa-dot-circle-o"/> Submit</b>}
        />}
      {(!controls || controls.onAdd) &&
        <Button
          onlyIcon
          text={'Add'}
          type="button"
          icon={<PlusCircleIcon className={iconClassName} aria-hidden="true"/>}
          label={field.label}
          onClick={field.onAdd}
          className={buttonClassName}
        ></Button>}
      {(!controls || controls.onDel) &&
        <Button
          onlyIcon
          text={'Delete'}
          type="button"
          icon={<TrashIcon className={iconClassName} aria-hidden="true"/>}
          label={field.label}
          onClick={field.onDel}
          className={buttonClassName}
        ></Button>}
      {(!controls || controls.onClear) &&
        <Button
          onlyIcon
          text={'Clear'}
          type="button"
          icon={<EraserFill className={iconClassName}/>}
          label={field.label}
          onClick={field.onClear}
          className={buttonClassName}
        ></Button>}
      {(!controls || controls.onReset) &&
        <Button
          onlyIcon
          text={'Reset'}
          type="button"
          icon={<ArrowPathIcon className={iconClassName} aria-hidden="true"/>}
          label={field.label}
          onClick={field.onReset}
          className={buttonClassName}
        ></Button>}
    </span>
  )
});


const fieldSetStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1rem'
}

export default observer(({ food_item }) => (
  <fieldset style={fieldSetStyle}>
    {/* <BootstrapTextField field={food_item.$('name')} />
      <FieldControl
        field={food_item}
        // labels={false}
        controls={{
          onDel: true,
          onClear: false,
          onReset: false,
        }}
      />
    <FieldControl
      field={food_item}
      controls={{ onSubmit: false }}
    /> */}
  </fieldset>
));