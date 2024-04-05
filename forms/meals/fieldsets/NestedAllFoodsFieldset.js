import React from 'react';
import { observer } from 'mobx-react';

import Button from '../controls/Button';
import NestedFoodFieldset from './NestedFoodFieldset.js';
//import FieldControl from '../controls/FieldControls';

import {
  Trash as TrashIcon,
  PlusCircle as PlusCircleIcon,
  DashCircle as MinusCircleIcon,
  ArrowCounterclockwise as ArrowPathIcon,
  EraserFill
 } from 'react-bootstrap-icons';

const buttonClassName = "btn";
const iconClassName = "flex-shrink-0 h-5 w-5 text-red-400"

const controlStyle = {
  display: 'flex',
  alignItems: 'center'
}

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
          icon={<MinusCircleIcon className={iconClassName} aria-hidden="true"/>}
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

const NestedAllFoodsFieldset = observer(({ foods }) => (
  <fieldset>
    <div style={fieldsetStyle}>
      <h5 style={headingStyle}>
        {foods.label}
      </h5>
      <div className="fr">
        <FieldControl
          field={foods}
          labels={false}
          controls={{
            onAdd: true,
            onClear: false,
            onReset: false,
          }}
        />
      </div>
    </div>

    {foods.map(food_item =>
      <NestedFoodFieldset
        key={food_item.key}
        food_item={food_item}
      />)}
  </fieldset>
));

export default NestedAllFoodsFieldset;