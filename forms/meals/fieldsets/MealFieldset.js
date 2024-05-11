import React from 'react';
import { observer } from 'mobx-react';

import Button from '../controls/Button';
// import BootstrapTextField from '../inputs/BootstrapTextField';
import BootstrapSelectField from '../inputs/BootstrapSelectField';

import {
  Trash as TrashIcon,
  PlusCircle as PlusCircleIcon,
  DashCircle as MinusCircleIcon,
  ArrowCounterclockwise as ArrowPathIcon,
  EraserFill
 } from 'react-bootstrap-icons';

const buttonClassName = "btn"
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
          icon={<EraserFill className={iconClassName}/>}
          label={field.label}
          onClick={field.onAdd}
          className={buttonClassName}
        ><PlusCircleIcon className={iconClassName} aria-hidden="true"/></Button>}
      {(!controls || controls.onDel) &&
        <Button
          onlyIcon
          text={'Delete'}
          type="button"
          icon={<TrashIcon className={iconClassName} aria-hidden="true"/>}
          label={field.label}
          onClick={field.onDel}
          className={buttonClassName}
        ><TrashIcon className={iconClassName} aria-hidden="true"/></Button>}
      {(!controls || controls.onClear) &&
        <Button
          onlyIcon
          text={'Clear'}
          type="button"
          icon={<EraserFill className={iconClassName}/>}
          label={field.label}
          onClick={field.onClear}
          className={buttonClassName}
        ><MinusCircleIcon className={iconClassName} aria-hidden="true"/></Button>}
      {(!controls || controls.onReset) &&
        <Button
          onlyIcon
          text={'Reset'}
          type="button"
          icon={<ArrowPathIcon className={iconClassName} aria-hidden="true"/>}
          label={field.label}
          onClick={field.onReset}
          className={buttonClassName}
        ><ArrowPathIcon className={iconClassName} aria-hidden="true"/></Button>}
    </span>
  )
});

const fieldsetStyle = {
  backgroundColor: '#f2f2f2',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem'
};

const headingStyle = { 
  marginBottom: '0',
  fontWeight: 'bold',
  color: 'gray'
}

const fieldsContainerStyle = {
  marginBottom: '3rem'
}

const textFieldContainerStyle = {
  marginBottom: '1rem'
}

const MealFieldset = observer(({ meal }) => (
  <fieldset>
    <div style={fieldsetStyle}>
      <h5 style={headingStyle}>
        {meal.label}
      </h5>
      <div>
        <FieldControl
          field={meal}
          labels={false}
          controls={{
            onClear: false,
            onReset: true,
          }}
        />
      </div>
    </div>
    <div style={fieldsContainerStyle}>
      {/* <div style={textFieldContainerStyle}>
        <BootstrapTextField field={meal.$('name')} />
      </div> */}
      {/* <div style={textFieldContainerStyle}>
        <BootstrapSelectField field={meal.$('type')} />
      </div> */}
    </div>
    <hr className="mt-2"/>
    <div>
      <FieldControl
        field={meal}
        // labels={false}
        controls={{
          onSubmit: false,
        }}
      />
    </div>

  </fieldset>
));

export default MealFieldset;